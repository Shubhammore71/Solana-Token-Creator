
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bc-ur-registry-sol.cjs.production.min.js')
} else {
  module.exports = require('./bc-ur-registry-sol.cjs.development.js')
}
