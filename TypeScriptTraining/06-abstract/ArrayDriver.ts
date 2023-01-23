import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";


let myCircle = new Circle(5,10,20)

let myRectangle = new Rectangle(1, 1, 3, 7)

let theShapes : Shape[] = []
theShapes.push(myCircle)
theShapes.push(myRectangle)

theShapes.forEach(value => {
    console.log(value.getInfo())
    console.log(value.calculateArea())
})