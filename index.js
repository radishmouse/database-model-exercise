const Blog = require('./models/Blog');

Blog.showAllBlogs()
  .then(result => {
    console.log(result);
  })

Blog.showAllComments()
  .then(result => {
    console.log(result);
  })

// Blog.addABlog('How i went to the store', 'alsdlkasjdkjads', 2);
// Blog.addAUser('Edward Whelan');

