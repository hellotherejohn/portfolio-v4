$(document).ready(function() {

//Outdated Browser init
outdatedBrowser({
    bgColor: '#f25648',
    color: '#ffffff',
    lowerThan: 'transform',
    languagePath: 'your_path/outdatedbrowser/lang/en.html'
})

//3D Card
	if (document.documentElement.clientWidth > 770) {
  var card = $(".card");

  $("body").on("mousemove",function(e) {  
    var ax = -($(window).innerWidth()/2- e.pageX)/40;
    var ay = ($(window).innerHeight()/2- e.pageY)/30;
    card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
  });
}


// Index menu
$('.menu a').on('click', function(){
    $('a.current').removeClass('current');
    $(this).addClass('current');
});

//init WOW.js
new WOW().init();

//Smooth scroll init
smoothScroll.init({
    speed: 800, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false
});

//Animsition

$(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 200,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });


//Google fonts
  WebFontConfig = {
    google: { families: [ 'Karla:400,400italic,700,700italic:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


//Johns scrollmenu

$(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        var window_height = $(window).height();
        var about_height = window_height/2 + 4500;

        if (ScrollTop < window_height/2) {
            $(".top").addClass( "current" );
            $(".middle").removeClass( "current" );
            $(".bottom").removeClass( "current" );
        }

        else if (ScrollTop < about_height) {
            //alert("Scroll is greater than 100");
            $(".top").removeClass( "current" );
            $(".middle").addClass( "current" );
            $(".bottom").removeClass( "current" );
        }

        else {
            $(".top").removeClass( "current" );
            $(".middle").removeClass( "current" );
            $(".bottom").addClass( "current" );
        }

    });



// Mikes scrollmenu
/*
var positions = []
    var document_height = $( document ).height();
    var window_height = $(window).height();
    var scroll_diff = window_height / 2;
    var elements = ["intro", "mid", "bottomwrap"]
    var buttons  = ["top", "middle", "bottom"]

    function set_offsets(array_elements) {
      positions = [];

      for(var i = 0;i < array_elements.length; i++) {
        var element_name = array_elements[i]
        var element_position = $("." + element_name).offset();
        var element_height = $("." + element_name).height();
        positions[i] = element_position;
      }
    }

    function read_offset(position) {
      for(var i = 0; i < positions.length; i++) {
        if(position < (positions[i].top + scroll_diff) )
          return buttons[i];
      }
    }

    function set_active(element) {
      for(var i = 0;i < buttons.length; i++) {
        if(element !== buttons[i] || !element)
          $("." + buttons[i]).removeClass("current");
      }
      if(!element) {
        activate($("." + buttons[buttons.length - 1]));
      } else {
        activate($("." + element));
      }

      function activate(element) {
        if(!element.hasClass("current"))
          element.addClass("current");
      }
    }

    set_offsets(elements);

    $(window).resize(function (event) {
      var document_height = $( document ).height();
      var window_height = $(window).height();
      var scroll_diff = window_height / 2;

      set_offsets(elements)
    });

    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      set_active(read_offset(scroll));

    });

*/

    //init Stellar.js (parallax)
    $.stellar({
  // Set scrolling to be in either one or both directions
  horizontalScrolling: false,
  verticalScrolling: true,

  // Set the global alignment offsets
  horizontalOffset: 0,
  verticalOffset: 0,

  // Refreshes parallax content on window load and resize
  responsive: false,

  // Select which property is used to calculate scroll.
  // Choose 'scroll', 'position', 'margin' or 'transform',
  // or write your own 'scrollProperty' plugin.
  scrollProperty: 'scroll',

  // Select which property is used to position elements.
  // Choose between 'position' or 'transform',
  // or write your own 'positionProperty' plugin.
  positionProperty: 'position',

  // Enable or disable the two types of parallax
  parallaxBackgrounds: true,
  parallaxElements: true,

  // Hide parallax elements that move outside the viewport
  hideDistantElements: false,

  // Customise how elements are shown and hidden
  hideElement: function($elem) { $elem.hide(); },
  showElement: function($elem) { $elem.show(); }
});

$(".casenumber").click(function(){
    $("body").addClass("noscroll");
    $(".overview").addClass("shownav");
});

$("#closenav").click(function(){
    $("body").removeClass("noscroll");
    $(".overview").removeClass("shownav");
});

$( ".casetop" ).hover(
  function() {
    $(".casemid img").addClass( "casezoom" );
    $(".casebottom img").addClass( "casezoom" );
  }, function() {
    $(".casemid img").removeClass( "casezoom" );
    $(".casebottom img").removeClass( "casezoom" );
  }
);

  });


// //Google Analytics

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-16665196-1']);
    _gaq.push(['_trackPageview']);
  
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();