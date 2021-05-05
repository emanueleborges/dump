const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017/dump?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true, server: { reconnectInterval: 10000, reconnectTries: 5 } }, function( err, client ) {
        if (err == null) {
            _db  = client.db('dump');
            return callback( 'Database connection stablished' );
        } else {
            return callback( err );
        }
    } );
  },

  getDb: function() {
    return _db;
  }
};