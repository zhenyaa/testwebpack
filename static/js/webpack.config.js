var path = require('path');
module.exports = {
    entry: '/templates/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    }
    // watch: true
}