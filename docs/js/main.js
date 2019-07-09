$(document).ready(function() {

	$('.menu-button').click(function(e){
		e.preventDefault();
		$('.menu-list').toggleClass('menu-list--open');
		if ($('.menu-button').hasClass('open')) {
			$('.menu-button').removeClass('open');
			$('.menu-button').addClass('close');
		} else {
			$('.menu-button').removeClass('close');
			$('.menu-button').addClass('open');
		}
	})
	$('.mobile-menu-item').click(function(e){
		$('.menu-list').removeClass('menu-list--open');
		if($('.menu-button').hasClass('close')){
			$('.menu-button').removeClass('close');
			$('.menu-button').addClass('open');
		} else {
			$('.menu-button').removeClass('open');
			$('.menu-button').addClass('close');
		}
	})
	

	// scroll
	$(".header__menu a,a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    	highlightSelector:"nav a",
	    	scrollSpeed: 700,
  			scrollingEasing: "easeInOutQuint",
  			offset: 250
		});

});