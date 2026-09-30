

abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();

  }
  calculateArea(): number {
 return this.width * this.height
  }

}

class Square extends Shape {
  constructor(public width: number) {
    super();

  }
  calculateArea(): number {
 return this.width * this.width
  }

}


//==========Client Code



function area(shape: Shape) {
  return shape.calculateArea()
}


let rect = new Rectangle(10, 12);
let square = new Square(8)
area(rect)
area(square)




//Payment Processor
//Credit card
//Debit Card
//Paypal



abstract class PaymentProcessor{
  abstract pay(amount:number): void;
}

class CreditCard extends PaymentProcessor{

  pay(amount : number): void {
    console.log('Paymetn done by credit cards',amount)
  }


}

class DebitCard extends PaymentProcessor{

  pay(): void {
     console.log("Payment done by debit card")
  }

}

class Paypal extends PaymentProcessor{


  pay(amount :number): void {
  console.log("payment done by paypal", amount)
  }

}

function dopayment(paymentmethod: PaymentProcessor ,amount :number) {
   paymentmethod.pay(amount)
 }


let payment: Paypal = new Paypal()
payment.pay(payment, 10)


let creditCardProcessor = new CreditCard()

let debitCardProcessor = new DebitCard()

let paypalProcessor = new Paypal()

dopayment(creditCardProcessor,10)
