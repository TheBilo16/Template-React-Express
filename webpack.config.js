const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.join(__dirname,"build"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : "babel-loader",
                exclude : /node_modules/,
            },
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
            },
            {
                test : /\.(png|jpg|jpeg|gif|svg)$/,
                use : [
                    { 
                        loader : "file-loader",
                        options : {
                            name : "images/[name].[ext]"
                        } 
                    }
                ]
            }
        ]
    }
}