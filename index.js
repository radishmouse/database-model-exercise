const Items = require('./models/Items');

Items.addRow('bananas', 6)
  .then(result => {
    console.log(result);
  })
Items.addRow('ketchup', 30)
  .then(result => {
    console.log(result);
  })
Items.addRow('ranch', 1)
  .then(result => {
    console.log(result);
  })
Items.addRow('fancy feast', 5)
  .then(result => {
    console.log(result);
  })
Items.addRow('salad', 1)
  .then(result => {
    console.log(result);
  })

Items.updateName(3, 'Hidden Valley Ranch')
  .then(result => {
    console.log(result)
  });

Items.updateQuantity(3, 50)
  .then(result => {
    console.log(result)
  });

Items.getById(5)
  .then(result => {
    console.log(result)
  });

Items.removeById(5)
  .then(result => {
    console.log(result)
  });
Items.getAll()
  .then(result => {
    console.log(result)
  });