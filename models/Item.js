const db = require('./db');


class Item {
// ===================================
// CREATE
add(name, quantity) {
    return db.one(`
        insert into groceryitems
            (name, quantity)
        values
            ($1, $2)
        returning id
        `, [name, quantity])
}

// ===================================
// RETRIEVE





// ===================================
// UPDATE



// ===================================
// DELETE

}
module.exports = {
    add
}