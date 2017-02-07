
// code to enable smooth scrolling with links

function scrollNav() {
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();



/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);



/* Animation for the header text */

$("document").ready(function(){

var title = $('.job_title');
var name = $('.name');
var left = ('.line_left');
var right = ('.line_right');
var tl = new TimelineLite()

tl.addLabel("start");
tl.fromTo(name, 2, {y: -200, autoAlpha: 0}, {y: 0, autoAlpha: 1, delay: 1}, "start" )
tl.fromTo(title, 2, {y: 200, autoAlpha: 0}, {y: 0, autoAlpha: 1, delay: 1}, "start" )
tl.from(right, 3, {scaleX:0, transformOrigin:"left"}, "start")
tl.from(left, 3, {scaleX:0, transformOrigin:"right"}, "start");

var logo = $('.logo');

tl
.from(logo, 2, {y: 20, autoAlpha: 1}, {y: 0, autoAlpha: 0})

});


/* Animation for fading in the logos */

$("document").ready(function(){


    var controller = new ScrollMagic.Controller();


    $('.logo').each(function(){


     var tween = TweenMax.fromTo($(this), 2, { scale: 0.85, ease:Linear.easeNone},
        {autoAlpha: 1, scale: 1});


     var scene = new ScrollMagic.Scene({
        triggerElement: this
     })

     .setTween(tween)
     .addTo(controller);

    });

});


/* Animation for fading in the ticks */

$("document").ready(function(){


    var controller = new ScrollMagic.Controller();


    $('.tick').each(function(){


     var tween = TweenMax.fromTo($(this), 0.5, {autoAlpha: 0, ease:Power1.easeIn},
        {autoAlpha: 1});


     var scene = new ScrollMagic.Scene({
        triggerElement: this
     })

     .setTween(tween)
     .addTo(controller);

    });

});


