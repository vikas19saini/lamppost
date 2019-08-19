// Aos animation :-
AOS.init({
   duration: 2000,
});

// jarallax :-
$('.jarallax').jarallax({
  speed: 0.5,
  imgWidth: 1366,
  imgHeight: 768
});

/* header */
$(window).scroll(function(){
   if ($(this).scrollTop() > 300){
       $('body').addClass("header-fixed");
     }
  else{
       $('body').removeClass("header-fixed");
     }
});

$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        $(".product_dedicated.active").children(".product_dedicated_details").addClass("active");
    }
    else {
     $(".product_dedicated.active").children(".product_dedicated_details").addClass("active");
    }
});

$(document).ready(function(){
  $(".day_img").click(function(){
    $("body").addClass("active");
  })
  $(".night_img").click(function(){
    $("body").removeClass("active");
  });
  $(".scroll_down").click(function(){
    $('body,html').animate({scrollTop: $(window).height()},500);
    return false;
  });
  $(".close_menu, .logo").on("click", function(){
    $("header").removeClass("active");
    $("header").addClass("active2");
  });
  $(".menu_icons").on("click", function() {
     $("header").removeClass("active2");
  });
  $(".nav_right button, .contact_nav").click(function(){
    $(".nav_left").addClass("active");
    $(".contact_nav").addClass("active");
    $(".philosophy_nav").removeClass("active");
  });
  $(".menu_back, .philosophy_nav").click(function(){
    $(".nav_left").removeClass("active");
    $(".contact_nav").removeClass("active");
    $(".philosophy_nav").addClass("active");
  })
  $(".menu_icons").click(function(){
    $(".navigation_section").addClass("active");
  })
  $(".close_menu").click(function(){
    $(".navigation_section").removeClass("active");
  })
})

$(function() {
  $(".product_dedicated .scroll_down, .product_dedicated_details").on("click", function(e) {
     $(this).siblings(".product_dedicated_details").addClass("active");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".product_dedicated .scroll_down, .product_dedicated_details ") === false) {
      $(".product_dedicated_details").removeClass("active");
      $("header").removeClass("active");
    }
  });
  $(".menu_icons, .nav_section>div").on("click", function(e) {
     $("header").addClass("active");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".nav_section .close_menu") === false) {
      $("header").removeClass("active");
      $(".nav_left").removeClass("active");   
    }
  });
});

/* 
$(document).ready(function(){
  $("a[rel='tab']").click(function(){
    var pageURL = $(this).attr("href");
    var filename = pageURL.split(".")[0]; // <-- added this line
    console.log(filename);
    $("body").addClass(filename);
    return filename;
  });
});
*/
$(function() {
  var loc = window.location.href; // returns the full URL
  if(/index/.test(loc)) {
    $('body').addClass('index');
    $('body').removeClass('products_dedicated');
  }
  else if(/products_dedicated/.test(loc)){
    $('body').addClass('products_dedicated');
    $('body').removeClass('index');
  }
});


/**** home page js  start ****/
$('.mycute_carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:false,
    autoplayTimeout:7000,
    smartSpeed:1000,
    navText: ['<i class="icon-left-arrow-1"></i>', '<i class="icon-right-arrow"></i>' ],
    responsive:{
        0:{
            items:1,
        }
    }
});
$('.trusted_carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:false,
    autoplayTimeout:7000,
    smartSpeed:700,
    navText: ['', '' ],
    responsive:{
        0:{
            items:2,
        }
    }
});
setInterval(function(){ 
    $(".trusted_carousel .owl-item").removeClass('active1');
    $(".trusted_carousel .owl-item").removeClass('active2');
    $(".trusted_carousel .owl-item.active").eq(0).addClass('active1');
    $(".trusted_carousel .owl-item.active").eq(1).addClass('active2');
 }, 100);


/**** home page js End ****/



/**** product page js start ****/
$('.objects_carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:false,
    autoplayTimeout:7000,
    smartSpeed:700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
    responsive:{
        0:{
            items:1,
        }
    }
});

/* next and preview btn  */
var $first = $('.product_dedicated:first'),
   $last = $('.product_dedicated:last');

$('.product_dedicated').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$(".next_icon, .next_product").click(function () {
   var $next, $selected = $(".active, .active2");
   $next = $selected.next('.product_dedicated').length ? $selected.next('.product_dedicated') : $first;
   $selected.removeClass("active2");
   $selected.removeClass("active");
   $(".product_dedicated").removeClass('prevActive');
   $(".product_dedicated").removeClass('nextActive');
   $(".product_dedicated").removeClass('active');
   $selected.addClass("nextActive");
   $next.addClass('active2');
   $next.addClass('active');
});

$(".prev_icon, .prev_product").click(function () {
   var $prev, $selected = $(".active");
   $prev = $selected.prev('.product_dedicated').length ? $selected.prev('.product_dedicated') : $last;
   $selected.removeClass("active");
   $(".product_dedicated").removeClass('prevActive');
   $(".product_dedicated").removeClass('nextActive');
   $(".product_dedicated").removeClass('active2');
   $selected.addClass("prevActive");
   $prev.addClass('active');   

});





/**** product page js End ****/


