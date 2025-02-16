var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
console.log(Color.red); // 0
console.log(Color.green); // 1
console.log(Color.blue); // 2
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["green"] = 2] = "green";
    Color2[Color2["blue"] = 3] = "blue";
})(Color2 || (Color2 = {}));
console.log(Color2.red); // 1
console.log(Color2.green); // 2
console.log(Color2.blue); // 3
var Color3;
(function (Color3) {
    Color3[Color3["red"] = 1] = "red";
    Color3[Color3["green"] = 6] = "green";
    Color3[Color3["blue"] = 9] = "blue";
})(Color3 || (Color3 = {}));
console.log(Color3.red); // 1
console.log(Color3.green); // 6
console.log(Color3.blue); // 9
// 字符串枚举
var Color4;
(function (Color4) {
    Color4["red"] = "red";
    Color4["green"] = "green";
    Color4["blue"] = "blue";
})(Color4 || (Color4 = {}));
console.log(Color4.red); // red
console.log(Color4.green); // green
console.log(Color4.blue); // blue
// 异构枚举
var Color5;
(function (Color5) {
    Color5[Color5["aa"] = 0] = "aa";
    Color5[Color5["yes"] = 1] = "yes";
    Color5[Color5["bb"] = 2] = "bb";
    Color5["no"] = "no";
})(Color5 || (Color5 = {}));
console.log(Color5.aa); // 0
console.log(Color5.no); // no
console.log(Color5.bb); // 2
console.log(Color5.yes); // 1
console.log(Color5.no); // no
var myObj = {
    red: Color5.yes
};
console.log(myObj.red); // 1
console.log(0 /* status1.success */); // console.log(0 /* status1.success */);编译出的是左侧这种
var status2;
(function (status2) {
    status2[status2["success"] = 0] = "success";
    status2[status2["fail"] = 1] = "fail";
})(status2 || (status2 = {}));
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
var Types;
(function (Types) {
    Types[Types["success"] = 456] = "success";
})(Types || (Types = {}));
var success = Types.success;
var enumKey = Types[success];
console.log('value---- ${success}', 'key----${enumKey}');
