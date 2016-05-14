$(document).ready(function(){
    loadPage();
});

function loadPage() {
    $('body').show();
	$('div:first').wrap('<div id="loader"></div>'); 
    $('#loader').hide();
    $('body').prepend('<div id="progress"><img class="loader" src="images/loading-logo.png"/></div>'); 
    scrollTo(0,0); 
    $(window).load(function(){
    	var loadTime = 500;
        $('#progress').fadeOut(loadTime, function(){
        	$("#loader").fadeIn(loadTime).contents().unwrap();
        }); 
    });
}