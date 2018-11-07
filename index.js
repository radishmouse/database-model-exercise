require('dotenv').config();

// const Item = require('./models/Item');
const User = require('./models/User')

// Item.add('poptarts', 5) 
//     .then(result => {
//         console.log(result);
//         console.log('added to the list')
//     })

// User.add('britney')
//     .then(result => {
//         console.log(result);
//     })

User.add('stephanie')
    .then(result => {
        console.log(result)
    })