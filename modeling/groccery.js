const pgp = require('pg-promise')();
const db = pgp ({
    host: 'localhost',
    port: 5432,
    database: 'groccery-list'
});

//CREATE
function add(name, quantity, completed){
    return db.result(`insert into gList(name, quantity, completed)
        values
            ($1, $2, $3)
        returning id
        `, [name, quantity, completed])
}

//RETRIEVE
function getAll(){
    return db.any('select * from gList');
}

function getById(id){
    return db.one(`select * from gList where id=$1`, [id])
        .catch(err => {
            return {
                name: 'No gList found.'
            };
        })
}

//UPDATE

function updateList(id, didComplete){
    return db.result(`update gList
        set completed=$2
    where id=$1`, [id, didComplete])
}
function markCompleted(id){
    return updateList(id, true);
}

function markPending(id){
    return updateList(id, false);
}

function updateName(id, name){
    return db.result(`update gList
        set name=$2
    where id=$1`, [id, name]);
}

function updateQuantity(name, quantity){
    return db.result(`update gList
        set quantity=$1
    where id=(select * from gList where name ilike $2)`, [quantity, name]);
}

//DELETE

function deleteByName(name){
    return db.result(`delete from gList where id=(select * from gList where name ilike $1)`);
}


module.exports = {
    add,
    getAll,
    getById,
    markCompleted,
    markPending,
    updateName,
    updateQuantity,
    deleteByName
};