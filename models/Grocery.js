const db = require("./db");

class Grocery {
  constructor(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  // CREATE
  static add(name, quantity) {
    return db
      .one(
        `insert into groceryitems (name, quantity)
        values
          ($1, $2)
            returning id`,
        [name, quantity]
      )
      .then(item => {
        console.log(item);
        const added = new Grocery(item.id, name, quantity);
        return added;
      })
      .then(result => {
        console.log(result);
      });
  }
  // RETRIEVE
  static getAll() {
    return db.any("select * from groceryitems").then(allItems => {
      console.log(allItems);
    });
  }
  static getById(id) {
    return db
      .one(`select * from groceryitems where id = $1`, [id])
      .catch(err => {
        console.log("no go");
        return {
          name: "no grocery item found."
        };
      })
      .then(byId => {
        console.log(byId);
      });
  }
  // UPDATE
  updateName(id, name) {
    return db
      .result(
        `update groceryitems
      set name=$2 where id=$1`,
        [id, name]
      )
      .then(changedName => {
        console.log(changedName);
      });
  }

  // DELETE
  static deleteById(id) {
    return db
      .result(`delete from groceryitems where id = $1`, [id])
      .then(noMore => {
        console.log(noMore);
      });
  }
}
// CREATE;
// function add(name, quantity) {
//   return db.one(
//     `insert into groceryitems (name, quantity)
//         values
//             ($1, $2)
//             returning id
//             `,
//     [name, quantity]
//   );
// }

// RETRIEVE;
// function getAll() {
//   return db.any("select * from groceryitems");
// }

// function getById(id) {
//   return db.one(`select * from groceryitems where id = $1`, [id]).catch(err => {
//     // console.log("no go");
//     return {
//       name: "no grocery item found."
//     };
//   });
// }

// UPDATE;

// function updateName(id, name) {
//   return db.result(
//     `update groceryitems
//     set name=$2 where id=$1`,
//     [id, name]
//   );
// }

// DELETE;
// function deleteById(id) {
//   return db.result(`delete from groceryitems where id = $1`, [id]);
// }

module.exports = Grocery;
// {
//   add,
//   deleteById,
//   getAll,
//   getById,
//   updateName
// };
