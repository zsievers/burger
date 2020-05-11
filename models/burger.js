// requires orm 
// contain all methods to modify orm in use with the burgers_db

var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols,vals,cb) {
        orm.insertOne("burgers", "burger_name", cols ,vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, id, cb) {
        orm.updateOne(objColVals, id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger