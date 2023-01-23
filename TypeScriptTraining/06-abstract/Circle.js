"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(__x, __y, _radius) {
        super(__x, __y);
        this.radius = _radius;
    }
    get _radius() {
        return this.radius;
    }
    set _radius(value) {
        this.radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius = ${this._radius}`;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}
exports.Circle = Circle;
