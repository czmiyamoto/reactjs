/* eslint-disable global-require */
if (process.env.ENV === 'prod') {
  module.exports = require('./prod');
} else if (process.env.ENV === 'stg') {
  module.exports = require('./stg');
} else if (process.env.ENV === 'demo') {
  module.exports = require('./demo');
} else if (process.env.ENV === 'dev') {
  module.exports = require('./dev');
}
/* eslint-enable */
