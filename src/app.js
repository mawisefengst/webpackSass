require("./styles/styles.scss");
require("../dist/index.html");
var jQuery = require("jquery");
var angular = require("angularjs");
//var ngtemplate!html! = require("ngtemplate!html!./templates/ss-language-panel.html");

/*var dd = {
	title : "app from webpack"
};

var { title } = dd;*/

angular.module("ssLanguageSelector",[require('angular-sanitize')])
	.controller("ssControl",["$scope",function($scope){
	    $scope.content = [
	    	{   
	    	    "value":"default",
	    		"item":"English",
	    		"select_your_language_title" : "Select Your Language",
	    		"welcome_text": "<p>The UEFA Europa League is one of the most prestigious football competitions in Europe and is the largest professional club competition in the world. As Main Sponsor of  the UEFA Europa League, we are looking forward to welcoming you to an exciting matchday hospitality experience.</p><p>This website will provide you with additional information about your upcoming FedEx hospitality experience.</p><p><b>Match Day:</b>&nbsp;Round of 32<br><b>Match Date:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Match:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Stadium:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"nl",
	    		"item":"Nederlands",
				"select_your_language_title" : "Selecteer je taal",
				"welcome_text": "<p>De UEFA Europa League is een van de meest prestigieuze voetbalcompetities in Europa en de grootste professionele clubcompetitie ter wereld. Als hoofdsponsor en officiële vervoerder van de UEFA Europa League verwelkomen wij u graag tijdens een van de wedstrijden. </p><p>Op deze website vindt u meer informatie. Wilt u het registratieformulier invullen, zodat we ons goed op uw komst kunnen voorbereiden?</p><p><b>Dag van de wedstrijd:</b>&nbsp;Ronde van 32<br><b>Datum van de wedstrijd:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Wedstrijd:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Stadion:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"it",
	    		"item":"italiano",
	    		"select_your_language_title" : "Seleziona la tua lingua",
	    		"welcome_text": "<p>La UEFA Europa League è una delle competizioni calcistiche più prestigiose d'Europa e il maggior torneo tra squadre professionistiche al mondo. In qualità di sponsor principale della  UEFA Europa League, saremo lieti di darti il benvenuto a un'entusiasmante esperienza di ospitalità il giorno dell'incontro.</p><p>Questo sito fornisce tutte le informazioni utili in merito all'esperienza di ospitalità offerta da FedEx.</p><p>Innanzitutto, però, è fondamentale che invii la sua iscrizione online, per aiutarci a organizzare il suo arrivo.</p><p><b>Giorno dell'incontro:</b>&nbsp;32 squadre<br><b>Data dell'incontro:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Incontro:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Stadio:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"pl",
	    		"item":"Polskie",
				"select_your_language_title" : "Seleziona la tua lingua",
				"welcome_text": "<p>Liga Europy UEFA to jeden z&nbsp;najbardziej prestiżowych turniejów piłki nożnej w&nbsp;Europie i&nbsp;największy turniej profesjonalnych klubów piłkarskich na świecie. Jako Sponsor Główny  Ligi Europy UEFA serdecznie zapraszamy Państwa do skorzystania z naszego ekscytującego, specjalnego pakietu dla gości w dniu meczu.</p><p>Niniejsza strona zawiera dodatkowe informacje o wydarzeniu przygotowanym przez FedEx.</p><p>Prosimy o wypełnienie formularza zgłoszeniowego, żebyśmy mogli przygotować się na Twój przyjazd.</p><p><b>Dzień meczu:</b>&nbsp;Runda z 32<br><b>Data meczu:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Mecz:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Stadion:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"de",
	    		"item":"Deutsche",
				"select_your_language_title" : "W&auml;hle deine Sprache",
				"welcome_text": "<p>Die UEFA Europa League ist einer der renommiertesten Fußballwettbewerbe in Europa und der größte Profi-Vereinswettbewerb weltweit. Als Hauptsponsor der  UEFA Europa League freuen wir uns darauf, Sie bei einem aufregenden Spieltag-Hospitality-Erlebnis begrüßen zu dürfen.</p><p>Auf dieser Website finden Sie weitere Informationen zu Ihrer anstehenden FedEx Hospitality-Veranstaltung.</p><p>Wir möchten Sie insbesondere bitten, Ihre Online-Registrierung vorzunehmen, damit wir uns gebührend auf Ihre Teilnahme an dem Event vorbereiten können.</p><p><b>Spieltag:</b>&nbsp;Sechzehntelfinale<br><b>Datum des Spiels:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Spiel:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Stadion:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"es",
	    		"item":"Espa&ntilde;ol",
				"select_your_language_title" : "Elige tu idioma",
				"welcome_text": "<p>La UEFA Europa League es una de las competiciones de fútbol más prestigiosas de Europa y la mayor competición de clubes profesionales del mundo. Como patrocinador principal de  la UEFA Europa League, deseamos darle la bienvenida a una emocionante experiencia de hospitalidad el día del partido.</p><p>Este sitio web le proporcionará información adicional sobre su próxima experiencia de hospitalidad de FedEx.</p><p>Lo que es más importante, necesitamos enviarle su registro por Internet para que nos ayude a preparar su llegada.</p><p><b>Día del partido:</b>&nbsp;Dieciseisavos de final<br><b>Fecha del partido:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Partido:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Estadio:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"da",
	    		"item":"Deutsche",
				"select_your_language_title" : "V&aelig;lg dit sprog",
				"welcome_text": "<p>UEFA Europa League er en af de mest prestigefyldte fodboldturneringer i Europa og den største professionelle klubturnering i verden. Som hovedsponsor og officiel transportør for UEFA Europa League ser vi frem til at byde dig til velkommen til en spændende fodboldoplevelse.</p><p>På dette websted kan du få flere oplysninger om dit kommende FedEx-arrangement.</p><p><b>Kampdag:</b>&nbsp;Round of 32<br><b>Kampdato:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Kamp:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Stadion:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"cz",
	    		"item":"čeština",
				"select_your_language_title" : "Vyberte si jazyk",
				"welcome_text": "<p>Evropská liga UEFA je jednou z nejprestižnějších fotbalových soutěží v Evropě a největší soutěží profesionálních fotbalových klubů na světě. Jako hlavní sponzor soutěže  UEFA Europa League se těšíme na vaši účast ve vzrušujícím programu pohoštění v den zápasu.</p><p>Tyto webové stránky vám poskytnou další informace o blížící se akci pohoštění organizované společností FedEx.</p><p><b>Den zápasu:</b>&nbsp;První vyřazovací kolo<br><b>Datum zápasu:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Zápas:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Stadion:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	},
	    	{
	    		"value":"sv",
	    		"item":"svenska",
				"select_your_language_title" : "V&auml;lj ditt spr&aring;k",
				"welcome_text": "<p>UEFA Europa League är en av Europas mest prestigefyllda fotbollsturneringar och den största turneringen i världen för professionella fotbollsklubbar. Som huvudsponsor&nbsp;för  UEFA Europa League ser vi fram emot att välkomna dig till en spännande match med hospitality-inramning.</p><p>Genom denna webbplats får du mer information om din stundande FedEx event.</p><p><b>Matchdag:</b>&nbsp;Omgång med 32<br><b>Matchdatum:</b>&nbsp;26&nbsp;January&nbsp;2017<br><b>Match:</b>&nbsp;Liverpool FC vs. Chelsea FC<br><b>Arena:</b>&nbsp;Anfield, Liverpool<br></p>"
	    	}
	    ];

	    $scope.currentLang = "default";
	    //$scope.currentContent = $scope.content[0];

	    function setContentByLang(lang){
	    	var i = 0;
	    	while(i < $scope.content.length){
	    		if($scope.content[i].value == lang)  {
	    			$scope.currentContent = $scope.content[i];
	    			break;
	    		}
	    		i++;
	    	}
	    }

	    setContentByLang($scope.currentLang);
	    $scope.$watch("currentLang",function(newVal,oldVal){
	    	if(newVal !== oldVal)  setContentByLang(newVal);
	    });
	}])

	.directive("ssLanguagePanel",function(){
		return {
			scope:{
				currentContent: "=",
				customer:"="
			},
 			restrict: 'E',
			replace:false,
			transclude: true,
	        templateUrl: './templates/ss-language-panel.html',
	        link: function(scope, element, attributes){
	        		debugger;
	        }
		}
	})
	.directive('toggle', function() {
        return {
            scope: {toggle: "="},
            link: function($scope, element, attrs) {
              $scope.$watch("toggle", function(value) {
                element.toggleClass('active', value) 
              })
              
              jQuery(element).click(function() {
                $scope.$apply(function() {
                  $scope.toggle = !$scope.toggle
                })
              })
            }
        }
     })
;


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