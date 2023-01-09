const path = require("path")

let mode = "development",
    source_map = "source-map"

if (process.env.NODE_ENV === "production") {
    mode = "production"
    source_map = false
}

module.exports = {
    mode: mode,
    /**
     * entries for raw js files (source)
     */
    entry: {
        que: path.resolve(__dirname, 'src/causiq.js'),
    },
    /**
     * output folder,
     * where [name] === entry[name]/entry[i] from above
     */
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },

    /**
     * devtools controls if and how source maps are generated.
     */
    devtool: source_map,

    /**
     * https://webpack.js.org/configuration/plugins/
     */
    plugins: [
    ],

    /**
     * https://webpack.js.org/configuration/module/#rule
     */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset"
            },
        ]
    },
  resolve: {
    extensions: ['.js', '.ts']
  },
}
