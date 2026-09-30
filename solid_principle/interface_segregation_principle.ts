

interface Printer{
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine{
fax(document: Document): void;
}



class MultiFunctionPrinter implements Printer ,Scanner ,FaxMachine {
  print(document: Document): void {
  console.log("the machine is printing")
  }
  scan(document: Document): void {
    console.log("the machine is scanning")
  }
  fax(document: Document): void {
    console.log("the machine is sending fax")
  }

}

class SimplePrinter implements Printer{
    print(document: Document): void {
  console.log("the machine is printing")
  }
}


//creating posts
//commenting posts
// sharing post
//admin user -3
//Regualar user -2


interface Post{
  title: string
  content:string
}
interface Comments{
  title: string
  content:string
}

interface PostCreator {
  createPost(post: Post): void;

}

interface CommentCreator {
  commentOnPost(comment: Comments): void;
}

interface PostSharer {
  sharePost(post: Post): void;
}



class AdminUser implements PostCreator, CommentCreator, PostSharer{
  createPost(post: Post): void {
   console.log("Creating post")
  }
  commentOnPost(comment: Comments): void {
    throw new Error("Method not implemented.");
  }
  sharePost(post: Post): void {
    throw new Error("Method not implemented.");
  }

}

class RegularUser implements PostSharer, CommentCreator{
  sharePost(post: Post): void {
    throw new Error("Method not implemented.");
  }
  
  commentOnPost(comment: Comments): void {
    throw new Error("Method not implemented.");
  }

}
