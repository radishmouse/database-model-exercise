const Grocery = require("./models/Grocery");

Grocery.add("dog food", 1)
  .catch(err => {
    console.log(err);
  })
  .then(result => {
    console.log(result);
  });

Grocery.getAll().then(result => {
  console.log(result);
});

Grocery.getById(4).then(result => {
  console.log(result);
});

Grocery.updateName(6, "Tortillas").then(result => {
  console.log(result);
});

Grocery.deleteById(6).then(result => {
  console.log(result.rowCount);
});
