// const Blog = require('./models/Blog');
// 
// CREATING AUTHOR INSERTS
// 
Blog.addAuthor('Jack Kennedy')
  .then(result => {
    console.log(result)
  })

Blog.addAuthor('Jane Doe')
  .then(result => {
    console.log(result)
  })

Blog.addAuthor('Chravis The Man ')
  .then(result => {
    console.log(result)
  })
// 
// CREATING BLOG POST INSERTS
// 
Blog.addPost('I got shot', 1)
  .then(result => {
    console.log(result)
  })

Blog.addPost('I like money', 1)
  .then(result => {
    console.log(result)
  })

Blog.addPost(`I don't know who I am `, 2)
  .then(result => {
    console.log(result)
  })

Blog.addPost(`I am unknown`, 2)
  .then(result => {
    console.log(result)
  })

Blog.addPost(`I am the man `, 3)
  .then(result => {
    console.log(result)
  })
// 
// GET ALL
Blog.getAllAuthors()
  .then(result => {
    console.log(result)
  })

Blog.getAllPosts()
  .then(result => {
    console.log(result)
  })
// 
// GET BY ID
Blog.getAuthorById(2)
  .then(result => {
    console.log(result)
  })

Blog.getPostById(4)
  .then(result => {
    console.log(result)
  })

// GET POST BY AUTHOR
Blog.getPostByAuthor(2)
  .then(result => {
    console.log(result)
  })