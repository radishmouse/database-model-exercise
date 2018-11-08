require('dotenv').config();
const User = require('./models/User')
const Item = require('./models/Item');
const Store = require('./models/Store');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// configure body-parser to read data sent by HTML form tags
app.use(bodyParser.urlencoded({ extended: false }));
// configure body-parser to read JSON bodies
app.use(bodyParser.json());




// Listen for a GET request for User
app.get('/users', (req, res) => {
    User.getAll()
    .then(allUsers => {
        
        res.send(allUsers);
    })
    // res.send('Wazzuuuuuuup Express');
});

// Listen for POST request
app.post('/users', (req, res) => {
    // console.log(req.body);
    // res.send('ok')
    const newUserName= req.body.name
    User.add(newUserName)
        .then(theUser => {
            res.send(theUser)
        })
})


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


// Listen to GET request for grocery Item

app.get('/groceryitems', (req, res) => {
    Item.getAll()
    .then(allItems => {
        res.send(allItems);
    })
});

app.get('/groceryitems/:id([0-9]+)', (req, res) => {
    console.log(req.params.id);
    Item.getById(req.params.id)
        .then(theItem => {
            res.send(theItem);
        })
        .catch(err => {
            res.send({
                message: `no groceries for you! `
            });
        })
});

app.get('/stores', (req, res) => {
    Store.getAll()
    .then(allStores => {
        res.send(allStores);
    })
    
});

app.get('/stores/:id([0-9]+)', (req, res) =>{
    console.log(req.params.id);
    Store.getById(req.params.id)
        .then(theStore => {
            res.send(theStore);
        })
        .catch(err => {
            res.send({
                message: `that store does not exist`
            });
        })
});


app.listen(3000, () => {
    console.log('Your express app is ready!')
});



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