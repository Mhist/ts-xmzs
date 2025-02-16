function xm(): void {
  throw new Error("产生错误");
}
xm();

function xm2(): never {
  throw new Error("产生错误");
}

xm2();

//never类型在联合类型中会被忽略掉

type A1 = "唱" | "跳" | "rap" | "篮球";

function kun(value: A1) {
  switch (value) {
    case "唱":
      break;
    case "跳":
      break;
    case "rap":
      break;
    case "篮球":
        break;
    default:
        const error:never = value;
        break;
        
  }
}

