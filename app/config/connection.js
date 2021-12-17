const MongoClient = require( 'mongodb' ).MongoClient;
//const url = "mongodb://localhost:27017/dump?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const url = "mongodb+srv://admin:SzYHCHkAoQCiOkVh@cluster0.aowla.mongodb.net/test?retryWrites=true";


var _db;

module.exports = {

  connectToServer: function( callback ) {
    //mongoose.connect("paste db link", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    //{ useUnifiedTopology: true } 

    const connect = MongoClient.connect( url, { useUnifiedTopology: true },  function( err, client ) {
        if (err == null) {
            _db  = client.db('Dump');
            return callback( 'Database conectada MongoDB' );
        } else {
           _db.createCollection("DqcModel", function(err, res) {
            if (err) throw err;
            console.log("DataBase criada!");
            _db.close();
          });
          _db.createCollection("Dqc84", function(err, res) {
            if (err) throw err;
            console.log("DataBase criada!");
            _db.close();
          });
          _db.createCollection("Dqc841", function(err, res) {
            if (err) throw err;
            console.log("DataBase criada!");
            _db.close();
          });

            return callback( err );
        }
    } );

    console.log (connect)
  },

  getDb: function() {
    return _db;
  }

  
};
