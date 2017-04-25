'use strict';
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var sha1 = crypto.createHash('sha1');
//可任意多次调用update()
md5.update('Hello,nodejs!');
sha1.update('Hello,nodejs!');

console.log(md5.digest('hex'));
console.log(sha1.digest('hex'));


function aesEncrypt(data,key){
    const cipher = crypto.createCipher('aes192',key);
    var crypted = cipher.update(data,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted,key){
    const decipher = crypto.createDecipher('aes192',key);
    var decrypted = decipher.update(encrypted,'hex','utf8');
    decrypted+= decipher.final('utf8');
    return decrypted;
}

var data = 'Hello,this is a secret message';
var key = 'Password';
var encrypted = aesEncrypt(data,key);
var decrypted = aesDecrypt(encrypted,key);

console.log('Plain text:'+data);
console.log('Encrypted text:'+encrypted);
console.log('Decrypted text:'+decrypted);