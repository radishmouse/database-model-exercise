require('dotenv').config();
const User = require('./models/User')

const express = require('express');
const app = express();

// Listen for a GET request
app.get('/users', (req, res) => {
    User.getAll()
    .then(allUsers => {
        
        res.send(allUsers);
    })
    // res.send('Wazzuuuuuuup Express');
});
// Match the string "/user/" followed by one or more digits
app.get('/users/:id([0-9]+)', (req, res) => {
    console.log(req.params.id);
    User.getById(req.params.id)
        .then(theUser => {
            res.send(theUser);
        })
        .catch(err => {
            res.send({
                message: `no soup for you`
            });
        })
});

app.get('/users/register', (req, res) => {
    res.send('you are on the registration page');
})
app.listen(3000, () => {
    console.log('Your express app is ready!')
});







// const Item = require('./models/Item');

// const justin = new User(1, 'justin');

// const firstItem = new Item(1, 'la croix');
// firstItem.updateName('pamplemousse');

// firstItem.assigntoUser(2, 6);
// Item.deleteById(6)
//     .then(result => {
//         console.log(result)
//     });

// Item.getAll()
//     .then(result => {
//         console.log(result)
//     });

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