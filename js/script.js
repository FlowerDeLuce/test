$(window).on('load', function(){ 





$('#send-button__link').on('click', function () { 
var comment = $('#textarea').val(); 
if (comment){ 
$('<div class="comments-item"> '+ '<div class="comments-item__name">' + 'Гость ' + '</div>' + '<div class="comments-item__date">' + '15 октября 2017'+ '</div>'+ '<div class="comments-text">' + '<span class="triangle">'+'</span>'+ comment + '</div>' +'</div>').appendTo('.comments-list'); 
$('#textarea').val(''); 
} 

}); 


var isCtrl = false;
$('#textarea').keyup(function (e) {
 
	if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
 
	if(e.which == 17 ) isCtrl=true;
	if(e.which == 13 && isCtrl == true) {
 var comment = $('#textarea').val(); 
if (comment){ 
$('<div class="comments-item"> '+ '<div class="comments-item__name">' + 'Гость ' + '</div>' + '<div class="comments-item__date">' + '15 октября 2017'+ '</div>'+ '<div class="comments-text">' + '<span class="triangle">'+'</span>'+ comment + '</div>' +'</div>').appendTo('.comments-list'); 
$('#textarea').val(''); 
} 
		
	}
 
});

});