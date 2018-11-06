const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'grocery-db'
});

// =========================
// CRUD
// =========================


// CREATE
function addItem(name, quantity, completed){
    return db.result(`
        INSERT INTO grocery
            (name, quantity, completed)
        VALUES
            ($1, $2, $3)
    `, [name, quantity, completed]
    );
};


// RETRIEVE
function getAll(){
    return db.any(`
        SELECT * FROM grocery
    `);
};


// UPDATE
function updateCompleted(id, status){
    return db.result(`
        UPDATE grocery
	        SET completed = $2
	        WHERE id = $1
    `, [id, status]
    );
};


// DELETE
function deleteItem(id){
    return db.result(`
        DELETE FROM grocery
	        WHERE id = $1
    `, [id]
    );
};

// export to module
module.exports = {
    addItem,
    getAll,
    updateCompleted,
    deleteItem
};