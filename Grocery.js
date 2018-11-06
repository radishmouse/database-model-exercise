const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'grocery-app-db'
});

// create
function addGroceryItem(name, quantity) {
    return db.any(`insert into groceryitems (name, quantity) values ($1, $2) returning id`, [name, quantity])
}

// retrieve
function getAllGroceries() {
    return db.any(`select * from groceryitems`);
}

function getItemByID(id) {
    return db.any(`select * from groceryitems where id = $1`, [id])
        .catch(err => {
            return {
                name: 'Item not found. Please try again.'
            };
        })
}

// update
function updateItem(id, name) {
    return db.result(`update groceryitems set name = $2 where id = $1`, [id, name]);
}

// delete
function removeItem(id) {
    return db.result(`delete from groceryitems where id = $1`, [id])
}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

module.exports = {
    addGroceryItem,
    getAllGroceries,
    getItemByID,
    updateItem,
    removeItem,
};