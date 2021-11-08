// 'use strict';

// const base64 = require('base-64');
// const { user } = require('../models/index.js')

// module.exports = async (req, res, next) => {

//   if (!req.headers.authorization) { return _authError(); }

//   let basic = req.headers.authorization;
//   let [username, pass] = base64.decode(basic).split(':');

//   try {
//     req.user = await user.authenticateBasic(username, pass)
//     next();
//   } catch (e) {
//     res.status(403).send('Invalid Login');
//   }

// }
// module.exports=(req, res, next)=> {

//   const encodedHeaders = req.headers.authorization.split(' ')[1]; // "Basic dGFtaW06cGl6emE="
//   const [username, password] = base64.decode(encodedHeaders).split(':'); // spread operator

//   user.authenticateBasic(username, password).then(validUser => {
//     req.user = validUser;
//     next();
//   }).catch(err => { next('Invalid Login') })

// }
'use strict';

const base64 = require('base-64');
const { users } = require('../models/index')

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return  next('Invalid Login'); }

  let basic = req.headers.authorization.split(' ').pop();
  let decoded = base64.decode(basic);
  let [username, pass] = decoded.split(':');


  try {
    req.user = await users.authenticateBasic(username, pass)
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}
