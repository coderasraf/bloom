$(document).ready(function(){
	$('.welcome-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		nav:true,
		dots:false,
		navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
	})
})

$(document).ready(function(){
	$('.collection-welcome-inner').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		nav:false,
		dots:true
	})
})

// $(document).ready(function(){
// 	$('.product-details-carousel-inner').owlCarousel({
// 		items:1,
// 		loop:true,
// 		autoplay:true,
// 		nav:true,
// 		dots:false,
// 		navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
// 	})
// })