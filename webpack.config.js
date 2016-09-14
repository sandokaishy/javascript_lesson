var path = require("path");

 module.exports = {
     entry: {
     		app: ["./src/app.js"]
     },
     output: {
         path: path.resolve(__dirname, "dist"),
         publicPath: "/dist/",
         filename: 'app.bundle.js'
     },
		devServer: { inline: true },
		    module: {
		        loaders: [{
		            test: /\.scss$/,
		            loaders: ["style", "css", "sass"]
		        }]
		    }     
 };