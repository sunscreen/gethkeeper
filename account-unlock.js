/**
Gethkeeper by ncoreudmp
*/

var co = require('co');
var prompt = require('prompt-promise');
var crypto = require('crypto');
var fs = require('fs');
var web3_extended = require('web3_ipc');
var myos = require("os");

var coin = "akroma";
var rpcport = '8545';
var unlockduration = '20';
var cipheriv = "";
var algorithm = 'aes-256-ctr';
var defaultAc = "";
var defaultAcPWD = "";
var hw="";
var iv="";
var password="";

var localuser = myos.userInfo().username;

var options = {
    host: '/home/' + localuser + '/.' + coin + '/geth.ipc',
    ipc: true,
    personal: true,
    admin: false,
    debug: true
};

var ipcweb3 = web3_extended.create(options);


var AESCrypt = {};
const args = process.argv;

if (!args[2]) {
    console.log("try --help");
    process.exit(1);
}

if (args[2] == '--dec') {
    decryptionmode();
}

if (args[2] == '--enc') {
    gensecurepasswds();
}



if (args[2] == '--regeniv') {
    cipheriv = args[3];
    gensecurepasswds();
}

if (args[3]) {
    rpcport = args[3];
}

if (args[2] == '--help') {
    console.log("usage: ./account --<mode> <rpcport>\nexamples:\n./account-unlock.js --enc 8545\n./account-unlock --dec 8545\n./account-account -regeniv iv");
    process.exit(1);
}


AESCrypt.decrypt = function(cryptkey, iv, encryptdata) {
    var decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv);

    return Buffer.concat([
        decipher.update(encryptdata),
        decipher.final()
    ]);

}

AESCrypt.encrypt = function(cryptkey, iv, cleardata) {
    var encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv);
    return Buffer.concat([
        encipher.update(cleardata),
        encipher.final()
    ]);
}


function setAccount(act) {
    defaultAc = act;
}

function setPassword(pwd) {
    defaultAcPWD = pwd;
}

function unlockAccount(acAddress) {

    if (acAddress != undefined && acAddress != null) {
        console.log("Attempting to unlock..");

        ipcweb3.personal.unlockAccount(acAddress, defaultAcPWD, parseInt(unlockduration), function(error, result) {

            if (result) {
                console.log("account unlocked for " + unlockduration + " seconds!");
                setPassword(null);
                console.timeEnd("password_vuln");
                console.log("plain text password unloaded from ram...");
                return result;
            }

            if (error) {
                console.log("there was a error unlocking the account");
                return false;
            }
        });

    }

    return false;

}



function execute() {

    console.log("*******************************************");
    var mytimer = setInterval(function unlocker() {
        console.time("password_vuln");
        dodecrypt();
        unlockAccount(defaultAc);
    }, 29000);

}



function gensecurepasswds() {
    co(function* genPrompt() {
            var passwd = yield prompt.password('please enter your password to encrypt: ');
            var ethaccount = yield prompt('please enter your account: ');
            return yield [passwd, ethaccount];
        })
        .then(function fulfilled(array) {

            prompt.end();
            var token = crypto.randomBytes(8).toString("hex");
            var ethprompt = array[1];
            hw = array[0];

            console.log("Using " + coin + " account [0]:", ethprompt);
            console.log("Generated cipher key:" + token.toString("hex"));
            console.log("Please kep these safe");

            var geniv = crypto.randomBytes(8).toString("hex");
            var geniv_code = "\ncipheriv='" + geniv + "';\n";
            var account_code = "var exacc='" + ethprompt + "';\n";

            console.log(geniv_code);

            var cryptkey = crypto.createHash('sha256').update(token).digest(),
                iv = new Buffer(geniv.toString("binary")),
                buf = new Buffer(hw), // 32 chars
                enc = AESCrypt.encrypt(cryptkey, iv, buf);

            console.warn("Iv Code: \n" + geniv_code);
            console.warn("Encrypted Base64:", enc.toString('base64'));

            fs.appendFile("./account-unlock.js", geniv_code + account_code, function(err) {
                if (err) {
                    console.log(err);
                }

                console.log("The file code was update please retain a copy of it incase you need to regenerate your binary");
                process.exit(1);

            });

        })
        .catch(function rejected(err) {
            console.log('error:', err.stack);
            process.stdin.pause();
        });



}

function dodecrypt() {
    var cryptkey = crypto.createHash('sha256').update(password).digest();
    var buf = new Buffer(hw, 'base64');

    iv = new Buffer(cipheriv.toString("binary"));

    var dec = AESCrypt.decrypt(cryptkey, iv, buf);

    console.log("decrypting password to unlock account...");
    setPassword(dec.toString('utf8'));

    console.warn("decrypt proof: <omitted to protect the innocent>");

}

function decryptionmode() {

    co(function* genPrompt() {
            var username = yield prompt.password('hashed password: ');
            var password = yield prompt.password('cipher key: ');
            return yield [username, password];
        })
        .then(function fulfilled(array) {
            prompt.end();
            hw = array[0];
            password = array[1];
            var file = 'account-unlock';
            fs.chmod(file, 0o700, function(err) {
                if (err) throw err;
            });

            console.log("set permissions to 0o700");
            console.log("*****************************************");
            console.warn("Executing account unlock every 300 seconds\nUnlock duration: " + unlockduration + " secs");

            setAccount(exacc);
            execute();

        })
        .catch(function rejected(err) {
            console.log('error:', err.stack);
            process.stdin.pause();
        });
}



process.on('uncaughtException', function unhandledshit(error) {
    console.log("kablllewm something terrible happened!");
    console.log(error);
});
