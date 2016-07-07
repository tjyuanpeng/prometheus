// such weird way
// require js file first before css file
// make sure css importing from js file directly would be loaded first
module.exports = require('./dist/prometheus.js')

require('./dist/prometheus.css')
