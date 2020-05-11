// Import MySQL connection.
var connection = require("../config/connection.js");


// object for all SQL statement functions
var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  insertOne: function (tableName, cols, vals, cb) {
    var queryString = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}');`;


    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },


  updateOne: function (id, cb) {
    var queryString = `UPDATE burgers SET devoured='1' WHERE ${id}`;

    connection.query(queryString, [id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;