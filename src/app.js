require("./styles/styles.scss");
require("../dist/index.html");
var jQuery = require("jquery");

/*var dd = {
	title : "app from webpack"
};

var { title } = dd;*/


function initializeGallerySelection($){

	var getInsideDropdown = false;


	$('#filter_span').click(function(){
		var htmlNode = $(this).html();
		
		
		$('#retrieveCover_list').children('span').each(function(){
			if($(this).html() == htmlNode)  $(this).addClass('active');
	});
	
	
	$('#retrieveCover_list').css({'display':'block'});
			
		$(document).bind('mouseup', function(){
			if(!getInsideDropdown) { 		   
								$('#retrieveCover_list').animate({height:0},function() {
							         $(this).css({display:'none','height':'243px'});
							         $(document).unbind("mouseup");
						        });
			 }
		 });
		
		//openDrop();
		
	});
		
		
		
		
	$('#retrieveCover_list').find('span').on('click',function(){
	   var htmlContent = $(this).html();
		
	   var themeValue = htmlContent;
	   if(themeValue==GalleryCoversFetcher.DEFAULT_NAME_FOR_ALL_COVERS)themeValue=null;			   

	   var trackValue = themeValue;
	   if(!trackValue)
	   		trackValue=GalleryCoversFetcher.DEFAULT_NAME_FOR_ALL_COVERS;
	   
	   MMASOmniture.trackAction(trackValue);
	   filterGalleryByTheme(themeValue);
	   
	  //let's not do this until we havea  successful change
	  // $('#filter_span').html(htmlContent);
	   var pattern = /Cover/i;
	   newindex = htmlContent.replace(pattern,"");
	   updateCover(newindex);
	   $('#retrieveCover_list').animate({height:0},function() {
						 $(this).css({display:'none','height':'243px'});
						 $(document).unbind("mouseup");
		});
	   
	   
	   
	   
	}).on('mouseover',function(){
	    $('#retrieveCover_list').children('span').each(function(){
			if($(this).hasClass('active'))  $(this).removeClass('active');
		});
	    getInsideDropdown = true;
	}).on('mouseout',function(){
		getInsideDropdown = false;
		//alert(getInsideWindow);
	});
	
}




(function($){

   $(".container > .header").click(function(){
   	  var _self = this;
   	  $(_self).siblings(".box").toggleClass("collapsed");
   	  $(_self).toggleClass("collapsed");
   });

   initializeGallerySelection($);

})(jQuery);