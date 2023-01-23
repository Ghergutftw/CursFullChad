"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(__x, __y, _width, _length) {
        super(__x, __y);
        this.width = _width;
        this.length = _length;
    }
    get _width() {
        return this.width;
    }
    set _width(value) {
        this.width = value;
    }
    get _length() {
        return this.length;
    }
    set _length(value) {
        this.length = value;
    }
    getInfo() {
        return super.getInfo() + `, length : ${this.length}  , width = ${this.width}`;
    }
    calculateArea() {
        return this.width * this.length;
    }
}
exports.Rectangle = Rectangle;
