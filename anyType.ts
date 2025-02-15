let any1:any = '123';
let any2:any = '123';
let any3:any = true;
let any4:any = [];
let any5:any = {};
let any6:any = null;
let any7:any = undefined;

let un1:unknown = '123';
let un2:unknown = 123;
let un3:unknown = true;
let un4:unknown = null;

// any 任意类型  unknown 不知道的类型
// Object
// Number、String、Boolean
// number、string、boolean
// 1 、'小满'，false
// never
let any8:number = 999;
console.log(any8);

let qa:unknown = 1;
let qb:unknown = 2;
qa = qb;
qb = qa;

// unknown只能赋值给自身、或者any
// unknown没有办法读任何属性、方法也不可以调用

let qc:unknown = 1;
let qd:number = 2;

qd = qc;
any1 = qc;


qc = qd;



