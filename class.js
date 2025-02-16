var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 虚拟dom简单版
var Dom = /** @class */ (function () {
    function Dom() {
    }
    // 创建节点的方法
    Dom.prototype.creatElement = function (el) {
        return document.createElement(el);
    };
    // 填充文本的方法
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    //render渲染函数、将虚拟dom渲染为真实的dom
    Dom.prototype.render = function (data) {
        var _this = this;
        var root = this.creatElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(function (item) {
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    };
    return Dom;
}());
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
    }
    Vue.getVersion = function () {
        var version = '1.0.0';
        console.log(version);
        return version;
    };
    Vue.prototype.init = function () {
        var data = {
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
        var app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    };
    return Vue;
}(Dom));
var vue = new Vue({
    el: "#app",
});
Vue.getVersion();
//  get set
var Ref = /** @class */ (function () {
    function Ref(value) {
        this._value = value;
    }
    Object.defineProperty(Ref.prototype, "value", {
        get: function () {
            return this._value + 'vvv';
        },
        set: function (newVal) {
            this._value = newVal + '小满';
        },
        enumerable: false,
        configurable: true
    });
    return Ref;
}());
var ref = new Ref('哈哈哈');
console.log(ref.value);
ref.value = '小哥';
console.log(ref.value);
