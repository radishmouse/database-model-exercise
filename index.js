// const pgp = require('pg-promise')();
// const db = pgp({
//     host: 'localhost',
//     port: 5432,
//     database: 'grocery-db'
// });

// =========================
// link
// =========================

const grocery = require('./model/Grocery');

// =========================
// CRUD
// =========================


// CREATE
// function addItem(name, quantity, completed){
//     return db.result(`
//         INSERT INTO grocery
//             (name, quantity, completed)
//         VALUES
//             ($1, $2, $3)
//     `, [name, quantity, completed]
//     );
// };

grocery.addItem('banana', 88, true)
    .catch((err) =>{
        console.log(err);
    })
    .then((addObject) =>{
        console.log(addObject);
        console.log(`Item added -- CREATE`);
    })


// RETRIEVE
// function getAll(){
//     return db.any(`
//         SELECT * FROM grocery
//     `);
// };

grocery.getAll()
    .then((resultArray) =>{
        console.log (resultArray);
        console.log(`gets all the list of groceries -- RETRIEVE`);
    })


// UPDATE
// function updateCompleted(id, status){
//     return db.result(`
//         UPDATE grocery
// 	        SET completed = $2
// 	        WHERE id = $1
//     `, [id, status]
//     );
// };

grocery.updateCompleted(3, true)
    .then((updateObject) =>{
        console.log(updateObject);
        console.log(`update complete -- UPDATE`);
    })


// DELETE
// function deleteItem(id){
//     return db.result(`
//         DELETE FROM grocery
// 	        WHERE id = $1
//     `, [id]
//     );
// };

grocery.deleteItem(4)
    .then((deleteObject) =>{
        console.log(deleteObject);
        console.log(`Item deleted -- DELETE`);
    })
