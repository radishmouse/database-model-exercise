const db = require('./db');

// declare a class named 'Users'
//============+++ USERS CLASS +++===================

class Users {
  //what properties should a user start off with
  //constructor is a method
  constructor(id, name) {
    //define properties that 
    //are already names of
    //the database columns
    this.id = id;
    this.name = name;
  }
  // ======== CREATE ===========
  //make a user
  static addAUser(name) {
    return db.one(`
        insert into users
        (name) 
        values ($1)
        returning id`, [name])
      .then(data => {
        const u = new Users(data.id, name);
        return u;
      });
  }
  // ======== RETRIEVE ===========
  //show users
  static showAllUsers() {
    return db.any('select * from users')
      .then(userArray => {
        const instanceArray = userArray.map(userObj => {
          const u = new Users(userObj.id, userObj.name);
          return u
        });
        return instanceArray;
      })
  }
  //get blogs from USER
  static showAllBlogsOfUser(id) {
    return db.any(`select
    name,
    b.id,
    b.title,
    b.post
    from users
      inner join
        blogs b 
        on b.author_id = users.id
    where users.id = $1`, [id])
  }

  // ======== UPDATE ===========
  updateName(name) {
    return db.result(`
    update users
    set name=$2
    where id=$1
    `, [this.id, name]);
  }
  // ======== DELETE ===========
  deleteUser() {
    return db.result(`delete from users where id=$1`
      , [this.id])
  }
}
//============+++ BLOG CLASS +++===================
class Blog {
  constructor(id, title, post) {
    this.id = id;
    this.title = title;
    this.post = post;
  }
  // ======== CREATE ===========
  //create a blog
  static createBlog(title, post, authorID) {
    return db.one(`insert into blogs(title, post, author_id) 
  values ($1, $2, $3)
  returning id`, [title, post, authorID])
      .then(result => {
        const b = new Blog(result.title, result.post, result.authorID)
        return b;
      })
  }
  // ======== RETRIEVE ==========
  //all comments attached to a blog
  showCommentsOnBlog() {
    return db.any(`select
title,
post,
c.comment
from blogs
  inner join
    comments c 
    on c.blog_id = blogs.id
where blogs.id = $1`, [this.id]
    )
  }

  // ======== UPDATE ===========
  editContentsofPost(post) {
    return db.one(
      `update blogs
         set post=$1 
         where id=$2`, [post, this.id])
  }

  // ======== DELETE ===========
  deleteABlog() {
    return db.result(`
  delete from
   blogs 
   where id=$1`,
      [this.id])
  }

}

class Comment {
  constructor(id, comment) {
    this.id = id;
    this.comment = comment;
  }
  // ======== CREATE ===========
  //create a comment
  static createComment(comment, commenter_id, blog_id) {
    return db.one(
      `insert into comments
      (comment, commenter_id, blog_id) 
      values ($1, $2, $3)
      returning id`, [comment, commenter_id, blog_id])
  }
  // ======== RETRIEVE ===========
  //retrieve all comments from a user
  static getUsersComments(commenter_id) {
    return db.any(`select
      u.name,
      comment
      from comments
        inner join
          users u 
          on u.id = commenter_id
      where u.id = $1`, [commenter_id]
    )
      .then(results => {
        console.table(results);
      })
  }

  // ======== UPDATE ===========
  editContentsOfComment(comment) {
    return db.one(
      `update comments
         set comment=$1 
         where id=$2`, [comment, this.id])
  }
  // ======== DELETE ===========
  deleteComment() {
    return db.result(`
  delete from
  comments where id=$1
  `, [this.id])
  }


}
// function doThing() {

// }
// CREATE
// make a blog post
function addABlog(title, post, author_id) {
  return db.one(`insert into blogs(title, post, author_id) values ($1, $2, $3)
  returning id`, [title, post, author_id])
}
// //make a user
// function addAUser(name) {
//   return db.one(`insert into users(name) values ($1)
//   returning id`, [name])
// }
//make a comment
function addAComment(comment, commenter_id, blog_id) {
  return db.one(`insert into comments(comment, commenter_id, blog_id) 
    values ($1, $2, $3)
    returning id`, [comment, commenter_id, blog_id])
}

//RETRIEVE
//show blogs
function showAllBlogs() {
  return db.any('select * from blogs')
}
// //show users
// function showAllUsers() {
//   return db.any('select * from users')
// }
//show comments
function showAllComments() {
  return db.any('select * from comments')
}
// Show blog with name
function showAllOfUsersBlog(user) {
  return db.any(`select
	 name,
	 b.title,
	 b.post
	 from users
	 	inner join
	 		blogs b 
	 		on b.author_id = users.id
	 where users.id = $1`, [user]
  )
}

function showBlogPlusComments(blog) {
  return db.any(`select
  title,
  post,
  c.comment
  from blogs
    inner join
      comments c 
      on c.blog_id = blogs.id
  where blogs.id = $1`, [blog]
  )
}

//UPDATE
// edit contents of a post
function changeBlogContents(post, id) {
  return db.result(`update blogs set post=$1 where id=$2`, [post, id])
}

//DELETE
// delete a comment from a post
// function deleteComment(id) {
//   return db.result(`delete from comments where id=$1`, [id])
// }

//functions to export go below
module.exports = {
  Users,
  Blog,
  Comment,
  showAllBlogs,
  // showAllUsers,
  showAllComments,
  addABlog,
  // addAUser,
  addAComment,
  changeBlogContents,
  // deleteComment,
  showAllOfUsersBlog,
  showBlogPlusComments,
}