class User{
  constructor(name: string, email: string) {}
}


class UserAuthentication {
  constructor(user: User) { }
  authenticate(password: string) {
    //Implement  the logic here
  }
}


class BlogPost {
  title: string
  content: string
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Method realted to create the  post
  createPost() {
    //Implment here
  }
  updatePost() {
    //Implemet  here
  }

  deletePost() {
    // Implement here
  }

  
}
class BlogPostDisplay{
  constructor(public blogpost: BlogPost) { }
  //Method realted to post display
  displayHTML() {
    return `<h1>${this.blogpost.title}</h1> <p>${this.blogpost.content}</p>`
  }
}
