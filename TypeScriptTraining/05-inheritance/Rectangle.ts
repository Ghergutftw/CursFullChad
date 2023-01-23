import {Shape} from "./Shape";

export class Rectangle extends Shape {
    private width : number
    private length : number


    constructor(__x: number, __y: number, _width: number, _length: number) {
        super(__x, __y);
        this.width = _width;
        this.length = _length;
    }

    get _width(): number {
        return this.width;
    }

    set _width(value: number) {
        this.width = value;
    }

    get _length(): number {
        return this.length;
    }

    set _length(value: number) {
        this.length = value;
    }

    getInfo(): string {
        return super.getInfo() + `, length : ${this.length}  , width = ${this.width}`;
    }
}