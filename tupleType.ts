let person: readonly[string, number, boolean] = ["Alice", 25, true];

// person = [1,2] // 不能将类型“number”分配给类型“string”。
// person.pop()
// person.push(1)
console.log(person);

const arr11:readonly[x:number,y?:boolean] = [1,true];
const arr112:readonly[x:number,y?:boolean] = [1];

let excel:[string,string,number][] = [
    ['xm','男',18],
    ['xm','男',20],
    ['xm','男',22],
    ['xm','男',24]
]

type first = typeof arr11[0]



type second = typeof arr11['length']