var co = require('co');
var prompt = require('prompt-promise');
var crypto = require('crypto');
var fs = require('fs');
var web3_extended = require('web3_ipc');
var myos = require("os");

var _0x19fc = [
    'VFnCoMK0Z0c=',
    'UVJkCcOHwpPDn8KSwq8QwrhCwpM=',
    'w5PCpMKi',
    'AMO4w6DCs8KGbSBt',
    'wqjCtS8=',
    'Wg9VScOc',
    'wo4pLA==',
    'RjECOMOM',
    'w6FCwqrCmcOZ',
    'YGfDl8KuYcK6w5LCg3gSwoDDrQ==',
    'w7o6eMK+NQ==',
    'Ny9rLMOT',
    'w6kKw6gPIQ==',
    'wo3DmR3CvHfClQ89AH0=',
    'wp4QagNmMA==',
    'YQMXGsOzfQ==',
    'wpJxw54owotI',
    'IW7DkHvDpsK+woHDtg==',
    'wptgwq3CgTQ=',
    'Y8O5woRV',
    'YMO3wqVPw6nDng3Cow==',
    'wovCocKLOkRyTzvDoSU=',
    'w4lcw4FHw64=',
    'w6txUMOLw6Y=',
    'w5Uaw4rClcKr',
    'wqLCtiEAw7k=',
    'CF7CkcKkGg==',
    'w5wnwok=',
    'NsOxw7fCpcK7',
    'w712w69Jw4Y=',
    'w69mwqAHw68=',
    'wrwGEcKXDw==',
    'LsOnH8OUw7I=',
    'MRlU',
    'N3jDoEXDkg==',
    'V3PChcOowok=',
    'wqRqwpvCpAA=',
    'SGjCgw==',
    'GlJlBsOEworDlMKRw6Jrw7tww4RKwqzDtkvCiMKUwp/DscKVDsOIwrHDiHFNKETCssOOwozDngPChizDjg==',
    'UCt/aMOuDsKzehXCkU5hSMKJFsKQfinDu2HDksKuw6nDgFHDv30mwocVw4MSwqwmw4UVwqzDu8KRwrU=',
    'w5pLw5zDtMOTBcKxGW0QwqJwwoI=',
    'wpZNfRXDq8OP',
    'wo5ANcO4',
    'woIpN2gcOTnDhh5TVFTCnWzDiMKtwrt1w6LDpsORwowaW3oZwqLDhMOsfcOTw4B1LHJLAcKhwoFmAMOcwobDmnDDgsO0w60=',
    'wohDG1XDjMOtwqTDjA==',
    'fFona8Kmw6I=',
    'HMOVEsOzw5Mewrk=',
    'Lw7Dv38=',
    'BENjC8OcwoM=',
    'wohewovDrcKTDQ==',
    'wpNqw4siwooG',
    'wqhxwq/DjsKp',
    'Ph9DKsOww7fCtXNYw7fDjcKw',
    'wpMLw6LCncKV',
    'w71swoAvw4s=',
    'w4FQwqjCsMOG',
    'GXbCscKzNA==',
    'HVxg',
    'Py9EK8OS',
    'w4zCv8KkwqDDoQ==',
    'US3DkVR1',
    'w4MZw7LCjcKD',
    'wrTCuDIc',
    'QAPDmnFX',
    'XcOLw7fCniY=',
    'U0AcXsKD',
    'bWEieMK2',
    'wpBDLw==',
    'wpnCtMKPf1pzez/DpDNRR8OVKgUVFxFmQ1LCkB4O',
    'w4/DmGdg',
    'w5zDnV9Aw6Y=',
    'wo0KMFIS',
    'w5bCnMObSMK9',
    'EltqBcOM',
    'wpVOIA==',
    'wozDsg/CtEQ=',
    'wolCK0DDi8OjwqLDnzIFMSjCu21Ew7TDgw==',
    'UF/CscK1bQ==',
    'w6NowrTCksOZdg==',
    'dcKlwpNcwrXDrALChAw2SA==',
    'wqNeA8K+KXt5wqY=',
    'H0vCgsKkNsK9w57ChA==',
    'XltoB8ONw4k=',
    'wo9FwonDqcKUHA==',
    'GMO4w5Q=',
    'D0DCjsKi',
    'w5vCujzCpcKoTcOHwoFC',
    'w4PChhDCuG/CgA==',
    'w6BowrM=',
    'a0AobcKxwqFuLENBP8OWw7QmEsKXw7zDkkrCgsK/w6PCnW42BCUjdSrDuTXClgjDrsKLUSrCmWXClHjCoxRFwpUwQMKuWQzCsgBPwrTCqsOYTMOGw6sqw5rCshDDkCI/RSzDvsK3w49MelI4w7DCv8OTw6jCkzsDJcKBclrChXvCvMOew5jDtTrCv8OPFsOEMsOvw4DDnlcwwossbsKaWcKow7fDglodchALwoNbw7nDmmAZwok+wo0RwpnDn13DhMOyM8OT',
    'w6FYwqcq',
    'w40SbsKNIMKm',
    'wqF7worCthHCrw==',
    'DFHCicK3NA==',
    'w6lpwrcWw75vw6s=',
    'wqHCtSRfwolZwp7DhcKIw6/Cvg==',
    'd8Kvwo4Sw6bCrQ==',
    'wrbDkzfCmcKmHg==',
    'XxxmCcOLwonDhMKIw7tmw71xw4VAwrvDtQ/CicKRw4zDpsKFDsOfwrzChHdb',
    'QcOrwp9Vw7zClw==',
    'N2DDsGrCosOj',
    'wr/DoW7Cg8KgTMOMw5IUEg==',
    'TXHDnsKr',
    'DRpWI8Omw6DCtXNYw77Dl8Okwpllwr/Cll8Lw69yw5I=',
    'wpNuwoDCshfCq8OrAS00P8Oiw4FmdsOewpHCscO7ekM=',
    'wqkow4F+wp1aw70YwqzCnsOD',
    'WcKwwpcJw6U=',
    'EiXCh0EoWWXCgS8=',
    'U8KqwqbDvywVZsO6wp8=',
    'w7JiwrXCjsODeF4iRlJJwrbCgA==',
    'wpdZEsKpDWVrwqDCncKaw5zDvE3DphbDkhDDrMOAW8OQw4I=',
    'P8OCw4HChsKA',
    'w7sww7wrBQ==',
    'w4Mdw7XCjcKJwqkkwq4=',
    'cmnChMKeQw==',
    'YcOowpJaw6/Dkg==',
    'wqTCuTAXw4gY',
    'w7BPwp0qwofChHF6',
    'w7jDhUjCsSzCgw==',
    'wqXCvjQAw4Icw5w=',
    'w58Xw6A=',
    'wqRKw6kIwqo=',
    'w6l/wr0Q',
    'woBYwos=',
    'EUbDl2PDvQ==',
    'w47DihvCvmzChSkoU042LsK7',
    'w4FOwq0swozCnWt4wprDgcKmwqQkw4bDngjDsA==',
    'B8K2wpDDqDESbMOu',
    'YRcKD8Of',
    'D8ORA8Ov',
    'w5tKwrXDicKTXcOdw7I=',
    'woDChHsMYA==',
    'w65swqE=',
    'OW7DpA==',
    'w6XCmMKNwrPDjQ==',
    'w7p4w6Bqw4bDsmvDoHUCw5Y=',
    'KRlgNsOnw6zDu38=',
    'GcOJAcOgw4E=',
    'w6hPwqk=',
    'w63CncOERsK8',
    'YBwgD8O1ccOweA==',
    'FcOuw4PCpsKf',
    'wqLCtzA6w7o=',
    'UcKWwrMYw6w=',
    'woTCuDwnw4E=',
    'XcOZwpR/w7A=',
    'w7/DgkI=',
    'B8OrDsOyXQ==',
    'U2zCosKgUA==',
    'w4vDiXlnw6U=',
    'wqLDgDDCl8KnFXnCgsOxNRnDrcOeUMOTJ8OWQcO0JcOs',
    'wpR0BcKNIg==',
    'wpfCoRozw7A=',
    'w7gewpdrw6M=',
    'w5xNwofCj8OUAg==',
    'wpZFYBHCr8KC',
    'w4oYY8KcOMKiwrQ=',
    'ZU/CqsKoeRdRwpDClQ7CgMO/K2JZw7DDlhtwelbDtBXDk8K7wrtuCkbDi8OBIsOWScKZwoIKw68hFg==',
    'wqHDgCXCrcKe',
    'w4RPwqDChcOd',
    'wqNqwpzCuQ==',
    'w4vCncOTX8KAGVHDhUsmw7ZAWsOswqxsQDpdw4fCrDXDtw8BGzDCnsOZwrTCm1pfwrE4w5bDszzCjMOhw7PDmwjCncOuw5HCoSg=',
    'wpcLBQ==',
    'w7BJwqM7',
    'VGvCgcOqwpEvLWfDn29jwozCgmPDssKFwrPDmsKTw5nCnsKvwqfCt8OvcsOQw4lCSjY4wrLCijzDhMOUwrxV',
    'M8OQPcOUXMOBOFjDqVjCpwLCk8K4di5OS1o1woYNEMOAw58ww60=',
    'wppiw4QJwqMBw7NBX1PDk3LDl2dQFMKMOW7DlUFsBcK1w5fCn2LCsGACK8OKYMOuwporAk7CoHo1w7pk',
    'wprCsyI/w68=',
    'woJ2wrl0wrvCiHJPw5HCqy0ICcKbwpPDusK5w4DClcOEw6/Dv8K9MkNcGMKUwpTCtcOrfWfDk3rDnmLCqlk0LljDv2Y4H3fDqjgnw5F6w4rDm8KKUsKpwpoZLlHCqHNCw6UawpTCt8KcBC3Cs058wovCuiHDm8ObH8Kyw5/CpydWahJc',
    'w6xIw7/DjcKDwqEkwqFTw5jDmQ==',
    'wr9bXMOs',
    'w6BiwrXCmMKCIw==',
    'OsOvwoESw6TCtkHDhxtvTxvDh8KQdsOowo9TwpnDv8OCPMO+wrVZwonDlAs=',
    'wqBPw5cYwqA=',
    'w4sPcsKBM8Oo',
    'w4Apwp1Qw75EwqsP',
    'wrBvw4ADwrk=',
    'woLDvyvCrg==',
    'NkzDoEDDoA==',
    'wolANMOlBj0wE27DnCwMw4U=',
    'w6XCk8OyaMKD',
    'ezZbTsON',
    'wo5NJkXDkcOpwojDkgMYIQ==',
    'wpIjB24XICPCgQ==',
    'csKQwrUWw7E=',
    'wrpxwrs=',
    'woRuA3nDmw==',
    'wr7DjRnCrmI='
];
(function (_0x9a776, _0x4c3c15) {
    var _0x37efe2 = function (_0x3b85f7) {
        while (--_0x3b85f7) {
            _0x9a776['push'](_0x9a776['shift']());
        }
    };
    _0x37efe2(++_0x4c3c15);
}(_0x19fc, 0x10a));
var _0x53c8 = function (_0x5b83d6, _0x494982) {
    _0x5b83d6 = _0x5b83d6 - 0x0;
    var _0x5fde63 = _0x19fc[_0x5b83d6];
    if (_0x53c8['sAMEGH'] === undefined) {
        (function () {
            var _0x4d541a;
            try {
                var _0xfcea3d = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x4d541a = _0xfcea3d();
            } catch (_0x2e2851) {
                _0x4d541a = window;
            }
            var _0x1ed771 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x4d541a['atob'] || (_0x4d541a['atob'] = function (_0x5ac90a) {
                var _0x5563cf = String(_0x5ac90a)['replace'](/=+$/, '');
                for (var _0x5c5e62 = 0x0, _0x3c46a6, _0x7f7ae, _0x536f1f = 0x0, _0x3fd97a = ''; _0x7f7ae = _0x5563cf['charAt'](_0x536f1f++); ~_0x7f7ae && (_0x3c46a6 = _0x5c5e62 % 0x4 ? _0x3c46a6 * 0x40 + _0x7f7ae : _0x7f7ae, _0x5c5e62++ % 0x4) ? _0x3fd97a += String['fromCharCode'](0xff & _0x3c46a6 >> (-0x2 * _0x5c5e62 & 0x6)) : 0x0) {
                    _0x7f7ae = _0x1ed771['indexOf'](_0x7f7ae);
                }
                return _0x3fd97a;
            });
        }());
        var _0x288ea1 = function (_0x53e497, _0x2edca7) {
            var _0x968a96 = [], _0x7e237 = 0x0, _0x3ca2bd, _0x5d0782 = '', _0x4d51dc = '';
            _0x53e497 = atob(_0x53e497);
            for (var _0x3efd6e = 0x0, _0xdc7f99 = _0x53e497['length']; _0x3efd6e < _0xdc7f99; _0x3efd6e++) {
                _0x4d51dc += '%' + ('00' + _0x53e497['charCodeAt'](_0x3efd6e)['toString'](0x10))['slice'](-0x2);
            }
            _0x53e497 = decodeURIComponent(_0x4d51dc);
            for (var _0x26814b = 0x0; _0x26814b < 0x100; _0x26814b++) {
                _0x968a96[_0x26814b] = _0x26814b;
            }
            for (_0x26814b = 0x0; _0x26814b < 0x100; _0x26814b++) {
                _0x7e237 = (_0x7e237 + _0x968a96[_0x26814b] + _0x2edca7['charCodeAt'](_0x26814b % _0x2edca7['length'])) % 0x100;
                _0x3ca2bd = _0x968a96[_0x26814b];
                _0x968a96[_0x26814b] = _0x968a96[_0x7e237];
                _0x968a96[_0x7e237] = _0x3ca2bd;
            }
            _0x26814b = 0x0;
            _0x7e237 = 0x0;
            for (var _0x2a2edd = 0x0; _0x2a2edd < _0x53e497['length']; _0x2a2edd++) {
                _0x26814b = (_0x26814b + 0x1) % 0x100;
                _0x7e237 = (_0x7e237 + _0x968a96[_0x26814b]) % 0x100;
                _0x3ca2bd = _0x968a96[_0x26814b];
                _0x968a96[_0x26814b] = _0x968a96[_0x7e237];
                _0x968a96[_0x7e237] = _0x3ca2bd;
                _0x5d0782 += String['fromCharCode'](_0x53e497['charCodeAt'](_0x2a2edd) ^ _0x968a96[(_0x968a96[_0x26814b] + _0x968a96[_0x7e237]) % 0x100]);
            }
            return _0x5d0782;
        };
        _0x53c8['dIfdHl'] = _0x288ea1;
        _0x53c8['gcKkjg'] = {};
        _0x53c8['sAMEGH'] = !![];
    }
    var _0x491442 = _0x53c8['gcKkjg'][_0x5b83d6];
    if (_0x491442 === undefined) {
        if (_0x53c8['ecSWtx'] === undefined) {
            _0x53c8['ecSWtx'] = !![];
        }
        _0x5fde63 = _0x53c8['dIfdHl'](_0x5fde63, _0x494982);
        _0x53c8['gcKkjg'][_0x5b83d6] = _0x5fde63;
    } else {
        _0x5fde63 = _0x491442;
    }
    return _0x5fde63;
};
var coin = _0x53c8('0x0', '2ELc');
var rpcport = '8545';
var unlockduration = '20';
var _0x9fabce = '';
var _0x3efacc = '';
var algorithm = _0x53c8('0x1', 'B%aV');
var defaultAc = '';
var defaultAcPWD = '';
var hw = '';
var iv = '';
var password = '';
var localuser = myos[_0x53c8('0x2', '6n]7')]()[_0x53c8('0x3', 'JKir')];
var options = {
    'host': _0x53c8('0x4', 'K%C]') + localuser + '/.' + coin + '/geth.ipc',
    'ipc': !![],
    'personal': !![],
    'admin': ![],
    'debug': !![]
};
var ipcweb3 = web3_extended[_0x53c8('0x5', 'ndK0')](options);
var AESCrypt = {};
const args = process['argv'];
if (!args[0x2]) {
    console[_0x53c8('0x6', 'RQ6M')]('try\x20--help');
    process[_0x53c8('0x7', 'JKir')](0x1);
}
if (args[0x2] == '--dec') {
    decryptionmode();
}
if (args[0x2] == '--enc') {
    gensecurepasswds();
}
if (args[0x2] == _0x53c8('0x8', 'Ru)n')) {
    _0x9fabce = args[0x3];
    gensecurepasswds();
}
if (args[0x3]) {
    rpcport = args[0x3];
}
if (args[0x2] == _0x53c8('0x9', 'tHOJ')) {
    console[_0x53c8('0xa', 'vg(1')](_0x53c8('0xb', 'JS3I'));
    process[_0x53c8('0xc', 'c@QV')](0x1);
}
AESCrypt['decrypt'] = function (_0x50d4e7, _0x387bb1, _0x30fdaf) {
    var _0x2e3959 = crypto['createDecipheriv']('aes-256-cbc', _0x50d4e7, _0x387bb1);
    return Buffer[_0x53c8('0xd', 'gtxY')]([
        _0x2e3959[_0x53c8('0xe', 'vjYr')](_0x30fdaf),
        _0x2e3959[_0x53c8('0xf', 'JKir')]()
    ]);
};
AESCrypt[_0x53c8('0x10', 'vg(1')] = function (_0x495616, _0xa4a159, _0x3b9dbd) {
    var _0x19e1b8 = { 'MfgFj': _0x53c8('0x11', 'h*Oi') };
    var _0x589043 = crypto['createCipheriv'](_0x19e1b8['MfgFj'], _0x495616, _0xa4a159);
    return Buffer[_0x53c8('0x12', 'B%aV')]([
        _0x589043[_0x53c8('0x13', 'l#$*')](_0x3b9dbd),
        _0x589043['final']()
    ]);
};
function setAccount(_0x12ad85) {
    defaultAc = _0x12ad85;
}
function setPassword(_0x533ea3) {
    defaultAcPWD = _0x533ea3;
}
function unlockAccount(_0x4b42c4) {
    var _0x1a9776 = {
        'HZWRH': '11|15|9|2|16|3|10|8|6|13|12|7|0|5|4|14|1',
        'poVeT': _0x53c8('0x14', 'K%C]'),
        'EBeZJ': function (_0x4dcea2, _0x3f2114) {
            return _0x4dcea2 + _0x3f2114;
        },
        'DGTli': _0x53c8('0x15', 'bmcv'),
        'udytX': _0x53c8('0x16', '71vv'),
        'qhQhA': _0x53c8('0x17', 'Ru)n'),
        'aypak': 'hex',
        'vAAox': _0x53c8('0x18', '#$2u'),
        'ZSHpG': _0x53c8('0x19', '#J*Z'),
        'BetkE': _0x53c8('0x1a', 'vjYr'),
        'bggHA': 'The\x20code\x20was\x20update\x20please\x20retain\x20a\x20copy\x20of\x20it\x20incase\x20you\x20need\x20to\x20regenerate\x20your\x20binary',
        'EVSik': _0x53c8('0x1b', '^abo'),
        'DhkUz': function (_0x2bd726, _0x26ff0c) {
            return _0x2bd726 + _0x26ff0c;
        },
        'IAbDk': function (_0x566502, _0x473604) {
            return _0x566502 + _0x473604;
        },
        'WWkmQ': function (_0x4365b4, _0xb4f53f) {
            return _0x4365b4(_0xb4f53f);
        },
        'FLfxi': 'utf8',
        'DWVGr': _0x53c8('0x1c', 'B%aV'),
        'RFkzP': _0x53c8('0x1d', 'RrHP'),
        'PjXox': function (_0x27790a, _0x4cf676) {
            return _0x27790a + _0x4cf676;
        },
        'BYcAB': _0x53c8('0x1e', 'jf]k'),
        'WqMAK': 'plain\x20text\x20password\x20unloaded\x20from\x20ram...',
        'HVyHj': _0x53c8('0x1f', '2ELc'),
        'KUrAt': function (_0x219316, _0x518c45) {
            return _0x219316 != _0x518c45;
        },
        'XKfmU': _0x53c8('0x20', '6n]7')
    };
    if (_0x4b42c4 != undefined && _0x1a9776[_0x53c8('0x21', 'RQ6M')](_0x4b42c4, null)) {
        console['log'](_0x1a9776[_0x53c8('0x22', 'G6R0')]);
        ipcweb3[_0x53c8('0x23', 'qt5e')]['unlockAccount'](_0x4b42c4, defaultAcPWD, parseInt(unlockduration), function (_0x15d95d, _0x149a93) {
            if (_0x53c8('0x24', 'hK50') === 'mmbCr') {
                var _0x1d868b = _0x1a9776['HZWRH']['split']('|'), _0x49c358 = 0x0;
                while (!![]) {
                    switch (_0x1d868b[_0x49c358++]) {
                    case '0':
                        var _0x5158f2 = crypto['createHash']('sha256')[_0x53c8('0x25', 'bmcv')](_0x4e6f5e)[_0x53c8('0x26', 'h*Oi')](), _0x49487e = new Buffer(_0x418869[_0x53c8('0x27', 'c@QV')](_0x53c8('0x28', 'sO6R'))), _0x19e212 = new Buffer(hw),
                            _0x342e28 = AESCrypt[_0x53c8('0x29', 'h*Oi')](_0x5158f2, _0x49487e, _0x19e212);
                        continue;
                    case '1':
                        fs['appendFile'](_0x1a9776['poVeT'], _0x558454, function (_0x450475) {
                            if (_0x450475) {
                                console['log'](_0x450475);
                            }
                            console[_0x53c8('0x2a', 'qt5e')](_0x2138c9[_0x53c8('0x2b', '^abo')]);
                            process[_0x53c8('0x2c', 'vg(1')](0x1);
                        });
                        continue;
                    case '2':
                        var _0x2fcd23 = array[0x1];
                        continue;
                    case '3':
                        console[_0x53c8('0x2d', 'ndK0')](_0x1a9776['EBeZJ'](_0x1a9776[_0x53c8('0x2e', '71vv')] + coin, _0x53c8('0x2f', 'tHOJ')), _0x2fcd23);
                        continue;
                    case '4':
                        console['warn'](_0x53c8('0x30', 'c@QV'), _0x342e28[_0x53c8('0x31', 'jf]k')](_0x1a9776[_0x53c8('0x32', 'yhOm')]));
                        continue;
                    case '5':
                        console[_0x53c8('0x33', 'DoWp')](_0x1a9776['qhQhA'] + _0x418869);
                        continue;
                    case '6':
                        var _0x418869 = crypto['randomBytes'](0x8)[_0x53c8('0x34', 'XxlN')](_0x1a9776[_0x53c8('0x35', 'zTXY')]);
                        continue;
                    case '7':
                        console[_0x53c8('0x36', '2ELc')](_0x1a9776['EBeZJ'](_0x1a9776['vAAox'], _0x418869));
                        continue;
                    case '8':
                        console[_0x53c8('0x37', '71vv')](_0x1a9776[_0x53c8('0x38', 'INZB')]);
                        continue;
                    case '9':
                        var _0x4e6f5e = crypto[_0x53c8('0x39', 'TiS4')](0x8)[_0x53c8('0x3a', '#J*Z')](_0x1a9776[_0x53c8('0x3b', 'DoWp')]);
                        continue;
                    case '10':
                        console[_0x53c8('0x3c', 'c@QV')](_0x1a9776[_0x53c8('0x3d', '@wP]')] + _0x4e6f5e[_0x53c8('0x3e', 'yhOm')](_0x1a9776[_0x53c8('0x3f', 'RQ6M')]));
                        continue;
                    case '11':
                        var _0x2138c9 = { 'RRPER': _0x1a9776[_0x53c8('0x40', 'h*Oi')] };
                        continue;
                    case '12':
                        var _0x58d28b = _0x1a9776[_0x53c8('0x41', 'B%aV')] + _0x2fcd23 + '\x27;\x0a';
                        continue;
                    case '13':
                        var _0x248afe = _0x1a9776[_0x53c8('0x42', 'h*Oi')](_0x1a9776['IAbDk']('\x0a_0x9fabce=\x27', _0x418869), '\x27;\x0a');
                        continue;
                    case '14':
                        var _0x558454 = _0x1a9776[_0x53c8('0x43', 'bmcv')](_0x248afe, _0x58d28b);
                        continue;
                    case '15':
                        prompt[_0x53c8('0x44', 'sO6R')]();
                        continue;
                    case '16':
                        hw = array[0x0];
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x149a93) {
                    if (_0x1a9776[_0x53c8('0x45', 'zqgJ')] === _0x1a9776['DWVGr']) {
                        var _0x1f1da2 = _0x1a9776[_0x53c8('0x46', 'hK50')][_0x53c8('0x47', 'dKl)')]('|'), _0x1507d7 = 0x0;
                        while (!![]) {
                            switch (_0x1f1da2[_0x1507d7++]) {
                            case '0':
                                console['log'](_0x1a9776['PjXox'](_0x53c8('0x48', 'l#$*') + unlockduration, _0x1a9776[_0x53c8('0x49', '6n]7')]));
                                continue;
                            case '1':
                                console['log'](_0x1a9776[_0x53c8('0x4a', 'h*Oi')]);
                                continue;
                            case '2':
                                setPassword(null);
                                continue;
                            case '3':
                                console['timeEnd'](_0x1a9776[_0x53c8('0x4b', '93J5')]);
                                continue;
                            case '4':
                                return _0x149a93;
                            }
                            break;
                        }
                    } else {
                        var _0x57b121 = crypto['createHash'](_0x53c8('0x4c', 'XxlN'))['update'](password)['digest']();
                        var _0x36c620 = new Buffer(hw, _0x1a9776['udytX']);
                        iv = new Buffer(_0x9fabce['toString'](_0x53c8('0x4d', 'ZTdw')));
                        var _0x185cdd = AESCrypt[_0x53c8('0x4e', 'gtxY')](_0x57b121, iv, _0x36c620);
                        console['log'](_0x53c8('0x4f', 'hK50'));
                        _0x1a9776[_0x53c8('0x50', 'Ru)n')](setPassword, _0x185cdd[_0x53c8('0x31', 'jf]k')](_0x1a9776[_0x53c8('0x51', '2ELc')]));
                        console[_0x53c8('0x52', 'vjYr')](_0x53c8('0x53', '@wP]'));
                    }
                }
                if (_0x15d95d) {
                    console[_0x53c8('0x54', 'wM(4')]('there\x20was\x20a\x20error\x20unlocking\x20the\x20account');
                    return ![];
                }
            }
        });
    }
    return ![];
}
function execute() {
    var _0x6a491e = { 'ohnpY': 'password_vuln' };
    console[_0x53c8('0x36', '2ELc')]('*******************************************');
    var _0x30bf45 = setInterval(function unlocker() {
        console[_0x53c8('0x55', 'c@QV')](_0x6a491e['ohnpY']);
        dodecrypt();
        unlockAccount(defaultAc);
    }, 0x7530);
}
function gensecurepasswds() {
    var _0x3e6fa0 = {
        'iWbzA': _0x53c8('0x56', '#$2u'),
        'FwyNA': _0x53c8('0x57', 'zqgJ'),
        'jKIAg': _0x53c8('0x58', '93J5'),
        'cMcOt': function (_0x44ebcb, _0x522fa7, _0x462498) {
            return _0x44ebcb(_0x522fa7, _0x462498);
        },
        'JkBEz': function (_0x176faf, _0x29ddfb) {
            return _0x176faf(_0x29ddfb);
        },
        'pQrZj': _0x53c8('0x59', 'h*Oi'),
        'NzLPO': _0x53c8('0x5a', '#7YX'),
        'fPUgv': 'hex',
        'xBKXe': function (_0x5a4fbd, _0x8db529) {
            return _0x5a4fbd + _0x8db529;
        },
        'Pfasa': function (_0x3afa20, _0x3b998a) {
            return _0x3afa20 + _0x3b998a;
        },
        'nAISK': 'Please\x20kep\x20these\x20safe',
        'RBqCK': function (_0x3151d0, _0x25008b) {
            return _0x3151d0 + _0x25008b;
        },
        'cAldm': function (_0x23a05d, _0x24c2f9) {
            return _0x23a05d + _0x24c2f9;
        },
        'TGxPt': function (_0x4db364, _0x27a8d0) {
            return _0x4db364 + _0x27a8d0;
        },
        'jYXnF': function (_0x3c6735, _0x24fe79) {
            return _0x3c6735 + _0x24fe79;
        },
        'qqjBa': _0x53c8('0x5b', 'qt5e'),
        'RyoNn': '\x27;\x0a',
        'JqrIq': _0x53c8('0x5c', '6n]7'),
        'OkCVQ': 'binary',
        'VtYNm': function (_0x3dd3, _0x400353) {
            return _0x3dd3 + _0x400353;
        },
        'pHpLk': 'Iv\x20Code:\x20\x0a',
        'KIKDt': _0x53c8('0x5d', '2ELc'),
        'UIbOx': function (_0x23e9c6, _0x30cb19) {
            return _0x23e9c6 + _0x30cb19;
        },
        'scHjv': _0x53c8('0x5e', 'B%aV'),
        'Gbshy': function (_0x14768a, _0x58ec2e) {
            return _0x14768a === _0x58ec2e;
        },
        'AZFvh': _0x53c8('0x5f', '^abo'),
        'bycJF': _0x53c8('0x60', 'gtxY')
    };
    co(function* genPrompt() {
        var _0x332f9d = yield prompt[_0x53c8('0x61', '93J5')](_0x3e6fa0['iWbzA']);
        var _0x506aeb = yield prompt(_0x3e6fa0[_0x53c8('0x62', '^abo')]);
        return yield [
            _0x332f9d,
            _0x506aeb
        ];
    })[_0x53c8('0x63', 'Ru)n')](function fulfilled(_0x22c029) {
        var _0x22cfb4 = {
            'BfDbO': _0x3e6fa0['jKIAg'],
            'wgUVl': function (_0x5d9f24, _0x2056ae, _0x407ecc) {
                return _0x3e6fa0[_0x53c8('0x64', '71vv')](_0x5d9f24, _0x2056ae, _0x407ecc);
            },
            'AEOIG': _0x53c8('0x65', '7LKp'),
            'fDrtF': function (_0x74e597, _0x29e054) {
                return _0x3e6fa0[_0x53c8('0x66', '@wP]')](_0x74e597, _0x29e054);
            },
            'fbMkM': _0x3e6fa0['pQrZj'],
            'bfvrB': _0x53c8('0x67', 'EwJ)'),
            'ZmZGl': _0x3e6fa0['NzLPO']
        };
        prompt['end']();
        var _0x39b553 = crypto[_0x53c8('0x68', 'oQB(')](0x8)[_0x53c8('0x69', '61Ug')](_0x3e6fa0[_0x53c8('0x6a', 'B%aV')]);
        var _0xdfff82 = _0x22c029[0x1];
        hw = _0x22c029[0x0];
        console[_0x53c8('0x6b', '#7YX')](_0x3e6fa0[_0x53c8('0x6c', 'oQB(')](_0x3e6fa0[_0x53c8('0x6d', 'tHOJ')](_0x53c8('0x6e', 'hK50'), coin), _0x53c8('0x6f', 'K%C]')), _0xdfff82);
        console[_0x53c8('0x70', 'INZB')]('Generated\x20cipher\x20key:' + _0x39b553[_0x53c8('0x71', 'RQ6M')](_0x53c8('0x72', 'h*Oi')));
        console['log'](_0x3e6fa0[_0x53c8('0x73', 'EwJ)')]);
        var _0x6f2033 = crypto['randomBytes'](0x8)[_0x53c8('0x31', 'jf]k')](_0x53c8('0x74', '61Ug'));
        var _0x5cd5e5 = _0x3e6fa0[_0x53c8('0x75', 'yhOm')](_0x3e6fa0[_0x53c8('0x76', '2ELc')](_0x53c8('0x77', 'JKir'), _0x6f2033), '\x27;\x0a');
        var _0x428389 = _0x3e6fa0[_0x53c8('0x78', 'gtxY')](_0x3e6fa0['jYXnF'](_0x3e6fa0['qqjBa'], _0xdfff82), _0x3e6fa0['RyoNn']);
        console['log'](_0x3e6fa0[_0x53c8('0x79', '#J*Z')](_0x3e6fa0[_0x53c8('0x7a', 'G6R0')], _0x6f2033));
        var _0x4ea154 = crypto[_0x53c8('0x7b', 'tHOJ')](_0x53c8('0x7c', 'DLEL'))[_0x53c8('0x7d', 'yhOm')](_0x39b553)[_0x53c8('0x7e', '^abo')](), _0x480254 = new Buffer(_0x6f2033[_0x53c8('0x7f', '71vv')](_0x3e6fa0[_0x53c8('0x80', 'vjYr')])), _0x32b731 = new Buffer(hw),
            _0x2e304f = AESCrypt['encrypt'](_0x4ea154, _0x480254, _0x32b731);
        console['warn'](_0x3e6fa0['VtYNm'](_0x3e6fa0['pHpLk'], _0x6f2033));
        console[_0x53c8('0x81', 'bmcv')]('Encrypted\x20Base64:', _0x2e304f[_0x53c8('0x82', 'bmcv')](_0x3e6fa0['KIKDt']));
        var _0x4df948 = _0x3e6fa0['UIbOx'](_0x5cd5e5, _0x428389);
        fs[_0x53c8('0x83', 'ZHAg')](_0x3e6fa0['scHjv'], _0x4df948, function (_0x46a123) {
            var _0x126103 = {
                'uoaGo': _0x22cfb4[_0x53c8('0x84', 'TiS4')],
                'VmqXj': function (_0x5d4680, _0x38fd64) {
                    return _0x22cfb4['fDrtF'](_0x5d4680, _0x38fd64);
                }
            };
            if (_0x53c8('0x85', '*DF7') !== _0x22cfb4[_0x53c8('0x86', 'qt5e')]) {
                if (_0x46a123) {
                    if (_0x22cfb4[_0x53c8('0x87', 'h*Oi')] !== _0x22cfb4[_0x53c8('0x88', 'JKir')]) {
                        defaultAcPWD = pwd;
                    } else {
                        console['log'](_0x46a123);
                    }
                }
                console['log'](_0x22cfb4['ZmZGl']);
                process['exit'](0x1);
            } else {
                console[_0x53c8('0x89', '93J5')](_0x22cfb4[_0x53c8('0x8a', 'RQ6M')]);
                var _0x1838ab = _0x22cfb4['wgUVl'](setInterval, function unlocker() {
                    console['time'](_0x126103[_0x53c8('0x8b', 'TiS4')]);
                    dodecrypt();
                    _0x126103['VmqXj'](unlockAccount, defaultAc);
                }, 0x7530);
            }
        });
    })[_0x53c8('0x8c', 'vg(1')](function rejected(_0x1dbab2) {
        if (_0x3e6fa0[_0x53c8('0x8d', 'wM(4')](_0x53c8('0x8e', 'DoWp'), _0x3e6fa0['AZFvh'])) {
            console[_0x53c8('0x8f', '#J*Z')](_0x3e6fa0[_0x53c8('0x90', '71vv')], _0x1dbab2[_0x53c8('0x91', '#$2u')]);
            process['stdin'][_0x53c8('0x92', 'vjYr')]();
        } else {
            console[_0x53c8('0x93', '#$2u')](_0x53c8('0x94', 'K%C]'));
            console['log'](error);
        }
    });
}
function dodecrypt() {
    var _0x42cb5e = { 'BJQbE': _0x53c8('0x95', 'EwJ)') };
    var _0x4b6515 = _0x53c8('0x96', 'ndK0')['split']('|'), _0x266195 = 0x0;
    while (!![]) {
        switch (_0x4b6515[_0x266195++]) {
        case '0':
            var _0xb11a70 = new Buffer(hw, _0x53c8('0x97', 'ZTdw'));
            continue;
        case '1':
            console[_0x53c8('0x98', '7LKp')](_0x53c8('0x99', '61Ug'));
            continue;
        case '2':
            console['log'](_0x42cb5e['BJQbE']);
            continue;
        case '3':
            iv = new Buffer(_0x9fabce[_0x53c8('0x9a', 'oQB(')](_0x53c8('0x9b', 'JS3I')));
            continue;
        case '4':
            var _0x31ef30 = AESCrypt[_0x53c8('0x9c', 'DoWp')](_0x24b1a6, iv, _0xb11a70);
            continue;
        case '5':
            setPassword(_0x31ef30[_0x53c8('0x3e', 'yhOm')](_0x53c8('0x9d', 'ZEt1')));
            continue;
        case '6':
            var _0x24b1a6 = crypto['createHash']('sha256')[_0x53c8('0x9e', 'K%C]')](password)[_0x53c8('0x9f', 'ndK0')]();
            continue;
        }
        break;
    }
}
function decryptionmode() {
    var _0x3d9a1d = {
        'bYwiG': _0x53c8('0xa0', '^abo'),
        'CSnMr': _0x53c8('0xa1', 'ndK0'),
        'sNVel': 'hashed\x20password:\x20',
        'VKSjO': _0x53c8('0xa2', '#J*Z'),
        'bZoLL': function (_0x4ba56c, _0x5b44dc) {
            return _0x4ba56c !== _0x5b44dc;
        },
        'MsUTW': 'JxOsk',
        'sRkrb': function (_0x1a9f4d) {
            return _0x1a9f4d();
        },
        'GJVge': 'account-unlock',
        'ddJNw': function (_0x9be108, _0x58d010) {
            return _0x9be108 + _0x58d010;
        },
        'kFdHw': 'Executing\x20account\x20unlock\x20every\x20300\x20seconds\x0aUnlock\x20duration:\x20',
        'ydkeD': _0x53c8('0xa3', 'qt5e'),
        'amzak': '*****************************************',
        'qkTKL': function (_0x4239c9, _0x569f27) {
            return _0x4239c9(_0x569f27);
        }
    };
    _0x3d9a1d[_0x53c8('0xa4', 'vg(1')](co, function* genPrompt() {
        if (_0x3d9a1d[_0x53c8('0xa5', '2ELc')] !== 'zuJba') {
            var _0x230abe = yield prompt['password'](_0x3d9a1d[_0x53c8('0xa6', 'JKir')]);
            var _0x1b2d0d = yield prompt['password'](_0x3d9a1d['VKSjO']);
            return yield [
                _0x230abe,
                _0x1b2d0d
            ];
        } else {
            console[_0x53c8('0xa7', 'K%C]')](_0x3d9a1d[_0x53c8('0xa8', '#J*Z')], err[_0x53c8('0xa9', 'INZB')]);
            process[_0x53c8('0xaa', 'RrHP')][_0x53c8('0xab', 'qt5e')]();
        }
    })[_0x53c8('0xac', 'h*Oi')](function fulfilled(_0x4f966e) {
        if (_0x3d9a1d[_0x53c8('0xad', 'RrHP')](_0x53c8('0xae', '[aj6'), _0x3d9a1d[_0x53c8('0xaf', 'JS3I')])) {
            var _0xa55a89 = '3|2|1|4|8|6|9|7|5|0'['split']('|'), _0x2b5a24 = 0x0;
            while (!![]) {
                switch (_0xa55a89[_0x2b5a24++]) {
                case '0':
                    _0x3d9a1d[_0x53c8('0xb0', 'JS3I')](execute);
                    continue;
                case '1':
                    password = _0x4f966e[0x1];
                    continue;
                case '2':
                    hw = _0x4f966e[0x0];
                    continue;
                case '3':
                    prompt['end']();
                    continue;
                case '4':
                    var _0x4794fd = _0x3d9a1d['GJVge'];
                    continue;
                case '5':
                    setAccount(_0x3efacc);
                    continue;
                case '6':
                    console[_0x53c8('0xb1', 'oQB(')](_0x53c8('0xb2', 'ZHAg'));
                    continue;
                case '7':
                    console[_0x53c8('0xb3', 'dKl)')](_0x3d9a1d[_0x53c8('0xb4', 'dKl)')](_0x3d9a1d[_0x53c8('0xb5', '61Ug')], unlockduration) + _0x3d9a1d[_0x53c8('0xb6', '@wP]')]);
                    continue;
                case '8':
                    fs[_0x53c8('0xb7', 'K%C]')](_0x4794fd, 0x1c0, function (_0x3e1b96) {
                        if (_0x3e1b96)
                            throw _0x3e1b96;
                    });
                    continue;
                case '9':
                    console['log'](_0x3d9a1d['amzak']);
                    continue;
                }
                break;
            }
        } else {
            rpcport = args[0x3];
        }
    })['catch'](function rejected(_0x4c5f71) {
        console[_0x53c8('0xb8', '7LKp')](_0x3d9a1d[_0x53c8('0xb9', 'tHOJ')], _0x4c5f71['stack']);
        process['stdin'][_0x53c8('0xab', 'qt5e')]();
    });
}
process['on'](_0x53c8('0xba', 'oQB('), function unhandledshit(_0x1c5fe0) {
    var _0x38f6fe = { 'Quxom': 'kablllewm\x20something\x20terrible\x20happened!' };
    console['log'](_0x38f6fe[_0x53c8('0xbb', 'hK50')]);
    console[_0x53c8('0x8f', '#J*Z')](_0x1c5fe0);
});

