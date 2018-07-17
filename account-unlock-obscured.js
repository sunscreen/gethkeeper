/**
Gethkeeper by ncoreudmp
*/

var co = require('co');
var prompt = require('prompt-promise');
var crypto = require('crypto');
var fs = require('fs');
var web3_extended = require('web3_ipc');
var myos = require("os");
var pad = require("pad");
var path = require("path");
//var JavaScriptObfuscator = require('javascript-obfuscator');

var _0x222b = [
    'G0nDryPChXHDsTDDsi4=',
    'H8K2wp8Xw4UqwpYMwobDug==',
    'w7HDoMOSRBvDo8KsAcOgwp57',
    'wonCk27CscKEw5kAAw==',
    'BADDmwHCucObw5xY',
    'w4/CvsOL',
    'wqdWYQ==',
    'bWPDnQ==',
    'cyDCsDNkEBhlwo9o',
    'Kg7Cuw==',
    'P8OFw6vDscKO',
    'w7w2wqTDjz4/eznDqA==',
    'c8KMbMOwwqrCqQ==',
    'wpjChWjCscK0w4cS',
    'EsKsVcK9',
    'N0BSfg==',
    'E8OafMOADWk=',
    'TVjDpSfCiA==',
    'w4oawolMRsOzG8Kow5PCg0Z8w6LDlg==',
    'wqPCuSbDuQ==',
    'GsO9QsOFSG0=',
    'wqfDvMKOw6Y=',
    'R8OrDsOcw5s=',
    'Q8O2wqg=',
    'wqDDvcKZ',
    'SsKwD8K4e8O4',
    'w5vDkxzClw==',
    'cCRFIg==',
    'NyrDsA==',
    'N0AC',
    'UcO/VjA=',
    'WMOubA==',
    'VcOtM8OJw4UEQGo=',
    'cMKJw73DusObZQ==',
    'FVla',
    'w6oZbGE/w4TDhcKt',
    'w6TDqsOyHVvCv8O0Sw==',
    'KWnDkXY=',
    'TlDCvBI=',
    'AcKPwro+',
    'EkfDqg==',
    'RhLDjQfCuMOUw5VOVQ==',
    'w64XTGY6w4LDmcKuGHrCs8OPTg==',
    'Kg7Dqg==',
    'DcO6ScOUTDnDucKDScK6wrnCjEjDljnDukDCsB49wozDgMOEfQgDw4fCrXHDt8KHw5LDtgUPPHTDpi0=',
    'w78+Ow==',
    'wrFMw5s=',
    'wrfDi8OSIg==',
    'VifCrXku',
    'Fl7Cpg==',
    'w6MwL8Orw4HDmMKkwro1wp7DhSgX',
    'w5MLGcOMacKLKMOow51cwrjDtMOHw7Nfw5XCmWPCuWjCq2LDlsK3w5N0C8OQU8O/UcONH8KFw60IGH7Dog==',
    'w5MML8OKfsOCMcOu',
    'WMOuaA==',
    'QSQoRVTCuQ==',
    'wqLDljzCozLCmA==',
    'w7LDh8KFfg==',
    'UcO/VjM=',
    'IsKQw6s=',
    'CcOzfStAw6g=',
    'chPDsQ==',
    'DVIIwpM=',
    'BjzDnW1yw51rwq8=',
    'RiXCny8=',
    'KXPDnXU=',
    'MxTDmW5N',
    'VsOSKcOF',
    'EcO6UsKN',
    'wpcbHQ==',
    'dhnDrg==',
    'UcO/VTQ=',
    'AcOjA8Oew5gYQHnCq8ODMmfDuw==',
    'GcOEasOwwrTCuMOqwqvDpsKIwr3Do8Obejhqwr/CncKKAcOd',
    'w6vDnMKE',
    'ShrDrMK9wrIsw7vDsD1CeHbCuWg4wo0Mw6LCrWnDmw==',
    'Kg7DrA==',
    'N0BSew==',
    'wojCmn8=',
    'Z8KSVMOTw4V0Iwo2FsKs',
    'w4UHwos=',
    'w44VRsKe',
    'wqdWN8Oy',
    'VMOyBMOcw4MI',
    'TlDCvBw=',
    'FcOoNHHCkF0vwqI=',
    'ZTvCp3I7RA==',
    'Fl7Dtw==',
    'UknCkcKMJEbDphA=',
    'wp/DmUTDgg==',
    'JFsCw6XCm8OmERXDlMOX',
    'V8K9Q8OEWnvDvMKHW8O+wrvDnljDiSnCu1jDow==',
    'w7IZWA==',
    'woVzwrPCijo1cTXCvsO8JcKjwqPChwrCp1BNJFDCtHTCnsONEnpHLiluccK7wpLDoUAAcsOEaG7CmMKYw4M5BH8hwr/CujhjEcKZRzgEXiApwpjDq8ODAwjCmcKnw4B0MkdITcONw6F1bU4Hw5gOw4LClzDDvMKKZg5Jwos=',
    'wpkQw50U',
    'BMKDwozCj8Kh',
    'w4zCmDrCog==',
    'CsOmTcOFQg==',
    'wqMpbsKt',
    'w7LDg8KHJzjCuA==',
    'HEnDvk8Ywpg=',
    'SU5f',
    'VsK7N8O5NcK7IA4=',
    'FMOzAT0=',
    'EQDDmgo=',
    'T1TDqDTCnWXDp3XDpzrCoDdzwpLCscOawo/DjhXCgmM2wobCpkXDtA4Tw7fDosOrNcKEw4AVwovDmMOkF8O6CcOaWsKuwqLCsQxK',
    'TUtKwoXDowRww58=',
    'w5cCD8ONe8OELcOt',
    'JkICw6jCkMOwdxfDncOLDUM=',
    'SsO3wqs=',
    'HUDDoEVK',
    'TMK8wp4Tw5ApwroIwpTDtg==',
    'wosvM8OoK8Kk',
    'G0nCuiQ=',
    'HcO3T8OUUGnDusKLVMO9w7jDnEzDlzjDol3Dog9zwpTDgMKHYw8Bw4/Drm7Cv8KDwpHDtAkZPXXCpncL',
    'DsOzXsOI',
    'UcO/VTw=',
    'wrvDiT8=',
    'dVNAw6E=',
    'wrfDt8OawrZa',
    'w6fDnmnDuw==',
    'JcOmYcOMwqxi',
    'w61bwo55',
    'FcK5FcKmew==',
    'URQ5wrnCj8KRVyjDvDZnEzzCgsKeYMK4',
    'wqMpbcO8',
    'cMOscA==',
    'aSjCiisfwqEbwrzClHhKKMKSLXd6a8KfXgwJdsOnwr/DqsKvw6FYaSI4wpzCuMKEM0weMMKiwqtyCsOmcTsIw5YewqMSJiB3wrUHwqcqI8OlZU/CsVfCog==',
    'w4c9ZsK/b8OzMH49w67Dg8O3R8KxwrDDlcKsw4UxJ8KsI8K3YELDjsKxwqnDlsOpwq/DpyszwrI8RsOBw4HDjXodwrlEwoTDnxrCvVjCkG8dwrjDtUjDlsORdCszw6UHw5HCpcOAw6YAwoRQw5g6wplpLsOjwqHCnFs/WyPDrsKUwq/DtMKFwpvDmcOBeGPDkcOWcxHChgbCrcK2wq/CnXEhwq5dKsKhJsO2wotpFnjCgMKtw5nDnQt3DFbCq8OqUcO+wonDgWfDpMO8worCqyzDnFjCpyknwrpyCR3Do0TCrB8fDMOpH0PDuFE1HcKVRD4qw4DCpMOYwpHDoR3Cp8OJXMObw4HDjyzCn8KlQUvCixZgE2XCjU5CXG/Do8KYw5TCmMOqHkJRwobCjcOIwrs7wqp8bR8Ew6o+b8ObFCfCo8KlNh4fFD3CtcKPwpNIw7vCoVXCo8KUwqjCvkkIwpnCocKCLg3DuFgyCSILw6nDnSLCncK9LgB8AVjDtTPDt8Oqw44=',
    'w53DlxxICVc0w5w=',
    'wp0YO8OOCMKXPws=',
    'DMOOQHYawrcwchUiS08=',
    'w4UORcOVVsO6YsK0',
    'eMOvJsOHw606G2XDqcOPVwc=',
    'wpxTwrHDkA==',
    'E8OpY8Kl',
    'w7fCmVXCoMOrw67Ch8O6',
    'NcKgSMOKTV7DqcKXW8OCwprDhg==',
    'w5vDlmNaDFk8w5nDkULCqsOA',
    'PlzDrmIfwqREw73Crx4NJg==',
    'VcKgwr50wprDr0oVP8O5w7zCp8OWw5hNBFpOwr1p',
    'S8OBwp3CvVU2e8KB',
    'woTDpGpz',
    'w5QMTF4rw7zClsO3',
    'w7TCt8OnEEvCscKnEQ==',
    'w7XDpifCtMKswo7Dg3w=',
    'w4zCkx3CksKFwqPDtXM=',
    'w7QcU8OxJHLCnXYDwqTDtsKLY3xydXzDq8KSD8OKwpvCpnjDuMK1wo/CkQvDqsOdwo8=',
    'ZcKiw6NowpnCi3Q/OMODwoPCl8O5woBBBWljw4Vtwq4ZfcOL',
    'ITHDhlVgw6VQwrHCuMKud8O9',
    'GsOaesOcSFjCs8Of',
    'BsOqCMKlRMK5bsOQ',
    'wpnDpxVwHA==',
    'wqVUwpnDojc=',
    'wo4qJMOh',
    'WFnDoiDCkA==',
    'DcOow5XCs8Kfw6gmw6ZNw7k=',
    'wpLCuMOREsKE',
    'dEphw6lYwoM=',
    'IMK7wpvClMKK',
    'YcKdw65twrw=',
    'EsOFS8OVC2UuDQ==',
    'Vk1Rw510',
    'wr8dFMONGsKHFA5EwpDCvsOea8OOw4zDoMOOwqBXQcOOQMORXi3CosOow7rDl8K9w7jCtCpqw6w0T8OLw4nDgSVVw7hXw47Dj1/Crk7CinNQwrvDvEjChMKHJCxiwrgIw4rCucOJ',
    'w57DpTVs',
    'H1zDokg=',
    'U21/w4l4',
    'XkJYwoTDlR8=',
    'w7XCs3jCpsOxw57CtMOkwoPDpsKNwog=',
    'LEUWw6XCjcONMQ==',
    'wph0w5liw40=',
    'ZMOVBcOEw5Y=',
    'SkPCrMKfIkc=',
    'w4QLHcOMT8OEO8Osw68I',
    'Eg7DuxDCpcOTw59a',
    'wqPCuXM=',
    'VkfCscKLIUDDuhMEbDbCskg=',
    'LMO6XMO+eGs=',
    'wo/DmAZPP8Kg',
    'IzXDnkZUw4A=',
    'w6zDojRZMg==',
    'flnDux7CtWc=',
    'VcKgVg==',
    'wqDDvcKW',
    'w6jDl8ObEGo=',
    'CsOvacOcwpc=',
    'w4sMGw==',
    'TsO6wqzCv28ZMsKcw4YRwoR4ScKWVsKaTsKRwozCg8K9',
    'YC8RdcKLwqvCr0U1',
    'X8KvwogBw5MjwoANwrjDqFzDn1o=',
    'ScOqHcOE',
    'VTLDnMOswo8Yw6bCpg==',
    'wqdWNQ==',
    'S8KWwrUaw75+wqdfwq7DnR3DhW3Dm8OBcwbCo8OvXWLDtwLDv1pCdMKxTCdmwp8kFhZ0CibDsl3DmsKSYB3ClsKIKFgBCMKWwrfDu1VFe8KTWcKLw4vCj8OLw5DDo0PDrXfDoH3Dp2UuwoI5wrDCh3DDhQXDg3vDgicsDAtvwq/CixzClsKzw64zDMK+woYIw5oybMK+wrzDoG5qw57DsQrCtsO+XsK5P8OSwqbChMOyw5BrcsOAw7Rjw5kzfi7Dm8OjwoUlw5rDiWJywqEZw7k7wofCkCsdwpY9w6bDpcK0H8K7LcKVbMOwwp1TY38+w4VxaE3CmcObwoDDiXnDoj/DjcKuw4pLw5lyw7nDsR0=',
    'wqQIYsOjPMKvPzFpwpvDiMKv',
    'w740KsOEQMO/FsK4w6AVw6jCvsO7w6xgwoc=',
    'DMOOXHc2wps4Jw==',
    'PCbDvg7CnsO9w79LFWHCpX4=',
    'woQQw7Z3w7XCssKQHg==',
    'wqbCjkHCtcKvw6ZbUQ==',
    'ZRXDsH0=',
    'OVzDlG8mw4dAwrU=',
    'w4MkRcOqaMOjFcO5w4wRwrrDqQ==',
    'wr/DtAks',
    'EcO6UQ==',
    'RhJuw5dyw4IUNRjDn8OgLA==',
    'QMKpw4w=',
    'YwolNsKIw5PChcOy',
    'wpFqU31qw7HDqMOa',
    'woTDtAlyFcK8LQLDgH9Pw7I=',
    'I8KnQcOIwr8PRms=',
    'wp3Dkk3CqsKvw7AeHyXCpTLDkUYWwrXDrErCqMOHw6EZw5zCljHCscOLJCYuwp8HwqhcwqrDvg5owpwSZMKxw4dqa8OyICRSwowTAD8=',
    'N0BV',
    'w7h/Ig==',
    'w6Fjw64=',
    'RlcXwpXDuwVxw4/Cn8KcC8KcwovCgcOcOsK6esODdBvDusONISx6wrEwwp/ClzvDkA==',
    'KcOUTV48wpxCUj4/VT7CmsKNQjvCp0BfU1NjK3Euw4M0a27DgsK8w5nCpMKRw7PCo8KTUCk4ScKUGMK9AAQ7wpbDvcKDCMOAdk9JfMK4JUvDo3TDuA1Fwog=',
    'YMKNw77Ds8KMMsOE',
    'FTXDj2xEw4Y=',
    'AMOYd8OMOmQhGDfCjsOEAg==',
    'wqFpcWJIw6rDlw==',
    'wrBBw6xxw6rCkA==',
    'LMOxfcOEwqow',
    'w7RGZMKzLlXCu38hwr0=',
    'w50Hwr9ZQMO/NsKm',
    'HcOsw53CosK5',
    'w61bwoQ=',
    'w44nbg==',
    'JcOzYXYx',
    'b8KxC8OhDw==',
    'dhPDp8K7wrUh',
    'JkMTw7LCtsOtMxnDucOG',
    'NDMnYsKWwqzCpVE=',
    'QsO7wp/CulwN',
    'QcKew41ewqHCkQ==',
    'CMOaTQ==',
    'NyrDuQ==',
    'bsOZZg=='
];
(function (_0x2d8f05, _0x4b81bb) {
    var _0x4d74cb = function (_0x32719f) {
        while (--_0x32719f) {
            _0x2d8f05['push'](_0x2d8f05['shift']());
        }
    };
    _0x4d74cb(++_0x4b81bb);
}(_0x222b, 0x16d));
var _0x309a = function (_0x591112, _0x53a8c6) {
    _0x591112 = _0x591112 - 0x0;
    var _0x251783 = _0x222b[_0x591112];
    if (_0x309a['OtQVnM'] === undefined) {
        (function () {
            var _0x38e2a7;
            try {
                var _0xc2e10b = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x38e2a7 = _0xc2e10b();
            } catch (_0x28713d) {
                _0x38e2a7 = window;
            }
            var _0x44ad9c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x38e2a7['atob'] || (_0x38e2a7['atob'] = function (_0x8767f4) {
                var _0x4926d9 = String(_0x8767f4)['replace'](/=+$/, '');
                for (var _0x3f96d8 = 0x0, _0x739660, _0x3bbfdc, _0x1fdc0e = 0x0, _0x2680c1 = ''; _0x3bbfdc = _0x4926d9['charAt'](_0x1fdc0e++); ~_0x3bbfdc && (_0x739660 = _0x3f96d8 % 0x4 ? _0x739660 * 0x40 + _0x3bbfdc : _0x3bbfdc, _0x3f96d8++ % 0x4) ? _0x2680c1 += String['fromCharCode'](0xff & _0x739660 >> (-0x2 * _0x3f96d8 & 0x6)) : 0x0) {
                    _0x3bbfdc = _0x44ad9c['indexOf'](_0x3bbfdc);
                }
                return _0x2680c1;
            });
        }());
        var _0xe4c25a = function (_0x1c662a, _0x4112b3) {
            var _0x5e137e = [], _0x5a3e82 = 0x0, _0x73a6d4, _0x188a22 = '', _0x32b3ec = '';
            _0x1c662a = atob(_0x1c662a);
            for (var _0x57c3cb = 0x0, _0x62a443 = _0x1c662a['length']; _0x57c3cb < _0x62a443; _0x57c3cb++) {
                _0x32b3ec += '%' + ('00' + _0x1c662a['charCodeAt'](_0x57c3cb)['toString'](0x10))['slice'](-0x2);
            }
            _0x1c662a = decodeURIComponent(_0x32b3ec);
            for (var _0x258e0c = 0x0; _0x258e0c < 0x100; _0x258e0c++) {
                _0x5e137e[_0x258e0c] = _0x258e0c;
            }
            for (_0x258e0c = 0x0; _0x258e0c < 0x100; _0x258e0c++) {
                _0x5a3e82 = (_0x5a3e82 + _0x5e137e[_0x258e0c] + _0x4112b3['charCodeAt'](_0x258e0c % _0x4112b3['length'])) % 0x100;
                _0x73a6d4 = _0x5e137e[_0x258e0c];
                _0x5e137e[_0x258e0c] = _0x5e137e[_0x5a3e82];
                _0x5e137e[_0x5a3e82] = _0x73a6d4;
            }
            _0x258e0c = 0x0;
            _0x5a3e82 = 0x0;
            for (var _0x9b45f = 0x0; _0x9b45f < _0x1c662a['length']; _0x9b45f++) {
                _0x258e0c = (_0x258e0c + 0x1) % 0x100;
                _0x5a3e82 = (_0x5a3e82 + _0x5e137e[_0x258e0c]) % 0x100;
                _0x73a6d4 = _0x5e137e[_0x258e0c];
                _0x5e137e[_0x258e0c] = _0x5e137e[_0x5a3e82];
                _0x5e137e[_0x5a3e82] = _0x73a6d4;
                _0x188a22 += String['fromCharCode'](_0x1c662a['charCodeAt'](_0x9b45f) ^ _0x5e137e[(_0x5e137e[_0x258e0c] + _0x5e137e[_0x5a3e82]) % 0x100]);
            }
            return _0x188a22;
        };
        _0x309a['NaVTGm'] = _0xe4c25a;
        _0x309a['ufEaOt'] = {};
        _0x309a['OtQVnM'] = !![];
    }
    var _0x42d781 = _0x309a['ufEaOt'][_0x591112];
    if (_0x42d781 === undefined) {
        if (_0x309a['HjzgJP'] === undefined) {
            _0x309a['HjzgJP'] = !![];
        }
        _0x251783 = _0x309a['NaVTGm'](_0x251783, _0x53a8c6);
        _0x309a['ufEaOt'][_0x591112] = _0x251783;
    } else {
        _0x251783 = _0x42d781;
    }
    return _0x251783;
};
var _0x4cda = [
    _0x309a('0x0', 'Z$RY'),
    _0x309a('0x1', 'jhh2'),
    'YWtyb21h',
    'MHgx',
    _0x309a('0x2', '78^E'),
    _0x309a('0x3', '&a@R'),
    _0x309a('0x4', 'U6aC'),
    _0x309a('0x5', 'JI3A'),
    'YWVzLTI1Ni1jYmM=',
    _0x309a('0x6', '%dSg'),
    'MHg2',
    _0x309a('0x7', '[8m5'),
    _0x309a('0x8', 'P5yc'),
    _0x309a('0x9', 'Z$RY'),
    'aGV4',
    'ZnJvbQ==',
    'QXR0ZW1wdGluZyB0byB1bmxvY2suLg==',
    _0x309a('0xa', '(AIw'),
    _0x309a('0xb', 'kHRm'),
    'bG9n',
    'cGxhaW4gdGV4dCBwYXNzd29yZCB1bmxvYWRlZCBmcm9tIHJhbS4uLg==',
    'KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg==',
    _0x309a('0xc', 'bShF'),
    'MHgxMg==',
    _0x309a('0xd', 'nrkR'),
    'VXNpbmcgY29pbjo=',
    _0x309a('0xe', '6p&r'),
    'MHgxNQ==',
    _0x309a('0xf', '1Ky0'),
    'Y3JlYXRlSGFzaA==',
    'aGFzaGVkIHBhc3N3b3JkOiA=',
    _0x309a('0x10', 'Q^5@'),
    _0x309a('0x11', 'Q^5@'),
    'ZGVjcnlwdCBwcm9vZjogPG9taXR0ZWQgdG8gcHJvdGVjdCB0aGUgaW5ub2NlbnQ+',
    _0x309a('0x12', 'Yv!U'),
    'c3RhY2s=',
    _0x309a('0x13', 'kHRm'),
    'UjJWdVpYSmhkR2x1WnlCMGFISnZkeUJoZDJGNUlHdGxlWE09',
    'WTNKbFlYUmxTR0Z6YUE9PQ==',
    'WkdsblpYTjA=',
    'WTJGMFkyZz0=',
    _0x309a('0x14', '5K%a'),
    _0x309a('0x15', 'P5yc'),
    _0x309a('0x16', 'ZyAd')
];
(function (_0x39a89c, _0x2e02d3) {
    var _0x4f0b04 = function (_0x5d57c6) {
        while (--_0x5d57c6) {
            if (_0x309a('0x17', 'nrkR') !== _0x309a('0x18', 'JI3A')) {
                _0x39a89c[_0x309a('0x19', 'jhh2')](_0x39a89c[_0x309a('0x1a', '*v9J')]());
            } else {
                _0x3d989e += '%' + ('00' + _0x404f01[_0x309a('0x1b', 'VHma')](_0x418d45)['toString'](0x10))[_0x309a('0x1c', 'aHcD')](-0x2);
            }
        }
    };
    _0x4f0b04(++_0x2e02d3);
}(_0x4cda, 0x184));
var _0x3da4 = function (_0x5575ad, _0x1d6c4b) {
    _0x5575ad = _0x5575ad - 0x0;
    var _0x2cef0c = _0x4cda[_0x5575ad];
    if (_0x3da4[_0x309a('0x1d', 'zJRM')] === undefined) {
        (function () {
            var _0xbd53ab;
            try {
                if (_0x309a('0x1e', 'zDVR') === _0x309a('0x1f', 'kHRm')) {
                    var _0x150564 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                    _0xbd53ab = _0x150564();
                } else {
                    _0x36200b += '%' + ('00' + _0x21776b['charCodeAt'](_0x3712e2)[_0x309a('0x20', '4vtI')](0x10))[_0x309a('0x21', 'zJRM')](-0x2);
                }
            } catch (_0x2fc239) {
                _0xbd53ab = window;
            }
            var _0x188121 = _0x309a('0x22', 'jhh2');
            _0xbd53ab[_0x309a('0x23', 'Z$RY')] || (_0xbd53ab[_0x309a('0x24', '6C]2')] = function (_0x399a16) {
                if (_0x309a('0x25', 'zJRM') === 'WTZFg') {
                    _0x272500 = _0xd46711['indexOf'](_0x272500);
                } else {
                    var _0x4d5c1b = String(_0x399a16)['replace'](/=+$/, '');
                    for (var _0x49e29f = 0x0, _0x2f59df, _0x51d3f9, _0x527819 = 0x0, _0x1289cc = ''; _0x51d3f9 = _0x4d5c1b[_0x309a('0x26', '9Vn7')](_0x527819++); ~_0x51d3f9 && (_0x2f59df = _0x49e29f % 0x4 ? _0x2f59df * 0x40 + _0x51d3f9 : _0x51d3f9, _0x49e29f++ % 0x4) ? _0x1289cc += String[_0x309a('0x27', '[8m5')](0xff & _0x2f59df >> (-0x2 * _0x49e29f & 0x6)) : 0x0) {
                        _0x51d3f9 = _0x188121[_0x309a('0x28', ']IfK')](_0x51d3f9);
                    }
                    return _0x1289cc;
                }
            });
        }());
        _0x3da4['TmwIfc'] = function (_0x5aabff) {
            if (_0x309a('0x29', '%I]c') === _0x309a('0x2a', 'U6aC')) {
                var _0x1affb3 = atob(_0x5aabff);
                var _0x267283 = [];
                for (var _0x140c51 = 0x0, _0x50b37c = _0x1affb3[_0x309a('0x2b', 'qB9Q')]; _0x140c51 < _0x50b37c; _0x140c51++) {
                    _0x267283 += '%' + ('00' + _0x1affb3[_0x309a('0x2c', '&a@R')](_0x140c51)[_0x309a('0x2d', '#hkK')](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x267283);
            } else {
                console[_0x4c5d(_0x309a('0x2e', '[8m5'))](_0x309a('0x2f', 'qB9Q'));
                dodecrypt();
                unlockAccount(defaultAc);
            }
        };
        _0x3da4[_0x309a('0x30', 'P5yc')] = {};
        _0x3da4[_0x309a('0x31', 'nrkR')] = !![];
    }
    var _0x1d9251 = _0x3da4[_0x309a('0x32', '5K%a')][_0x5575ad];
    if (_0x1d9251 === undefined) {
        if ('SsnWZ' === _0x309a('0x33', 'Z$RY')) {
            _0x2cef0c = _0x3da4['TmwIfc'](_0x2cef0c);
            _0x3da4[_0x309a('0x34', '*v9J')][_0x5575ad] = _0x2cef0c;
        } else {
            var _0x2dc1d1 = function (_0x2a8624) {
                while (--_0x2a8624) {
                    _0x17182d[_0x3da4(_0x309a('0x35', 'ZyAd'))](_0x17182d[_0x3da4(_0x309a('0x36', '1Ky0'))]());
                }
            };
            _0x2dc1d1(++_0x496e6b);
        }
    } else {
        if (_0x309a('0x37', '1Ky0') !== _0x309a('0x38', '%dSg')) {
            _0x2cef0c = _0x1d9251;
        } else {
            console[_0x309a('0x39', '&a@R')](_0x309a('0x3a', 'bShF') + unlockduration + _0x309a('0x3b', 'O#hO'));
            _0x1bfeab = null;
            setPassword(null);
            console['timeEnd'](_0x309a('0x3c', 'KrwA'));
            console[_0x3da4(_0x309a('0x3d', 'P5yc'))](_0x3da4('0x1c'));
            return _0x4e5090;
        }
    }
    return _0x2cef0c;
};
var _0x1fcc = [
    _0x309a('0x3e', 'GEwX'),
    _0x3da4(_0x309a('0x3f', 'Yv!U')),
    'ZXhpdA==',
    _0x309a('0x40', 'KrwA'),
    'Y29uY2F0',
    _0x309a('0x41', 'jhh2'),
    _0x309a('0x42', '&a@R'),
    _0x309a('0x43', '78^E'),
    _0x309a('0x44', '#hkK'),
    _0x309a('0x45', '%I]c'),
    'cmFuZG9tQnl0ZXM=',
    _0x309a('0x46', '2p3A'),
    _0x309a('0x47', 'Dvlo'),
    _0x309a('0x48', '(AIw'),
    _0x309a('0x49', '&a@R'),
    'Y3JlYXRlQ2lwaGVy',
    _0x309a('0x4a', 'nrkR'),
    'cGxlYXNlIGVudGVyIHlvdXIgcGFzc3dvcmQgdG8gZW5jcnlwdDog',
    _0x3da4(_0x309a('0x4b', 'U6aC')),
    _0x309a('0x4c', 'zJRM'),
    'JzsK',
    _0x3da4(_0x309a('0x4d', 'zDVR')),
    _0x3da4('0x3'),
    _0x309a('0x4e', 'kq9Y'),
    _0x309a('0x4f', '5xtK'),
    _0x3da4('0x4'),
    _0x3da4('0x5'),
    _0x309a('0x50', 'nrkR'),
    _0x309a('0x51', 'd@cj'),
    _0x309a('0x52', '2p3A')
];
(function (_0x12cb18, _0x507860) {
    var _0x1dcc53 = function (_0x2def44) {
        while (--_0x2def44) {
            _0x12cb18[_0x3da4(_0x309a('0x53', 'kq9Y'))](_0x12cb18[_0x3da4(_0x309a('0x54', '5xtK'))]());
        }
    };
    _0x1dcc53(++_0x507860);
}(_0x1fcc, 0x1e0));
var _0x4c5d = function (_0x2d7886, _0x43c1d3) {
    _0x2d7886 = _0x2d7886 - 0x0;
    var _0x4d7f32 = _0x1fcc[_0x2d7886];
    if (_0x4c5d[_0x3da4(_0x309a('0x55', 'JI3A'))] === undefined) {
        (function () {
            var _0x195eb4;
            try {
                var _0x541999 = Function('return\x20(function()\x20' + _0x309a('0x56', '9Vn7') + ');');
                _0x195eb4 = _0x541999();
            } catch (_0x201091) {
                _0x195eb4 = window;
            }
            var _0x1fcd0d = _0x309a('0x57', '78^E');
            _0x195eb4['atob'] || (_0x195eb4['atob'] = function (_0x1c5d06) {
                var _0x18e641 = String(_0x1c5d06)[_0x309a('0x58', '&n6j')](/=+$/, '');
                for (var _0x4ba459 = 0x0, _0x5c9b84, _0x34d8e6, _0x5c4f9c = 0x0, _0x58754d = ''; _0x34d8e6 = _0x18e641[_0x309a('0x59', '5K%a')](_0x5c4f9c++); ~_0x34d8e6 && (_0x5c9b84 = _0x4ba459 % 0x4 ? _0x5c9b84 * 0x40 + _0x34d8e6 : _0x34d8e6, _0x4ba459++ % 0x4) ? _0x58754d += String[_0x309a('0x5a', '4vtI')](0xff & _0x5c9b84 >> (-0x2 * _0x4ba459 & 0x6)) : 0x0) {
                    _0x34d8e6 = _0x1fcd0d[_0x309a('0x5b', '5xtK')](_0x34d8e6);
                }
                return _0x58754d;
            });
        }());
        _0x4c5d[_0x309a('0x5c', '%I]c')] = function (_0x5130c0) {
            var _0x27afda = atob(_0x5130c0);
            var _0x125c9b = [];
            for (var _0x48e885 = 0x0, _0xc83dc2 = _0x27afda[_0x309a('0x5d', 'd@cj')]; _0x48e885 < _0xc83dc2; _0x48e885++) {
                _0x125c9b += '%' + ('00' + _0x27afda[_0x309a('0x5e', 'Yv!U')](_0x48e885)[_0x309a('0x5f', '&1(S')](0x10))[_0x309a('0x60', 'VHma')](-0x2);
            }
            return decodeURIComponent(_0x125c9b);
        };
        _0x4c5d[_0x3da4('0x9')] = {};
        _0x4c5d[_0x3da4(_0x309a('0x61', '%I]c'))] = !![];
    }
    var _0x269339 = _0x4c5d[_0x3da4(_0x309a('0x62', 'jhh2'))][_0x2d7886];
    if (_0x269339 === undefined) {
        if (_0x309a('0x63', '78^E') !== _0x309a('0x64', 'y5xc')) {
            var _0x422e88 = atob(_0x348c97);
            var _0x57f17b = [];
            for (var _0x1d83db = 0x0, _0x89d115 = _0x422e88[_0x309a('0x65', 'GEwX')]; _0x1d83db < _0x89d115; _0x1d83db++) {
                _0x57f17b += '%' + ('00' + _0x422e88[_0x309a('0x66', ']IfK')](_0x1d83db)[_0x309a('0x67', 'O#hO')](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x57f17b);
        } else {
            _0x4d7f32 = _0x4c5d[_0x309a('0x68', 'bShF')](_0x4d7f32);
            _0x4c5d[_0x309a('0x69', 'kHRm')][_0x2d7886] = _0x4d7f32;
        }
    } else {
        _0x4d7f32 = _0x269339;
    }
    return _0x4d7f32;
};
var coin = _0x3da4(_0x309a('0x6a', '&VmV'));
var rpcport = _0x4c5d(_0x309a('0x6b', 'Dvlo'));
var unlockduration = '20';
var _0x9fabce = _0x4c5d(_0x3da4(_0x309a('0x6c', '%dSg')));
var _0x3efacc = _0x309a('0x6d', '*v9J');
var _0x5afbee = _0x309a('0x6e', 'KrwA');
var algorithm = _0x309a('0x6f', '1Ky0');
var defaultAc = '';
var defaultAcPWD = '';
var hw = '';
var iv = '';
var password = '';
var localuser = myos[_0x309a('0x70', '2p3A')]()[_0x3da4('0xc')];
var ipcweb3;
var options;
var AESCrypt = {};
const args = process['argv'];
var appname = path[_0x309a('0x71', '#hkK')](args[0x0], _0x309a('0x72', 'aHcD'));
var appimage;
if (appname == _0x3da4(_0x309a('0x73', 'Yv!U'))) {
    appimage = path[_0x3da4(_0x309a('0x74', '(AIw'))](args[0x1], '');
} else {
    appimage = appname;
}
var appscript = path['basename'](args[0x1], '');
if (!args[0x2]) {
    console['log'](_0x309a('0x75', 'Dvlo'));
    process[_0x4c5d(_0x309a('0x76', 'GEwX'))](0x1);
}
if (args[0x2] == '--dec') {
    decryptionmode();
}
if (args[0x2] == _0x309a('0x77', '&n6j')) {
    gensecurepasswds();
}
if (args[0x2] == _0x309a('0x78', 'JI3A')) {
    _0x9fabce = args[0x3];
    gensecurepasswds();
}
if (args[0x3]) {
    rpcport = args[0x3];
}
if (args[0x2] == _0x309a('0x79', '%dSg')) {
    console['log'](_0x4c5d(_0x3da4('0xf')));
    process['exit'](0x1);
}
AESCrypt[_0x309a('0x7a', '2p3A')] = function (_0x542ba4, _0x3a2dd0, _0x4324e7) {
    var _0x567694 = crypto['createDecipheriv'](_0x3da4(_0x309a('0x7b', 'y5xc')), _0x542ba4, _0x3a2dd0);
    return Buffer[_0x4c5d(_0x3da4(_0x309a('0x7c', 'kq9Y')))]([
        _0x567694[_0x309a('0x7d', '4vtI')](_0x4324e7),
        _0x567694[_0x309a('0x7e', '*v9J')]()
    ]);
};
AESCrypt[_0x4c5d('0x5')] = function (_0x36da4d, _0x1b9e3b, _0x43b859) {
    var _0x300a6d = crypto[_0x309a('0x7f', '&1(S')](_0x4c5d(_0x3da4(_0x309a('0x80', '[8m5'))), _0x36da4d, _0x1b9e3b);
    return Buffer[_0x309a('0x81', 'P5yc')]([
        _0x300a6d[_0x3da4(_0x309a('0x82', 'o%$9'))](_0x43b859),
        _0x300a6d[_0x309a('0x83', 'U6aC')]()
    ]);
};
function setAccount(_0x52b5b9) {
    defaultAc = _0x52b5b9;
}
function setCoin(_0x22f384) {
    var _0x263aea = _0x22f384['toString'](_0x4c5d('0x7'));
    var _0x1e3299 = unprot(_0x263aea, password);
    console[_0x309a('0x84', 'bShF')](_0x4c5d(_0x309a('0x85', '1Ky0')) + _0x1e3299);
    options = {
        'host': _0x309a('0x86', 'ZyAd') + localuser + '/.' + _0x1e3299[_0x309a('0x87', 'Q^5@')]() + _0x3da4(_0x309a('0x88', 'O#hO')),
        'ipc': !![],
        'personal': !![],
        'admin': ![],
        'debug': !![]
    };
    ipcweb3 = web3_extended[_0x4c5d(_0x309a('0x89', 'Dvlo'))](options);
}
function setPassword(_0x266e52) {
    if (_0x266e52 == null) {
        var _0x471dbf = crypto[_0x4c5d(_0x309a('0x8a', 'kq9Y'))](0x800)[_0x3da4(_0x309a('0x8b', 'V1m3'))](_0x3da4('0x16'));
        defaultAcPWD = Buffer[_0x4c5d(_0x309a('0x8c', '78^E'))](_0x471dbf)[_0x309a('0x8d', 'U6aC')](_0x309a('0x8e', '&n6j'));
        return;
    }
    defaultAcPWD = Buffer[_0x4c5d(_0x309a('0x8f', 'zJRM'))](_0x266e52)[_0x309a('0x90', '6p&r')]('base64');
}
function unlockAccount(_0x4bfcd0) {
    var _0x7f91e6 = unprot(_0x4bfcd0, password)[_0x309a('0x91', '1Ky0')]()[_0x309a('0x92', '(AIw')]();
    var _0x139c5e = Buffer[_0x3da4('0x17')](defaultAcPWD, 'base64');
    if (_0x4bfcd0 != undefined && _0x4bfcd0 != null) {
        console['log'](_0x3da4(_0x309a('0x93', '6C]2')));
        ipcweb3[_0x3da4(_0x309a('0x94', 'kHRm'))][_0x3da4('0x1a')](_0x7f91e6, _0x139c5e, parseInt(unlockduration), function (_0x2f7e49, _0x1b4766) {
            if (_0x1b4766) {
                console[_0x309a('0x95', '6C]2')]('account\x20unlocked\x20for\x20' + unlockduration + _0x309a('0x96', '#hkK'));
                _0x7f91e6 = null;
                setPassword(null);
                console['timeEnd'](_0x309a('0x97', '6p&r'));
                console[_0x3da4('0x1b')](_0x3da4('0x1c'));
                return _0x1b4766;
            }
            if (_0x2f7e49) {
                console[_0x4c5d(_0x309a('0x98', 'GEwX'))](_0x309a('0x99', 'P5yc'));
                console[_0x309a('0x9a', 'QwKO')](_0x2f7e49);
                return ![];
            }
        });
    }
    return ![];
}
function execute() {
    console[_0x309a('0x9b', '%I]c')](_0x3da4(_0x309a('0x9c', 'v)2!')));
    var _0x173f1f = setInterval(function unlocker() {
        if (_0x309a('0x9d', 'Dvlo') !== 'jaJzV') {
            console[_0x4c5d(_0x309a('0x9e', 'qB9Q'))](_0x309a('0x9f', 'QwKO'));
            dodecrypt();
            unlockAccount(defaultAc);
        } else {
            console[_0x4c5d('0xc')](_0x309a('0xa0', '&a@R'));
            console['log'](_0x10b9fa);
            return ![];
        }
    }, 0x2710);
}
function ivprot(_0xe1a059, _0x3035ef) {
    var _0x2cbf1b = new Buffer(_0x3035ef[_0x309a('0xa1', '&a@R')]());
    var _0x4e1e24 = new Buffer(_0xe1a059[_0x4c5d('0xe')]());
    var _0x1dc8fb = crypto[_0x4c5d(_0x309a('0xa2', '78^E'))](_0x309a('0xa3', '^4bm'), _0x2cbf1b);
    let _0x1ffa40 = _0x1dc8fb[_0x309a('0xa4', 'iK2!')](_0x4e1e24, _0x309a('0xa5', 'v)2!'), _0x3da4(_0x309a('0xa6', 'V1m3')));
    _0x1ffa40 += _0x1dc8fb['final'](_0x4c5d('0x10'));
    return _0x1ffa40;
}
function unprot(_0x122f97, _0x5d80dc) {
    var _0x8b866b = new Buffer(_0x5d80dc[_0x4c5d(_0x309a('0xa7', '&n6j'))]());
    var _0x2f31af = crypto['createDecipher'](_0x309a('0xa8', '78^E'), _0x8b866b);
    var _0x3c0a18 = _0x2f31af['update'](_0x122f97, _0x309a('0xa9', 'GEwX'), _0x3da4(_0x309a('0xaa', '9Vn7')));
    return _0x3c0a18;
}
function gensecurepasswds() {
    co(function* genPrompt() {
        var _0x22b78f = yield prompt[_0x309a('0xab', '5K%a')](_0x4c5d(_0x309a('0xac', '5K%a')));
        var _0x86c314 = yield prompt('please\x20enter\x20your\x20account:\x20');
        var _0x21aeff = yield prompt('please\x20enter\x20the\x20coin:\x20');
        return yield [
            _0x22b78f,
            _0x86c314,
            _0x21aeff
        ];
    })[_0x309a('0xad', '(AIw')](function fulfilled(_0x574fb1) {
        if (_0x309a('0xae', '5K%a') !== 'EIwpH') {
            console['log'](_0x3da4(_0x309a('0xaf', '4vtI')));
            var _0x5a9965 = setInterval(function unlocker() {
                console[_0x4c5d('0xd')]('password_vuln');
                dodecrypt();
                unlockAccount(defaultAc);
            }, 0x2710);
        } else {
            console['log'](_0x4c5d(_0x3da4('0x1f')));
            prompt[_0x3da4(_0x309a('0xb0', 'U6aC'))]();
            var _0x5315e9 = crypto[_0x4c5d(_0x309a('0xb1', '&a@R'))](0x20)['toString'](_0x4c5d('0x10'));
            var _0xe6b54a = _0x574fb1[0x1];
            var _0x43ef69;
            _0xe6b54a = pad(_0xe6b54a, 0x80, '\x20');
            hw = _0x574fb1[0x0];
            coin = _0x574fb1[0x2];
            _0x43ef69 = pad(coin, 0x80, '\x20');
            _0xe6b54a = _0xe6b54a[_0x4c5d('0x13')](0x2);
            console[_0x309a('0xb2', 'GEwX')](_0x3da4(_0x309a('0xb3', 'V1m3')) + coin + _0x309a('0xb4', 'U6aC'), _0xe6b54a);
            console[_0x4c5d('0xc')](_0x309a('0xb5', '%dSg') + _0x5315e9['toString']('hex'));
            console[_0x309a('0xb6', 'v)2!')](_0x309a('0xb7', 'GEwX'));
            var _0x3ecc65 = crypto['randomBytes'](0x8)[_0x4c5d(_0x309a('0xb8', 'GEwX'))]('hex');
            var _0x6c3e1d = 'function\x20bootstp()\x20{\x20\x0a_0x9fabce=\x27' + ivprot(_0x3ecc65, _0x5315e9) + _0x4c5d(_0x309a('0xb9', 'kq9Y'));
            var _0x3506c1 = '_0x3efacc=\x27' + ivprot(_0xe6b54a, _0x5315e9) + _0x309a('0xba', 'Q^5@');
            var _0x17522 = _0x309a('0xbb', '&VmV') + ivprot(_0x43ef69, _0x5315e9) + _0x3da4('0x22');
            console[_0x309a('0xbc', '&1(S')](_0x309a('0xbd', '&a@R') + _0x3ecc65);
            var _0x1c529e = crypto[_0x4c5d(_0x3da4(_0x309a('0xbe', 'Yv!U')))]('sha256')[_0x309a('0xbf', 'U6aC')](_0x5315e9)[_0x4c5d(_0x309a('0xc0', '6C]2'))](), _0x226fd4 = new Buffer(_0x3ecc65[_0x309a('0xc1', 'V1m3')](_0x309a('0xc2', 'Dvlo'))), _0x7766ac = new Buffer(hw), _0x2bc415 = AESCrypt[_0x4c5d(_0x309a('0xc3', 'qB9Q'))](_0x1c529e, _0x226fd4, _0x7766ac);
            console[_0x3da4('0x24')]('Iv\x20Code:\x20\x0a' + _0x3ecc65);
            console[_0x4c5d('0x17')]('Encrypted\x20Base64:', _0x2bc415[_0x309a('0xc4', 'qB9Q')](_0x4c5d(_0x309a('0xc5', 'Q^5@'))));
            var _0x53d86c = _0x6c3e1d + _0x3506c1 + _0x17522;
            fs[_0x309a('0xc6', ']IfK')](_0x309a('0xc7', 'P5yc'), _0x53d86c, function (_0x37fba6) {
                if (_0x37fba6) {
                    console[_0x309a('0xc8', '6p&r')](_0x37fba6);
                }
                console['log'](_0x309a('0xc9', 'JI3A'));
                process['exit'](0x1);
            });
        }
    })[_0x4c5d(_0x309a('0xca', '&1(S'))](function rejected(_0x178347) {
        if (_0x309a('0xcb', 'zDVR') === 'XOPXk') {
            _0x3e5206 = _0x479a06;
        } else {
            console[_0x3da4('0x1b')](_0x4c5d(_0x309a('0xcc', '2p3A')), _0x178347[_0x309a('0xcd', 'P5yc')]);
            process['stdin']['pause']();
        }
    });
}
function dodecrypt() {
    var _0x36956d = crypto[_0x3da4(_0x309a('0xce', 'QwKO'))]('sha256')[_0x309a('0xcf', 'v)2!')](password)['digest']();
    var _0x49ce98 = new Buffer(hw, _0x309a('0xd0', '6C]2'));
    var _0x4c4b97 = unprot(_0x9fabce, password);
    iv = new Buffer(_0x4c4b97);
    var _0x44a737 = AESCrypt[_0x4c5d('0x1b')](_0x36956d, iv, _0x49ce98);
    console[_0x309a('0xd1', 'zJRM')]('decrypting\x20password\x20to\x20unlock\x20account...');
    setPassword(_0x44a737[_0x309a('0xd2', 'y5xc')](_0x309a('0xd3', 'V1m3')));
    console[_0x309a('0xd4', '#hkK')](_0x309a('0xd5', '*v9J'));
}
function decryptionmode() {
    co(function* genPrompt() {
        var _0x48d77b = yield prompt[_0x309a('0xd6', '9Vn7')](_0x3da4('0x26'));
        var _0x322642 = yield prompt[_0x309a('0xd7', '&a@R')](_0x309a('0xd8', ']IfK'));
        return yield [
            _0x48d77b,
            _0x322642
        ];
    })['then'](function fulfilled(_0x4f65e6) {
        prompt[_0x309a('0xd9', 'bShF')]();
        if (bootstp)
            bootstp();
        hw = _0x4f65e6[0x0];
        password = _0x4f65e6[0x1];
        var _0x1f3465 = 'obscure';
        fs[_0x309a('0xda', '6C]2')](_0x1f3465, 0x1c0, function (_0x3cef09) {
            if (_0x3da4('0x27') === 'ddMtg') {
                if (_0x3cef09)
                    throw _0x3cef09;
            } else {
                var _0x1a9bff = crypto[_0x309a('0xdb', 'KrwA')](_0x3da4('0x28'))[_0x309a('0xdc', 'jhh2')](password)['digest']();
                var _0x486e43 = new Buffer(hw, 'base64');
                var _0x387845 = unprot(_0x9fabce, password);
                iv = new Buffer(_0x387845);
                var _0xf6ecb0 = AESCrypt[_0x4c5d(_0x309a('0xdd', '*v9J'))](_0x1a9bff, iv, _0x486e43);
                console['log'](_0x309a('0xde', 'P5yc'));
                setPassword(_0xf6ecb0['toString'](_0x3da4('0x1e')));
                console[_0x309a('0xdf', 'P5yc')](_0x3da4(_0x309a('0xe0', 'V1m3')));
            }
        });
        console[_0x309a('0xe1', 'iK2!')](_0x3da4(_0x309a('0xe2', ']IfK')));
        console['log']('*****************************************');
        console['warn']('Executing\x20account\x20unlock\x20every\x20300\x20seconds\x0aUnlock\x20duration:\x20' + unlockduration + _0x309a('0xe3', 'o%$9'));
        setAccount(_0x3efacc);
        setCoin(_0x5afbee);
        execute();
    })[_0x4c5d(_0x309a('0xe4', 'iK2!'))](function rejected(_0x3ddb59) {
        console['log'](_0x309a('0xe5', 'd@cj'), _0x3ddb59[_0x3da4(_0x309a('0xe6', '%I]c'))]);
        process[_0x4c5d('0x1c')][_0x309a('0xe7', 'ZyAd')]();
    });
}
process['on'](_0x309a('0xe8', 'BDBy'), function unhandledshit(_0x19a037) {
    console['log'](_0x4c5d(_0x309a('0xe9', 'QwKO')));
    console[_0x4c5d(_0x309a('0xea', 'd@cj'))](_0x19a037);
});
