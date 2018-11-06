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
//show users
function showAllUsers() {
  return db.any('select * from users')
}
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
function deleteComment(id) {
  return db.result(`delete from comments where id=$1`, [id])
}

//functions to export go below
module.exports = {
  showAllBlogs,
  showAllUsers,
  showAllComments,
  addABlog,
  addAUser,
  addAComment,
  changeBlogContents,
  deleteComment,
  showAllOfUsersBlog,
  showBlogPlusComments,
}