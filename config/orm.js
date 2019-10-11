var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    console.log("num", num);
    
    var arr = [];
    // for (start index; stop index; incremental value)
    for (var i = 0; i < num.length; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob.length) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexof(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        // console.log("table", table);
        // console.log("column of the table, should have", cols);
        // console.log("vals", vals);
        // console.log("return value of printQuestionMarks", printQuestionMarks(vals))
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, objColVals, condition, cb) {
        console.log("objToSql value", objToSql(objColVals));
        console.log("table", table);
        console.log("objColVals", objColVals);
        console.log("condition", condition);
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // delete: function (table, condition, cb) {
    //     var queryString = "DELETE FROM " + table;
    //     queryString += " WHERE ";
    //     queryString += condition;

    //     connection.query(queryString, function (err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //     });
    // }
};

module.exports = orm;