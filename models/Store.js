const db = require('./db');

class Store {
    constructor(id, name) {
        this.id= id;
        this.name= name;
    }
    
    
    // =============================
    // CREATE
    
    static add(name) {
        return db.one(`
        insert into stores
            (name)
        values
            ($1)
        returning id
        `, [name])
        .then(data => {
            const s = new Store(data.id, name);
            return s;
        })
    }
    
    
    // =============================
    // RETRIEVE
    
    static getAll() {
        return db.any(`
        select * from stores
        `).then(storeArray => {
            const instanceArray = storeArray.map(storeObj =>{
                const s = new Store(storeObj.id, storeObj.name);
                return s;
            })
            return instanceArray;
        })
    }
    
    static getById(id) {
        return db.one(`
        select * from stores where id=$1`, [id])
        .then(result => {
            const s = new Store (result.id, result.name);
            return s;
        })
    }
    
    // =============================
    // UPDATE
    
    
    
    
    // =============================
    // DELETE
}

module.exports = Store;