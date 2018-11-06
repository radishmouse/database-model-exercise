const db = require("./db");

// CREATE
function add(name) {
  return db.one(
    `insert into groceryitems (name) 
        values 
            ($1)
            returning id
            `,
    [name]
  );
}

// RETRIEVE
function getAll() {
  return db.any("select * from groceryitems");
}

function getById(id) {
  return db.one(`select * from groceryitems where id = $1`, [id]).catch(err => {
    // console.log("no go");
    return {
      name: "no grocery item found."
    };
  });
}

// UPDATE

function updateName(id, name) {
  return db.result(
    `update groceryitems
    set name=$2 where id=$1`,
    [id, name]
  );
}

// DELETE
function deleteById(id) {
  return db.result(`delete from groceryitems where id = $1`, [id]);
}

module.exports = {
  add,
  deleteById,
  getAll,
  getById,
  updateName
};
