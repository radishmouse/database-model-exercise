require('dotenv').config();

const Item = require('./models/Item');
// const User = require('./models/User')

// const justin = new User(1, 'justin');

// const firstItem = new Item(1, 'la croix');
// firstItem.updateName('pamplemousse');

Item.getAll()
    .then(result => {
        console.log(result)
    });

// Item.getById(100)
//     .then(result => {
//         console.log(result)
//     });
// Item.add('fancy feast', 24)
//     .then(result => {
//         console.log(result)
//     });

// Item.add('poptarts', 5) 
//     .then(result => {
//         console.log(result);
//         console.log('added to the list')
//     })

// User.add('britney')
//     .then(result => {
//         console.log(result);
//     })

// User.add('stephanie')
//     .then(result => {
//         console.log(result)
//     })



// User.getById(5)
//     .then(result => {
//         console.log(result)});

// justin.updateName('sexyback');

// justin.delete()

// User.deleteById(7);

// User.getAll()
//     .then(result => {
//         console.log(result);
//     });