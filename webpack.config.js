var path = require("path");

 module.exports = {
     entry: {
     		app: ["./src/app.js"]
     },
     output: {
         path: path.resolve(__dirname, "bin"),
         publicPath: "/assets/",
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