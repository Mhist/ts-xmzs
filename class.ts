//1.class 的基本用法 继承 和类型约束 implements
//2.class 的修饰符 readonly private protected public
//3.super 原理
//4.静态方法
//5. get set
interface Options {
  el: string | HTMLElement;
}
interface vueCls {
  options: Options;
  init(): void;
}

interface VNode {
  tag: string; // div section header
  text?: string; // 123 565sd6a6d
  children?: VNode[];
}

// 虚拟dom简单版
class Dom {
  // 创建节点的方法
  creatElement(el: string): HTMLElement {
    return document.createElement(el);
  }

  // 填充文本的方法
  setText(el: HTMLElement, text: string | null ) {
    el.textContent = text;
  }

  //render渲染函数、将虚拟dom渲染为真实的dom
  render(data: VNode) {
    let root = this.creatElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item) => {
        let child = this.render(item);
        root.appendChild(child);
      });
    } else {
      this.setText(root, data.text);
    }
    return root;
  }
}
class Vue extends Dom implements vueCls {
  options: Options;
  constructor(options: Options) {
    super();
    this.options = options;
    this.init();
  }
  static getVersion():string{
    let version = '1.0.0';
    console.log(version);
    return version
  }
  init(): void {
    let data: VNode = {
      tag: "div",
      children: [
        {
          tag: "section",
          text: "我是子节点1",
        },
        {
          tag: "section",
          text: "我是子节点2",
        },
        {
          tag: "section",
          text: "我是子节点3",
        },
      ],
    };
    let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
    app?.appendChild(this.render(data));
    
  }
}

let vue = new Vue({
  el: "#app",
});
Vue.getVersion()


//  get set
class Ref{
  _value:any
  constructor(value){
    this._value = value
  }

  get value(){
    return this._value + 'vvv'
  }

  set value(newVal){
    this._value = newVal + '小满';
  }
}

const ref = new Ref('哈哈哈')
console.log(ref.value)//哈哈哈vvv
ref.value = '小哥'
console.log(ref.value)//小哥小满vvv



