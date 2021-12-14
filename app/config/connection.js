const MongoClient = require( 'mongodb' ).MongoClient;
//const url = "mongodb://localhost:27017/dump?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const url = "mongodb+srv://admin:SzYHCHkAoQCiOkVh@cluster0.aowla.mongodb.net/test?retryWrites=true";


var _db;

module.exports = {

  connectToServer: function( callback ) {
    //mongoose.connect("paste db link", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    //{ useUnifiedTopology: true } 
    MongoClient.connect( url,  { useUnifiedTopology: true, useNewUrlParser: true }, function( err, client ) {
        if (err == null) {
            _db  = client.db('dump');
            return callback( 'Database conectada MongoDB' );
        } else {
           _db.createCollection("dump", function(err, res) {
            if (err) throw err;
            console.log("DataBase criada!");
            _db.close();
          });

            return callback( err );
        }
    } );
  },

  getDb: function() {
    return _db;
  }

  
};
