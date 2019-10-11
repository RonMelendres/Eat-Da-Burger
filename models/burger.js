var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            // selectAll
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        console.log("cols", cols);
        console.log("vals", vals);

        orm.create("burgers", cols, vals, function(res) {
            // insertOne
            cb(res);
        
        });

    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            // updateOne
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;