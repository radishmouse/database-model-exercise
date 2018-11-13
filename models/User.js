const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
    constructor(id, name, username, pwhash) {
    this.id= id;
    this.name= name;
    this.username = username;
    this.pwhash = pwhash;
  
}
// ===================================
// CREATE
static add(name, username, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return db.one(`
        insert into users
            (name, username, pwhash)
        values
            ($1, $2, $3)
        returning id
        `, [name, username, hash])
        .then(data => {
            const u = new User(data.id, name, username);
            return u;
        })
    } 



// ===================================
// RETRIEVE
static getAll() {
    return db.any(`
        select * from users order by id
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

static getByUsername(username) {
    return db.one(`
        select * from users
        where username ilike
        '%$1:raw%'
    `, [username]).then(result => {
        return new User(result.id,
        result.name,
        result.username,
        result.pwhash);
    })
}

// ===================================
// UPDATE

updateName(name) {
    this.name = name;
    return db.result(`
        update users
            set name = $2
        where id=$1
        `, [this.id, name])
    .then(result => {
        return result.rowCount === 1;
        // if (result.rowCount === 1) {
            // return true;
        // } else {
        //     return false;
        // }
    });
}



// ===================================
// DELETE

delete(){
    return db.result(`
    delete from users
    where id = $1
    `, [this.id]);
}

static deleteById(id) {
    return db.result(`
    delete from users
    where id = $1
    `, [id]);
}

}
module.exports = User