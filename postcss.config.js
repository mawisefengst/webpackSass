module.exports = {
  plugins: [
    require('autoprefixer')({
    	  browsers: ["last 21 version", "Explorer >= 8", "Android >= 4.1", "Safari >= 7", "iOS >= 7"]
    })
  ]
}