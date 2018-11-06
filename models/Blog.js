const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'blogblogblog-db'
});

// CREATE
// make a blog post
function addABlog(title, post, author_id) {
  return db.one(`insert into blogs(title, post, author_id) values ($1, $2, $3)
  returning id`, [title, post, author_id])
}
//make a user
function addAUser(name) {
  return db.one(`insert into users(name) values ($1)
  returning id`, [name])
}
//make a comment

//RETRIEVE
//show all blogs/users
function showAllBlogs() {
  return db.any('select * from blogs')
}

function showAllUsers() {
  return db.any('select * from users')
}

function showAllComments() {
  return db.any('select * from comments')
}
// Show blog with name
//UPDATE

//DELETE

//functions to export go below
module.exports = {
  showAllBlogs,
  showAllUsers,
  showAllComments,
  addABlog,
  addAUser,
}