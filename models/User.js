const db = require('./db');

class User {
    constructor(id, name) {
    this.id= id;
    this.name=id;
}
// ===================================
// CREATE
static add(name) {
    return db.one(`
        insert into users
            (name)
        values
            ($1)
        returning id
        `, [name])
        .then(data => {
            const u = new User(data.id, name);
            return u;
        })
}




// ===================================
// RETRIEVE





// ===================================
// UPDATE



// ===================================
// DELETE

}
module.exports = User