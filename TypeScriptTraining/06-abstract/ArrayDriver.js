"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(1, 1, 3, 7);
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
theShapes.forEach(value => {
    console.log(value.getInfo());
    console.log(value.calculateArea());
});
