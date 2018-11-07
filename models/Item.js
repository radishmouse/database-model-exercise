const db = require('./db');

class Item {
    constructor(id, name) {
        this.id= id;
        this.name= name;
    }
    
    // ===================================
    // CREATE
    static add(name, quantity) {
        return db.one(`
        insert into groceryitems
            (name, quantity)
        values
            ($1, $2)
        returning id
        `, [name, quantity])
        .then(data => {
            const i = new Item(data.id, name);
            return i;
         });
    }
    
    // ===================================
    // RETRIEVE
    
    
    
    
    
    // ===================================
    // UPDATE
    
    
    
    // ===================================
    // DELETE
    
}

module.exports = Item;