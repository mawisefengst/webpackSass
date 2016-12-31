require("./styles/styles.scss");
require("../dist/index.html");
var jQuery = require("jquery");

/*var dd = {
	title : "app from webpack"
};

var { title } = dd;*/

(function($){

   $(".container > .header").click(function(){
   	  var _self = this;
   	  $(_self).siblings(".box").toggleClass("collapsed");
   	  $(_self).toggleClass("collapsed");
   });

})(jQuery);