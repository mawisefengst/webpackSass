require("./styles/styles.scss");
require("../dist/index.html");

var dd = {
	title : "app from webpack"
};

var { title } = dd;
console.log(title);