
function test(){
    var a = arguments[0];
    var b = arguments[1];
    var c = arguments[2];
    var d = arguments[3];
    var p = arguments[4];
    console.log('a:'+a);
    console.log('b:'+b);
    console.log('c:'+c);
    console.log('d:'+d);
    console.log('name:'+p.name);
    console.log('age:'+p.age);
}

var person = {
    name:'张三',
    age:18
};

test(1,'test','你好','abc',person);