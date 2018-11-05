const pgp = require("pg-promise")();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'groceries-db'
});


// CREATE
function addRow(name, quantity) {
  return db.one(`insert into items (name, quantity)
    values
      ($1, $2)
    returning id`,
    [name, quantity])
}

// RETRIEVE
function getAll() {
  return db.any(`select * from items`)
}

function getById(id) {
  return db.one(`select * from items where id=$1`, [id])
  // .catch(err => {
  //   return {
  //     name: `No items with that id`
  //   }
  // })
}

// UPDATE
function updateName(id, name) {
  return db.result(`update items set name= $2 where id=$1`, [id, name])
}

function updateQuantity(id, quantity) {
  return db.result(`update items set quantity =$2 where id=$1`, [id, quantity])
}

// DELETE
function removeById(id) {
  return db.result(`delete from items where id=$1`, [id])
}

module.exports = {
  addRow,
  getAll,
  getById,
  updateName,
  updateQuantity,
  removeById
}