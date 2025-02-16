//内置对象
/**
 *  在编程语言中，内置对象 是指语言或运行时环境（如浏览器、Node.js）默认提供的对象或类。
 * 
 *  这些对象可以直接使用，无需额外导入或定义。例如
 * 
 *  在 JavaScript 中，Array、Date、Math、JSON 等都是内置对象。

    在浏览器环境中，document、window 等也是内置对象。

    在 Node.js 中，process、Buffer 等是内置对象。
 */

// ecma、Number、Date、RegExp、Error、XMLHttprequest
// dom、querySelect、MouseEvent
// bom、promise、localstorage、location、cookie
// 案例

// let num:number = new Number(1); //不能将类型“Number”分配给类型“number”。“number”是基元，但“Number”是包装器对象。如可能首选使用“number”。
let num1:Number = new Number(1);

let date:Date = new Date();
let reg:RegExp = new RegExp(/\w/);
let error:Error = new Error('错了');
// let xhr:XMLHttpRequest = new XMLHttpRequest();  // node.js环境

// HTML(元素名称) Element
// let div1:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
// let nList:NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div footer');


// let local:Storage = localStorage;
let pr:Promise<number> = new Promise((r)=>r(1));
let cookie:string = document.cookie;
pr.then((res)=>{
    console.log(res);
    
}) // 1






