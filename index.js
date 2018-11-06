const groceryItems = require('.models/groceryItems');

// example
// groceryItems.add('bread', 2)
//     .catch(err => {
//         console.log(err);
//     })
//     .then(result => {
//         console.log(result);
//     })


// example
// groceryItems.getAll()
//     .then(result => {
//         console.log(result);
//     })


// example
// groceryItems.getById(1) 
//     .then(result => {console.log(result); })


// example
// groceryItems.updateName(2, 'apples') 
//     .then(result => {
//         console.log(result);
//     })


// example
// groceryItems.markCompleted (2, 'apples')
//     .then(result => {
//         console.log(result);
//     })


// example

groceryItems.deleteById(1)
    .then(result => {
        console.log(result.rowCount);
    })