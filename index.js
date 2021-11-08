
   
'use strict';

// Start up DB Server
// const { db } = require('./src/auth/models/index');
// db.sync()
//   .then(() => {

//     // Start the web server
//     require('./src/server').start(process.env.PORT);
//   });


  const { start } = require('./src/server');
const { db } = require('./src/auth/models/index');

// we first connect to the DB, then we run our server
db.sync().then(() => {
  // kickstart the server
  start(); // will start our server
}).catch(console.error);