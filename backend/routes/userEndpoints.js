const bcrypt = require('bcryptjs') //used for encrypting the password

const express = require("express");
const userEndpoints = express.Router(); //instance of express router that takes control of requests starting with /users
const databaseConnection = require("../conn"); // This will help us connect to the database
const ObjectId = require("mongodb").ObjectId; // This help convert the id from string to ObjectId for the _id.

// This section will help you get a list of all the records.
userEndpoints.route("/users").get(function (req, res) {
  let db_connect = databaseConnection.getDb("users");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
userEndpoints.route("/users/:id").get(function (req, res) {
  let db_connect = databaseConnection.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
userEndpoints.route("/users/add").post(function (req, response) {
  let db_connect = databaseConnection.getDb();
  let myobj = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
userEndpoints.route("/update/:id").post(function (req, response) {
  let db_connect = databaseConnection.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      isAdmin: req.body.isAdmin,
    },
  }
});

// This section will help you delete a record
userEndpoints.route("/:id").delete((req, response) => {
  let db_connect = databaseConnection.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    response.json(obj);
  });
});

module.exports = userEndpoints;
