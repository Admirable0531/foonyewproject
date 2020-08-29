function setplace(p) {
	localStorage.setItem('place', p);
	console.log(localStorage.getItem('place'));
}
// navigation script
function open() {
$(document).ready(function(){
	$('.button-nav').click(function(){
	  if($(this).hasClass('expand')){
		$('ul').slideUp(function(){
		  $('.button-nav').removeClass('expand');
		  $('.fas').removeClass('expand')
		});
	  }else{
		$(this).addClass('expand');
		setTimeout(function(){
		  $('.fas').addClass('expand');
		  $('ul').stop().slideDown();
		},200);
	  }
	});
  });
}