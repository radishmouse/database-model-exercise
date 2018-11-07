const db = require('./db');

class User {
    constructor(id, name) {
    this.id= id;
    this.name=id;
}
// ===================================
// CREATE
add(name) {
    return db.one(`
        insert into users
            (name)
        values
            ($1)
        returning id
        `, [name])
}




// ===================================
// RETRIEVE





// ===================================
// UPDATE



// ===================================
// DELETE

}
module.exports = User