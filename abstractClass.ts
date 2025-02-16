// 基类、抽象类
// abstract所定义的抽象类
// abstract所定义的方法、都只能描述不能进行一个实现

 abstract class Mue{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    getName():string{
        return this.name
    }

    abstract init():void
   // abstract init():void{}//方法“init”不能具有实现，因为它标记为抽象。
}

// 抽象类无法创建出示例、无法被实例化
// 那这样的类有什么用呢？ 派生类继承抽象类、实现抽象类的抽象方法
// new Mue() //无法创建抽象类的实例。

class React extends Mue{
    constructor(){
        super("")
    }
    init() {
        
    }

    setName(name:string){
        this.name = name;
    }
}

let react = new React();
react.setName("测试----");
console.log(react.getName());




