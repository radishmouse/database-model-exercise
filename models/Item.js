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
    
    static getAll() {
        return db.any(`
        select * from groceryitems
        `).then(itemArray => {
        const instanceArray = itemArray.map(itemObj => {
            const i = new Item(itemObj.id, itemObj.name);
            return i;
        });
        return instanceArray;
    })
    
    
}
    static getById(id) {
        return db.one(`select * from groceryitems where id= $1`, [id])
        .then(result => {
            const i = new Item(result.id, result.name);
            return i;
        })
        .catch(err => {
            return 'no groceries for you!';
        });
            
    }
    
    // ===================================
    // UPDATE
    updateName(name){
        return db.one(`
        update groceryitems
            set name=$2
        where id = $1
        `, [this.id, name]);
    }
    
    assigntoUser(itemId, userId) {
        this.id = itemId;
        return db.result(`
        update groceryitems
            set user_id = $2
        where id=$1
        `, [this.id, userId])

    }

    updatePurchased() {
        return db.result(`
        update groceryitems
            set purchased = $2
        where id = $1
        `, [this.id, true]);
    }
    
    // ===================================
    // DELETE

    static deleteById(id){
        return db.result(`delete from groceryitems where id=$1
        `, [id])
    }
    
}
module.exports = Item;