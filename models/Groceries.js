const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'groceries'
});

// db.one, db.any, db.result

// CREATE
function addToList(name, qty=1) {
  // something here
  return db.one(`insert into groceryitems
                (name, quantity)
                values
                ($1, $2)
                returning id`, [name, qty])
}

// RETRIEVE
function getItemById(id) {
  return db.one(`select * from groceryitems
                where id=$1`, [id])
            .catch(err => {
              return {name: "No item or id by that name"};
            });
}

function getAllItems() {
  return db.any('select * from groceryitems');
}

// UPDATE
function masterUpdate(id, qty) {
  return db.result(`update groceryitems
                    set quantity=$2
                    where id=$1`, [id, qty]);
}

//in-between function just for updating
function getCurrentQuantity(id) {
  const selectedArr = db.one(`select quantity from groceryitems
                              where id=$1`, [id]);
  return selectedArr;
}

function resetQuantity(id, qty=1) {
  return masterUpdate(id, qty)
}

function updateQuantity(id, qty) {
  const current_qty = getCurrentQuantity(id);
  current_qty.then(result => console.log(result));
  return masterUpdate(id, current_qty+qty);
}

// DELETE
function removeItem(id) {
  return db.result(`delete from groceryitems
                    where id=$1`, [id]);
}

module.exports = {
  addToList,
  getItemById,
  getAllItems,
  resetQuantity,
  updateQuantity,
  removeItem
}
