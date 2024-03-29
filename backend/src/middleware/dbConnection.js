const mongoose = require('mongoose'); // for database

function dbConnection() {
    mongoose.connect(
        process.env.TEST_DB_CONN || process.env.DB_CONN || "mongodb+srv://manjeetuser:manjeet@employee-database.dxtzx.mongodb.net/urlShorten?retryWrites=true&w=majority", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME || 'urlShorten' // if no database is selected in env file, use mongo default (test)
        }
    )
    .then(res => {
        // if db conn was successfull
        console.log('[DATABASE] successfully connected to database!');
    })
    .catch(error => {
        // if the server can't connect to db, exit with an error code
        console.warn('[DATABASE] error while connecting to database:');
        console.warn(error); // print error to log
        process.exit(1); // exit with the error exit code "1"
    });
}

module.exports = dbConnection;