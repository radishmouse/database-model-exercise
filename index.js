const pgp = require('pg-promise');
const db = pgp({
    host: 'localhost', 
    port: '5432', 
    database: 'groceryitems'
});

function add(name, quantity) {
    return db.result(`insert into groceries (name, quantity)
        values
            ($1, $2)
        returning id
    `[name, quantity])
}