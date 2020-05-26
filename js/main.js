$(document).ready(function($) {


// hide menu on click outside
$('body').delegate('main' ,'click' , function(e){
	if(!($('nav ul > ol').is(e.target)) && ($('nav ul > ol').has(e.target).length === 0))
	    {
	    	$('nav ul > li:last-of-type a .fa').removeClass('fa-times').addClass('fa-bars');
			$('nav ul > ol').parent().children('ol').hide()
	    }
});

$('body').delegate('.menuIcon', 'click', function(event) {
  $('.mobileListOfMenu').slideToggle();
});

// // responsive menu
// 	var ulLi = $('nav ul > li'),
//       fa = $('nav ul > li:last-of-type a .fa');
  
//    $('nav ul').append('<ol ></ol>');
  
//    $('nav').each(function() {
//      for (var i=0; i <= ulLi.length - 2; i++) {
//        $('nav ul > ol').append("<li>"+ i +"</li>");
//        $('nav ul > ol > li').eq(i).html(ulLi.eq(i).html());
//      }
//   });

//   $('nav ul > li:last-of-type').on('click', function() {
//     fa.toggleClass('fa-bars');
//     fa.toggleClass('fa-times');
//     $(this).parent().children('ol').slideToggle(500);
//   });

$('body').delegate('.owl-nav button span','click' , function() {
  var id = $('.owl-item.active').find('.item').attr('data-id');
  $('.absolute').html('<p>'+id+'<sup>/6</sup></p>')
})

$(window).on( 'load' ,  function() {
    $('.whoWeAre .emptyLine') .css('width', '220px');
  });

$(window).on('scroll',  function(event) {
  if($('.infoAbout').length > 0){
    $('.menuFixed').addClass('scrolledMenu');

  }else if($('.contactPic').length > 0){
    $('.menuFixed').addClass('scrolledMenu');

  }else if($('.portfolioPage').length > 0){
    $('.menuFixed').addClass('scrolledMenu');

  } else {
    if($(this).scrollTop()>100){
      $('.menuFixed').addClass('scrolledMenu');
    } else {
       $('.menuFixed').removeClass('scrolledMenu');
    }
  }
  
});
menuCHange ();
function menuCHange () {
  if($('.ourPortfolio').length > 0) {
  scrollTopElement($('.ourPortfolio') , $(' .ourPortfolio .emptyLineSmall'));
  scrollTopElement($('.ourServices') , $(' .ourServices .emptyLineSmall'));

} else {
  $('.menuFixed').addClass('scrolledMenu');
  $('.navMenu ul li').css('justify-content', 'center');
}
}



function scrollTopElement(a , b) {
  $(window).on('scroll',  function(event) {
    if($(this).scrollTop() + 200 >= a.position().top ){
      b.addClass('scrolledMenu');
    } else {
       b.removeClass('scrolledMenu');
    }
  });
}

$('.ourServicesClick').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $("#ourServices").offset().top-100
  }, 1200);
});

// team carousel slider
 $(".owlCarouselSingl").owlCarousel({
  items: 1,
  loop:true,
  nav:false,
  navigation : false, 
  lazyLoad:false,
 
  });
$(".owlCarouselPartners").owlCarousel({
    items: 3,
    loop:true,
    navigation : false, 
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoplay: false,
    smartSpeed: 2000,
    autoplayTimeout: 3500,
    responsive:{
      0 : {
          items: 1,
      },
      
      500 : {
         items: 3,
      },
     }
  });













/****************************************/


$('body').delegate('.categories', 'click', function(event) {
  $(this).closest('.typeOfDesign').find('.catItemsParent').slideToggle();
  $(this).closest('.typeOfDesign').find('.categories').toggleClass('borderBottom');
});




});