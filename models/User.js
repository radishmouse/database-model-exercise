const db = require('./db');

class User {
    constructor(id, name) {
    this.id= id;
    this.name= name;
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
static getAll() {
    return db.any(`
        select * from users
        `).then(userArray => {
            const instanceArray = userArray.map(userObj => {
                const u = new User(userObj.id, userObj.name);
                return u;
            });
            return instanceArray;
        })
}

static getById(id) {
    return db.one(`
    select * from users where id=$1`, [id])
    .then(result => {
        const u = new User(result.id, result.name);
        return u;
    })
}


// ===================================
// UPDATE



// ===================================
// DELETE

}
module.exports = User