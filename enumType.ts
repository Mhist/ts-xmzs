enum Color {
    red,
    green,
    blue
}
console.log(Color.red);  // 0
console.log(Color.green); // 1
console.log(Color.blue); // 2

enum Color2 {
    red = 1,
    green,
    blue
}

console.log(Color2.red);  // 1
console.log(Color2.green); // 2
console.log(Color2.blue); // 3


enum Color3 {
    red = 1,
    green = 6,
    blue = 9
}

console.log(Color3.red);  // 1
console.log(Color3.green); // 6
console.log(Color3.blue); // 9


// 字符串枚举
enum Color4 {
    red = 'red',
    green = 'green',
    blue = 'blue'
}
console.log(Color4.red);  // red
console.log(Color4.green); // green
console.log(Color4.blue); // blue


// 异构枚举

enum Color5 {
    aa,
    yes = 1,
    bb,
    no = 'no',
}
console.log(Color5.aa);  // 0
console.log(Color5.no); // no
console.log(Color5.bb);  // 2
console.log(Color5.yes);  // 1
console.log(Color5.no); // no

interface A {
    red:Color5.yes
}

let myObj:A ={
    red: Color5.yes
}

console.log(myObj.red); // 1



// const 枚举、在枚举定义前方添加const关键字

const enum status1 {
    success,
    fail,
}



console.log(status1.success); // console.log(0 /* status1.success */);编译出的是左侧这种

 enum status2 {
    success,
    fail,
}


console.log(status2.success);
/**不加const编译的是这种
 * var status2;
(function (status2) {
    status2[status2["success"] = 0] = "success";
    status2[status2["fail"] = 1] = "fail";
})(status2 || (status2 = {}));
console.log(status2.success);
 */


// 反向映射

enum Types {
    success = 456
}

let success:number = Types.success;

let enumKey:string = Types[success];

console.log(`value---- ${success}`,`key----${enumKey}` ); // value---- 456 key----success




