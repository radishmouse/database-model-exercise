require('dotenv').config();

const Blog = require('./models/Blog');

// Blog.showAllBlogs()
//   .then(result => {
//     console.log(result);
//   })

// Blog.showAllComments()
//   .then(result => {
//     console.log(result);
//   })

// Blog.addABlog('How i went to the store', 'alsdlkasjdkjads', 2);
// Blog.Users.addAUser('Edward Whelan');
// Blog.addAComment('It stinks!', 1, 1);
// Blog.changeBlogContents('This is the best!', 1)
//   .then(result => {
//     console.log(result);
//   })

// Blog.deleteComment(8)
//   .then(result => {
//     console.log(result);
//   })

// Blog.showAllOfUsersBlog(1)
//   .then(results => {
//     console.log(results);
//   })

// Blog.showBlogPlusComments(3)
//   .then(results => {
//     console.log(results);
//   })


// CLASS TESTS 

// Blog.Users.addAUser('Edward Whelan');
Blog.Users.showAllUsers()
  .then(allUsers => {
    console.table(allUsers)
  })
//UPDATE NAME OF BELOW USER
// const ed = new Blog.Users(10, 'Edward Whelan');
// ed.updateName('Frank');
// ed.deleteUser();

Blog.Users.showAllBlogsOfUser(24)
  .then(results => {
    console.table(results);
  })

// Blog.Blog.createBlog('How i like to live', 'evil evil evil', 3);
//Allow user to create blog
Blog.Users.addAUser('This Big Guy')
  .then(result => {
    Blog.Blog.createBlog('This is a test', 'womp womp womp', result.id);
    return result
  })


// const discourse =  Blog.Blog(3);
// const aBlog = new Blog.Blog(1);
// discourse.showCommentsOnBlog()
//   .then(results => {
//     console.table(results);
//   })

// discourse.editContentsofPost('Fictional content here');
// aBlog.deleteABlog();