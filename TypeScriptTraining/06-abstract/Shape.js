"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    get _x() {
        return this.x;
    }
    set _x(value) {
        this.x = value;
    }
    get _y() {
        return this.y;
    }
    set _y(value) {
        this.y = value;
    }
    getInfo() {
        return ` x = ${this._x} , y = ${this._y}`;
    }
}
exports.Shape = Shape;
