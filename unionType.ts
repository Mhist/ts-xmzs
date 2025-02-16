// 联合类型
let phone:number|string = '010-2787465';
let phone1:number|string = 18878945612;

let fn2 = function(type:number|boolean):boolean{
    return !!type;
}

let result = fn2(1);
console.log(result); //true


// 交叉类型
interface People {
    name:string,
    age:number
}

interface Man {
    sex:number
}

const xiaoman = (man: People & Man):void=>{
    return console.log(man)
}

xiaoman({
    name:'xiaoman',
    age:18,
    sex:1
})      // { name: 'xiaoman', age: 18, sex: 1 }


// 类型断言

let someValue: any = "这是一个字符串";
let strLength: number = (<string>someValue).length; // 使用 <类型> 的语法来断言类型。

console.log(strLength); // 输出：7


let someValue1: any = "这是一个字符串";
let strLength1: number = (someValue as string).length; // 使用 as 关键字来断言类型（推荐使用，因为在 JSX 中尖括号语法会与标签冲突）。

console.log(strLength1); // 输出：7


//当变量是联合类型时，TypeScript 只能访问联合类型中共有的属性和方法。如果需要访问特定类型的属性或方法，可以使用类型断言。

let value: string | number = "hello";
// 断言为 string 类型
let strLength2: number = (value as string).length;

// 断言为 number 类型
let numValue2: number = (value as number).toFixed(2); // 运行时可能会出错，因为 value 是字符串、不能将类型“string”分配给类型“number”。
