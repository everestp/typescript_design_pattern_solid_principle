class Animal {
  constructor( public name: string) { }
  move(distance: number): void{
    console.log(this.name, "moved distance", distance,"meters" )

  }
}


class Dog extends Animal{
  constructor(public name: string = "dog") {
    super(name);
  }
}

let myDog = new Dog("Tiger")

myDog.move(5)


class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}
  display(): void {
    console.log(this.id ,this.price,this.description)

  }


}

class Book extends Product{
   constructor(
    public id: string,
    public price: number,
     public description: string,
     public title: string,
    public author: string
   ) {
     super(id , price , description)
   }
  display(): void {
    super.display()
    console.log(this.author ,this.title)
  }
}

class Electronic extends Product{
   constructor(
    public id: string,
    public price: number,
     public description: string,
     public brand: string,
    public model: string
   ) {
     super(id , price , description)
   }
  display(): void {
    super.display()
    console.log(this.brand ,this.model)
  }
}


let book = new Book("1", 19, "A good book ", "everest", "rest")
book.display()
