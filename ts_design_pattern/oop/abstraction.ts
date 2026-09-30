//shapes
// Area , Perimeter
//simple - signl finction calucalteTotalArea


//Interface A shaoe

interface Shape {
  area(): number;
  perimeter() : number
}
class Circle implements Shape{
  constructor(private radius: number) { }
   area(): number {
     return 3.14 * this.radius * this.radius
   }
  perimeter(): number {
    return 2*3.14* this.radius
  }
}

  class Reactangle implements Shape{
  constructor(private width: number,private height:number) { }
   area(): number {
     return this.width * this.height
   }
  perimeter(): number {
    return 2* (this.width * this.height)
  }
  }


function calucalteTotalArea(shape :Shape): number{
  return shape.area();

  }
function calucalteTotalPerimeter(shape :Shape): number{
  return shape.perimeter();

}


//Client Code

let circle: Circle = new Circle(5)
let rectagle: Reactangle = new Reactangle(4,6)
console.log(calucalteTotalArea(circle) , calucalteTotalArea(rectagle))
