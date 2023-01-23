export abstract class Shape {
    private x : number
    private y : number


    constructor(_x: number, _y: number) {
        this.x = _x;
        this.y = _y;
    }

    get _x(): number {
        return this.x;
    }

    set _x(value: number) {
        this.x = value;
    }

    get _y(): number {
        return this.y;
    }

    set _y(value: number) {
        this.y = value;
    }

    getInfo():string{
        return ` x = ${this._x} , y = ${this._y}`
    }

    abstract calculateArea() : number

}