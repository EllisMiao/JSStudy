"use strict";
var fs = require("fs");
//异步读
fs.readFile("sample.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
try{
    //同步读
    var data = fs.readFileSync("sample.txt","utf-8");
    console.log("sync:"+data);
}catch(err){
    console.log(err);
}

//异步写
var content = "你好，JavaScript";
fs.writeFile("output.txt",content,function(err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
//同步写
var content = "你好，JavaScript 同步写入";
try{
    fs.writeFileSync("output.txt",content);
}catch(err){
    console.log(err);
}
//stat
fs.stat("sample.txt",function(err,stats){
    if(err){
        console.log(err);
    }else{
        if(stats.isDirectory()){
            console.log("isDirectory:"+stats.isDirectory());
        }else{
            console.log("size:"+stats.size);
            console.log("date:"+stats.birthtime);
        }
    }
});