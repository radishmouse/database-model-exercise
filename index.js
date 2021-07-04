require('dotenv').config();


const express = require('express');
const app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Blog = require('./models/Blog');


const page = require('./views/page');
const userList = require('./views/userList');

app.get('/', (req, res) => {
  const thePage = page('hey there');
  res.send(thePage);
});


app.get('/users', (req, res) => {
  Blog.Users.showAllUsers()
    .then(allUsers => {
      const usersUL = userList(allUsers);
      const thePage = page(usersUL)
      res.send(thePage);
    })
  // res.send('hellooooo express');
});

app.get('/users/:id([0-9]+)', (req, res) => {
  console.log(req.params.id);
  Blog.Users.getById(req.params.id)
    .then(theUser => {
      res.send(theUser.name);
    })

})

app.post('/users', (req, res) => {
  console.log(req.body);
  Blog.Users.addAUser(req.body.name)
    .then(() => {
      res.send('got it');
    })
})







app.listen(3000, () => {
  console.log('Your express app is ready...');
});





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
// Blog.Users.showAllUsers()
//   .then(allUsers => {
//     console.table(allUsers)
//   })
//UPDATE NAME OF BELOW USER
// const ed = new Blog.Users(10, 'Edward Whelan');
// ed.updateName('Frank');
// ed.deleteUser();

// Blog.Users.showAllBlogsOfUser(24)
//   .then(results => {
//     console.table(results);
//   })

// Blog.Blog.createBlog('How i like to live', 'evil evil evil', 3);
//Allow user to create blog
// Blog.Users.addAUser('This Big Guy')
//   .then(result => {
//     Blog.Blog.createBlog('This is a test', 'womp womp womp', result.id);
//     return result
//   })


// const discourse =  Blog.Blog(3);
// const aBlog = new Blog.Blog(1);
// discourse.showCommentsOnBlog()
//   .then(results => {
//     console.table(results);
//   })

// discourse.editContentsofPost('Fictional content here');
// aBlog.deleteABlog();
// const newComment = new Blog.Comment(1);
// Blog.Comment.createComment('I wish i was never born', 1, 1);
// Blog.Comment.getUsersComments(1);
// newComment.deleteComment();