//1.函数定义类型和返回值 |箭头函数定义类型和返回值
//2.函数默认的参数 | 函数可选参数
//3.参数是一个对象如何定义
//4.函数this类型
//5.函数重载

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 6));

const add2 = (a: number, b: number): number => {
  return a + b;
};
console.log(add2(2, 6));

function add3(a: number = 10, b: number = 60): number {
  return a + b;
}
console.log(add3(undefined, 10)); //当第一个参数要使用默认值的时候、可以传入undefined；                     // 20
console.log(add3(undefined, undefined)); //当第两个参数都要使用默认值的时候、可以不传或者传入俩undefined；    // 70

// function add4(a?:number,b?:number):number{
//     return a + b;      // 严格模式下、或报错  'a' is possibly 'undefined'. 'b' is possibly 'undefined'.
// }
// console.log(add4(1));

interface User {
  name: string;
  age: number;
}

function findUser(user: User): User {
  return user;
}
console.log(
  findUser({
    name: "xiaoman",
    age: 24,
  })
); // { name: 'xiaoman', age: 24 }

interface Obj {
  user: number[];
  add: (num: number) => void;
}
// ts 可以定义this的类型、在js中无法使用、必须是第一个参数定义的类型
let obj = {
  user: [1, 2, 3],
  add(num: number) {
    this.user.push(num);
    console.log(obj.user);
  },
};
obj.add(4);

interface Obj2 {
  user: number[];
  add: (this: Obj2, num: number) => void;
}
// ts 可以定义this的类型、在js中无法使用、必须是第一个参数定义的类型
let obj2 = {
  user: [1, 2, 3],
  add(this: Obj2, num: number) {
    this.user.push(num);
    console.log(obj2.user);
  },
};
obj2.add(5);

// 函数重载

let user: number[] = [1, 2, 3];

function findNum(add: number[]): number[];// 如果传入的是number类型的数组那就做添加

function findNum(id: number): number[] ;// 如果传入了id，就是单个查询

function findNum(): number[];// 如果没有传入就查询全部

function findNum(ids?:number | number[]):number[]{
    if(typeof ids == 'number'){
        return user.filter(v=>v==ids);
    }else if(Array.isArray(ids)){
        user.push(...ids)
        return user
    }else{
        return user;
    }
}
console.log(findNum())                // [1,2,3]
console.log(findNum(2))               // [2]
console.log(findNum([5,6,7]))         // [1,2,3,5,6,7]
