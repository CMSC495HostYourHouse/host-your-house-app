const bcrypt = require('bcryptjs') //used for encrypting the password
const jwt = require("jsonwebtoken");
const keys = require("../config/keys") //secret keys for things
const express = require("express");

const userEndpoints = express.Router(); //instance of express router that takes control of requests starting with /users
const databaseConnection = require("../conn"); // This will help us connect to the database
const ObjectId = require("mongodb").ObjectId; // This help convert the id from string to ObjectId for the _id.

// This section will help you get a list of all the users.
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

// This section will help you get a single user by id
userEndpoints.route("/users/:id").get(function (req, res) {
  let db_connect = databaseConnection.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
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

// Endpoint to login as a particular user.
userEndpoints.route("/login").post(function (req, response) {
  let db_connect = databaseConnection.getDb();
  let myobj = {
    email: req.body.email,
  };

  db_connect.collection("records").findOne(myobj, function (err, user) {
    if (err) return response.status(400).json(err);
    if (!user) {
      return response.status(400).json({error: 'User Not Found!'});
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const payload = {id: user.email, name: user.name};
        jwt.sign(payload, keys.secretOrKey, {
          expiresIn: 1440
        },
          (err, token) => {
            response.json({
              success:true,
              token: "Bearer " + token
            });
          });
      } else {
        return response.status(400).json({error: 'Incorrect Password!'});
      }
    }
  });
});

// This section will help you update a record by id.
userEndpoints.route("/update/:id").post(function (req, response) {
  let db_connect = databaseConnection.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
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
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    response.json(obj);
  });
});

module.exports = userEndpoints;
