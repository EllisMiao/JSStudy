'use strict';
var fs = require('fs');
//一个readable流和一个writable流串起来后，所有的数据自动从readable流进writeable流，这种操作叫pipe
var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copy.txt');
rs.pipe(ws);