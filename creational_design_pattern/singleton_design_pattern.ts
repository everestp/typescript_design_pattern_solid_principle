class Singleton{
  private static instance: Singleton
  private static _value: number;
  private constructor() { }
  public static getInstance(): Singleton{
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();


    }
    return Singleton.instance
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value
  }

}


let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

instance1.value = 10;

console.log(instance1.value, instance2.value)




//Singleton logger class

//log method
// can have multiple method

class Logger {
  private static instance:Logger
  private constructor() {
    if (!Logger.instance) {
         Logger.instance = new Logger ()
    }

    return Logger.instance
  }

  public static getInstance(): Logger{
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance;
  }

  public log(message: string): void{
    const timestamp = new Date();
    console.log(`timestamp  ${timestamp.toLocaleDateString()}- ${message}`)

  }
}


let logger1 = Logger.getInstance()
logger1.log("This is the first message")

let logger2 = Logger.getInstance();
logger2.log("This i the message two")
