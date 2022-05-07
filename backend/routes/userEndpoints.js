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
    .collection("users")
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
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by email and return saved properties
userEndpoints.route("/users/saved/:email").get(function (req, res) {
  let db_connect = databaseConnection.getDb();
  let myquery = { email: req.params.email };
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result.saved);
    });
});

// This section will help you get a single user by email and return reserved properties
userEndpoints.route("/users/reserved/:email").get(function (req, res) {
  let db_connect = databaseConnection.getDb();
  let myquery = { email: req.params.email };
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result.reserved);
    });
});

// This section will help you create a new record.
userEndpoints.route("/users/register").post(function (req, response) {
  let db_connect = databaseConnection.getDb();
  let myUser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  db_connect.collection("users").insertOne(myUser, function (err, res) {
    if (err) {
      return response.status(400).json({error: err.message});
    }
    else {
      console.log(res);
      response.json(res);
    }
  });
});

// Endpoint to login as a particular user.
userEndpoints.route("/login").post(function (req, response) {
  let db_connect = databaseConnection.getDb();
  let myUser = {
    email: req.body.email,
  };

  db_connect.collection("users").findOne(myUser, function (err, user) {
    if (err) return response.status(400).json({error: err.message});
    if (!user._id) {
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
              token: "Bearer " + token,
              user: user
            });
          });
      } else {
        return response.status(400).json({error: 'Incorrect Password!'});
      }
    }
  });
});

// This section will help you update a record by id.
userEndpoints.route("/update").put(function (req, response) {
  let db_connect = databaseConnection.getDb();
  let newValues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zipcode,
      state: req.body.state,
    },
  }

  db_connect.collection('users').updateOne({email: req.body.email}, newValues, function (err, res) {
    if (err) return response.status(400).json({error: err.message});
    else {
      response.json(res);
    }
  })
});

// This section will help you delete a record
userEndpoints.route("/:id").delete((req, response) => {
  let db_connect = databaseConnection.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    response.json(obj);
  });
});

module.exports = userEndpoints;
