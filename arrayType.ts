// 数组类型
// Array<boolean>
// 数组普通类型
let arr: number[] = [1, 2, 3, 4, 5];

interface X {
  name: string;
  age?: number;
}

let arr1: Array<boolean> = [true, false];

let arr2: X[] = [{ name: "xiaoman" }, { name: "胡萝卜" }];

// 定义二维数组
let arr3: number[][] = [[1], [2], [3]];
let arr4: Array<Array<number>> = [[1], [2], [3]];
// 大杂烩数组
let arr5: any = [1, "adasdas", true, {}];
// 元组位置对应
let arr6: [number, string, boolean, object] = [1, "adasdas", true, {}];
function test(...args: any[]) {
  console.log(args);
}
test(1, 2, 3); //[1,2,3]
function test2(...args: string[]) {
    console.log(args);
  }
  test2("111", "222", "333"); //[ '111', '222', '333' ]

  interface IArguments {
    callee:Function,
    length:number,
  }
  function test3(...args: any[]) {
    console.log(arguments);
    let custom:IArguments = arguments;
    console.log(custom);
  }
  test3(1,2,3); 