const Item = require('./models/Item');

Item.add('poptarts', 5) 
    .then(result => {
        console.log(result);
        console.log('added to the list')
    })