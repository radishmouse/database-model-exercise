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
Blog.Users.addAUser('Edward Whelan');
// Blog.addAComment('It stinks!', 1, 1);
// Blog.changeBlogContents('This is the best!', 1)
//   .then(result => {
//     console.log(result);
//   })

// Blog.deleteComment(8)
//   .then(result => {
//     console.log(result);
//   })

Blog.showAllOfUsersBlog(1)
  .then(results => {
    console.log(results);
  })

Blog.showBlogPlusComments(3)
  .then(results => {
    console.log(results);
  })