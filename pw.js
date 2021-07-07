const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
let hash = bcrypt.hashSync('motherlover', salt);
console.log(hash);

const didMatch = bcrypt.compareSync('motherlover', hash);

if (didMatch) {
    console.log('Woo');
} else {
    console.log('sad day');
}