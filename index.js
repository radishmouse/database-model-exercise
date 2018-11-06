const Groceries = require('./models/Groceries');

Groceries.addToList('bananas', 5)
.catch(err => console.log(err))
.then(result => console.log(result));

Groceries.getItemById(1)
.then(result => console.log(result));

Groceries.getAllItems()
.then(result => console.log(result));

Groceries.resetQuantity(2, 15)
.then(result => console.log(result));

// This doesn't work and idk why
// Groceries.updateQuantity(5, 3)
// .then(result => console.log(result));

Groceries.removeItem(4)
.then(result => console.log(result));

// Calling it a second time to see if database updated correctly
Groceries.getAllItems()
.then(result => console.log(result));
