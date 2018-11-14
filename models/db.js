// ========================================
// Database Connection
// ========================================
const pgp = require("pg-promise")({
  query: e => {
    console.log("QUERY: ", e.query);
    if (e.params) {
      console.log("PARAMS:", e.params);
    }
  }
});
const db = pgp({
  host: "localhost",
  port: 5432,
  database: "grocery-list-db"
  // user: 'tada',
  // password: '1234'
});
// ========================================

module.exports = db;
