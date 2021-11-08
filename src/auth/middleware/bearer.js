

// module.exports = async (req, res, next) => {

//   try {

//     if (!req.headers.authorization) { next('Invalid Login') }

//     const token = req.headers.authorization.split(' ').pop();
//     const validUser = await users.authenticateWithToken(token);

//     req.user = validUser;
//     req.token = validUser.token;
//     next();

//   } catch (e) {
//     res.status(403).send('Invalid Login');;
//   }
// }
// module.exports= (req, res, next)=> {

//     //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbWltIiwiaWF0IjoxNjM2MzY2MDgwfQ.OhHLD4yRWs1LlTloBjIs0j-QYzi8LdoQDXUfPaO0BSg
//     console.log(req.headers.authorization);
//     const bearerHeaderToken = req.headers.authorization.split(' ')[1]; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbWltIiwiaWF0IjoxNjM2MzY2MDgwfQ.OhHLD4yRWs1LlTloBjIs0j-QYzi8LdoQDXUfPaO0BSg
  
//     // take that token and check if the bearer is authenticated!
//     users.authenticateBearer(bearerHeaderToken).then(userData => {
//       req.user = userData;
//       next();
//     }).catch(() => {
//       next('Bearer token authentication error');
//     });
  
//   }
  
'use strict';

const { users } = require('../models/index')

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { next('Invalid Login')}

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateToken(token);
    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    res.status(403).send('Invalid Login');;

  }


}