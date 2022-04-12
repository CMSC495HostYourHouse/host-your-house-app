const { MongoClient } = require("mongodb");
const database = 'mongodb+srv://dbuser:5VSyuHJUeXoTBqDG@hostyourhouse.unjhv.mongodb.net/HostYourHouse?retryWrites=true&w=majority';
const client = new MongoClient(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("HostYourHouse");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};

export default connectToServer