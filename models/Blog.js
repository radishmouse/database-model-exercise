pgp = require("pg-promise")();
db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'blog-3db'
});

// CREATE AUTHORS

function addAuthor(name) {
  return db.one(`insert into authors(name)
    values
      ($1)
      returning id`,
    [name])
}

// CREATE POSTS

function addPost(title, author_id) {
  return db.one(`insert into posts(title, author_id)
    values
      ($1, $2)
      returning id`,
    [title, author_id])
}

// RETRIEVE AUTHORS

function getAllAuthors() {
  return db.any(`select * from authors`)
}

function getAuthorById(id) {
  return db.one(`select * from authors where id =$1`, [id])
}

// RETRIEVE POSTS

function getAllPosts() {
  return db.any(`select * from posts`)
}

function getPostById(id) {
  return db.one(`select * from posts where id=$1`, [id])
}

function getPostByAuthor(author_id) {
  return db.one(`select 
                  p.title, p.id
                from posts p 
                  inner join authors a
                    on $1 = a.id
                where p.author_id = a.id`,
    [author_id])
}

function updateAuthorName(id, name) {
  return db.result(`update authors set name = $2 where id = $1`, [id, name])
}

function updatePostTitle(id, title) {
  return db.result(`update posts set title = $2 where id = $1`, [id, title])
}

function deleteById(table, id) {
  return db.result(`delete from $1 where id=$2`, [table, id])
}

module.exports = {
  addAuthor,
  addPost,
  getAllAuthors,
  getAuthorById,
  getAllPosts,
  getPostById,
  getPostByAuthor,
  updateAuthorName,
  updatePostTitle,
  deleteById
}