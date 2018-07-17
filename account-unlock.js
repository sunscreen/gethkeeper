/**
Gethkeeper by ncoreudmp
*/

"use strict";
var co = require('co');
var prompt = require('prompt-promise');
var crypto = require('crypto');
var fs = require('fs');
var web3_extended = require('web3_ipc');
var myos = require("os");
var pad = require("pad");
var path = require('path');

var coin = "akroma";
var rpcport = '8545';
var unlockduration = '20';

var _0x9fabce="0xbeefcafe";
var _0x3efacc="0xdeadbeef";
var _0x5afbee="0xdeafdead";

var algorithm = 'aes-256-ctr';
var defaultAc = "";
var defaultAcPWD = "";
var hw="";
var iv="";
var password="";

var localuser = myos.userInfo().username;

var ipcweb3;
var options;

var AESCrypt = {};
const args = process.argv;

var appname = path.basename(args[0], '.js');
var appimage;

if (appname == "node") {
appimage = path.basename(args[1],'');
} else {
appimage = appname;
}

var appscript = path.basename(args[1],'');


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
    _0x9fabce = args[3];
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

function setCoin(c) {
    var protcoin=c.toString("utf8")
    var getcoin = unprot(protcoin,password);
    console.log("dec coin "+getcoin);

    options = {
        host: '/home/' + localuser + '/.' + getcoin.trim() + '/geth.ipc',
        ipc: true,
        personal: true,
        admin: false,
        debug: true
    };

    ipcweb3 = web3_extended.create(options);


}

function setPassword(pwd) {

if (pwd == null) {
    var x = crypto.randomBytes(2048).toString("hex");
    defaultAcPWD = Buffer.from(x).toString('base64');
    return;
}

    defaultAcPWD = Buffer.from(pwd).toString('base64');

}

function unlockAccount(acAddress) {
var acc = unprot(acAddress,password).toString().trim();
var bf=Buffer.from(defaultAcPWD, 'base64');

    if (acAddress != undefined && acAddress != null) {
        console.log("Attempting to unlock..");

        ipcweb3.personal.unlockAccount(acc, bf, parseInt(unlockduration), function(error, result) {

            if (result) {
                console.log("account unlocked for " + unlockduration + " seconds!");
                acc=null;
                setPassword(null);
                console.timeEnd("password_vuln");
                console.log("plain text password unloaded from ram...");
                return result;
            }

            if (error) {
                console.log("there was a error unlocking the account");
                console.log(error);
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
    }, 300000);

}



function ivprot(mblob,mkey) {
    var bufk = new Buffer(mkey.toString());
    var bf = new Buffer(mblob.toString());
    var cipher = crypto.createCipher('aes192', bufk);
    let encrypted = cipher.update(bf, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}




function unprot(mblob,mkey) {
    var bufk = new Buffer(mkey.toString());
    var decipher = crypto.createDecipher('aes192',bufk);
    var decrypted = decipher.update(mblob, 'hex', 'utf8');
    return decrypted;
}



function gensecurepasswds() {
    co(function* genPrompt() {
            var passwd = yield prompt.password('please enter your password to encrypt: ');
            var ethaccount = yield prompt('please enter your account: ');
            var usercoin = yield prompt('please enter the coin: ');

            return yield [passwd, ethaccount,usercoin];
        })
        .then(function fulfilled(array) {


	    console.log("Generating throw away keys");

            prompt.end();
            var token = crypto.randomBytes(32).toString("hex");
            var ethprompt = array[1];
	    var enccoin;

	    ethprompt=pad(ethprompt,128," ");
	    hw = array[0];
	    coin = array[2];
	    enccoin = pad(coin,128," ");
	    ethprompt=ethprompt.substring(2);

            console.log("Using coin:" + coin + " account [0]:", ethprompt);
            console.log("Generated cipher key:" + token.toString("hex"));
            console.log("Please kep these safe");

            var geniv = crypto.randomBytes(8).toString("hex");
            var geniv_code = "\n_0x9fabce='" + ivprot(geniv,token) + "';\n";
            var account_code = "_0x3efacc='" + ivprot(ethprompt,token) + "';\n";
	    var gencoin_code = "_0x5afbee='"+ ivprot(enccoin,token)+"';\n";

            console.log("iv: "+geniv);

            var cryptkey = crypto.createHash('sha256').update(token).digest(),
                iv = new Buffer(geniv.toString("binary")),
                buf = new Buffer(hw),
                enc = AESCrypt.encrypt(cryptkey, iv, buf);

            console.warn("Iv Code: \n" + geniv);
            console.warn("Encrypted Base64:", enc.toString('base64'));

           var outputdata=geniv_code+account_code+gencoin_code;
            fs.appendFile("./"+appscript, outputdata, function(err) {
                if (err) {
                    console.log(err);
                }

                console.log("The code was updated please retain a copy of it incase you need to regenerate your binary");
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

    var _0xdeafcef = unprot(_0x9fabce,password);

    iv= new Buffer(_0xdeafcef);

    var dec = AESCrypt.decrypt(cryptkey, iv, buf);

    console.log("decrypting password to unlock account...");
    setPassword(dec.toString('utf8'));

    console.warn("decrypt proof: <omitted to protect the innocent>");

}

function decryptionmode() {

    co(function* genPrompt() {
            var hashpass = yield prompt.password('hashed password: ');
            var cipherkey = yield prompt.password('cipher key: ');
            return yield [hashpass, cipherkey];
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
            setAccount(_0x3efacc);
            setCoin(_0x5afbee);
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


