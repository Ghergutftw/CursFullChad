import {Shape} from "./Shape";

export class Circle extends Shape{

    private radius:number


    constructor(__x: number, __y: number, _radius: number) {
        super(__x, __y);
        this.radius = _radius;
    }

    get _radius(): number {
        return this.radius;
    }

    set _radius(value: number) {
        this.radius = value;
    }

    getInfo(): string {
        return super.getInfo() +`, radius = ${this._radius}`;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2)
    }
}