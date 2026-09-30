

// without DI
class MySqlDatabase1 {
  save(data: string): void {
    console.log("Data is saved in MySql database", data)
  }
}


class HighLevelModule1{
  constructor(private database: MySqlDatabase1) { }
  execute(data: string) {
    this.database.save(data)
  }
}




interface IDatabase{
  save(data:string):void
}


class MySqlDatabase implements IDatabase{
  save(data: string): void{
     console.log("Data is saved in MySql database",data)
  }
}
class MongoDatabase implements IDatabase{
  save(data: string): void {
    console.log("Data is saved in MongoDB database",data)
  }
}

class HighLevelModule{
  constructor(private database: IDatabase) { }
  execute(data: string) {
    this.database.save(data)
  }
}


let mysql:MySqlDatabase = new MySqlDatabase();
let mongo: MongoDatabase = new MongoDatabase()

let user: HighLevelModule = new HighLevelModule(mysql)
user.execute("john")

let post: HighLevelModule = new HighLevelModule(mongo)
post.execute("this is the post")


let post1: HighLevelModule = new HighLevelModule(mongo)
post1.execute("This data is set")
