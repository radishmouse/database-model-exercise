require('dotenv').config();
const User = require('./models/User')
const Item = require('./models/Item');
const Store = require('./models/Store');
// const bcrypt = require('bcrypt');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// session variables
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const db = require('./models/db');
app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    secret: 'abc123vhorihanwealkivoeiawehiofghssviohliuyfyvfsdtl',
    saveUninitialized: false
}));

app.use(express.static('public'));

const page = require('./views/page');
const userList = require('./views/userList');
const groceryList = require('./views/groceryList');
const userForm = require('./views/userForm');
const registrationForm = require('./views/registrationForm');
const loginForm = require('./views/loginForm');






// configure body-parser to read data sent by HTML form tags
app.use(bodyParser.urlencoded({ extended: false }));
// configure body-parser to read JSON bodies
app.use(bodyParser.json());


app.get('/', (req, res) => {
    const thePage = page('hey there')
    res.send(thePage);
});

// Listen for a GET request for User
app.get('/users', (req, res) => {
    User.getAll()
    .then(allUsers => {
        const usersUL = userList(allUsers);
        const thePage = page(usersUL);

        res.send(thePage);
    })
    // res.send('Wazzuuuuuuup Express');
});

// Listen for POST request
// Create a new user
app.post('/users', (req, res) => {
    // console.log(req.body);
    // res.send('ok')
    const newUserName= req.body.name
    User.add(newUserName)
        .then(theUser => {
            res.send(theUser)
        })
})
// Create a new grocery item
app.post('/groceryitems', (req, res) => {
    newGroceryItem = req.body.name
    Item.add(newGroceryItem)
        .then(theItem => {
            res.send(theItem)
        })
    })

// ===================================================
// Retrieve all groceries for a user

// app.get('/users/:id([0-9]+)', (req, res) => {
//     User.getById(req.params.id)
//         .then(theUser => {
//             theUser.getGroceries
//         })
// };

// ====================================================
// User Registration
// ====================================================

app.get('/register', (req,res) => {
    // send them the signup form
    const theForm = registrationForm();
    const thePage = page(theForm);
    res.send(thePage);
});


app.post('/register', (req, res) => {
// process the signup form
// grab the values out of req.body
    const newName = req.body.name;
    const newUserName = req.body.username;
    const newPassword = req.body.password;

// call user.add
    User.add(newName, newUserName, newPassword)
        .then(newUser => {
            req.session.user = newUser;
            res.redirect('/welcome');
        });
});

app.get('/welcome', (req, res) => {
    // send them to welcome page
    let visitorName = 'Person of the World';
    if (req.session.user) {
        visitorName = req.session.user.username;
    }
    res.send(page(`<h1>Hey ${visitorName}</h1>`, 
    req.session.user));
})

// ====================================================
// User Login
// ====================================================
app.get('/login', (req, res) => {
    // send the login form
    const theForm = loginForm();
    const thePage = page(theForm);
    
    res.send(thePage);

    
})

app.post('/login', (req, res) => {
    // process the login form
    // 1. grab the values from form
    const theUsername = 
    req.body.username;
    const thePassword = 
    req.body.password;

    // 2. find a user whose name matches `the Username`
    User.getByUsername(theUsername)
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
        .then(theUser => {
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                res.redirect('/welcome');
            } else {
               res.redirect('/login'); 
            }
        })
});


// ===============================================
// Logout
app.post('/logout', (req, res) => {
    // 1. destroy the session
    req.session.destroy();
    // 2. redirect them to the home page
    res.redirect('/');
});









app.post('/users/:id([0-9]+)/edit', (req, res) =>{
    const id = req.params.id;
    const newName = req.body.name;
    console.log(id)

    User.getById(id)
        .then(theUser => {
            theUser.updateName(newName)
                .then(didUpdate => {
                    if (didUpdate) {
                    // res.send('yea you did');
                        res.redirect(`/users/`);
                    } else {
                        res.send('poopity scoop');
                }
            });
        });
});

// Match the string "/user/" followed by one or more digits
app.get('/users/:id([0-9]+)/edit', (req, res) => {
    // console.log(req.params.id);
    User.getById(req.params.id)
        .then(theUser => {
            res.send(page(userForm(theUser)));
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