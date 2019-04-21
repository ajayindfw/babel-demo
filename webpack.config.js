const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename : "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/, exclude:/node_modules/, use: 'babel-loader'
            }
        ]
    }
}