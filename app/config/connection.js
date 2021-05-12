const MongoClient = require( 'mongodb' ).MongoClient;
//const url = "mongodb://localhost:27017/dump?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const url = "mongodb+srv://admin:Emanuel@2015@cluster0.aowla.mongodb.net/test?retryWrites=true";


var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true, server: { reconnectInterval: 10000, reconnectTries: 5 } }, function( err, client ) {
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
