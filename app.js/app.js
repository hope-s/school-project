jQuery.noConflict();
jQuery(document).ready(function ($) {

  if ($(this).scrollTop() > 350) {
    $('#body').addClass('scrolled')
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $('#body').addClass('scrolled')
    } else($('#body').removeClass("scrolled"))
  });

  $(".open_menu").click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $("#body").addClass("open_menu");
  });

  $(".close_menu").click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $("#body").removeClass("open_menu");
  });

  $("#mobile-h-v li a").click(function (e) {
    $("#body").removeClass("open_menu");
  });


  $(".filter").click(function (e) {
    e.preventDefault();

    id = $(this).attr("data-id");
    el = $(this);
    $lnk = $(this).attr("href");
    $("#vm").text($(el).text());
    $("#show-menu").prop("checked", false);

    $(".filter").removeClass("active");
    $(el).addClass("active");

    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top - 100
    }, 1000, "easeInOutExpo");

  });


  $("#menu a,#menuS a,#main-nav a,#mobile-h-v a").click(function (e) {
    if ($("#pag").val() == "pag") return;
    e.preventDefault();
    e.stopImmediatePropagation();
    url = $(this).attr("href");

    if (url == "#IT") t = 150;
    else t = 100;

    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top - t
    }, 500, "easeInOutExpo");
  });

  $(".dialogCorso .close,#backCover").click(function () {
    id = $(this).data("id");
    $("#backCover").removeClass("open");
    $(".dialogCorso").removeClass("open");
  });

  $(".corso-testo a").click(function () {

    id = $(this).data("dialog");
    $("#backCover").addClass("open");
    $("#" + id).addClass("open");

  });

  $(".corso-testo a,.box-right a").click(function () {

    if ($(this).data("esterno") == "si") return;

    id = $(this).data("dialog");
    $("#backCover").addClass("open");
    $("#" + id).addClass("open");

  });

  var controller = new ScrollMagic.Controller();

  var heroScene = new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: "#home",
      duration: '150%'
    })
    .setTween(TweenMax.to($("#mappa"), 1, {
      top: "-20%"
    }))
    .addTo(controller);



  new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: "#home",
      duration: '150%'
    })
    .setTween(TweenMax.to($("#home-carousel .people"), 1, {
      y: "20%"
    }))
    .addTo(controller);

  /*
  	new ScrollMagic.Scene({
  			triggerHook: 0,
  			triggerElement: "#home",
  			duration: '150%'
  		})
  		.setTween(TweenMax.to($("#home-carousel .text"), 1, {x: "-30%"}))
  		.addTo(controller);
  */

  $("#mcslider-testimonianze").slick({
    nextArrow: '<span class="arrow-right bi bi-chevron-right"></i>',
    prevArrow: '<span class="arrow-left bi bi-chevron-left"></i>',
    dots: false,
    autoplay: false,
    infinite: true,
    variableWidth: false,
    adaptiveHeight: false,
    fade: false,
    centerMode: true,
    slidesToShow: 1,
    arrow: true,
    speed: 1000,
    draggable: true,
    centerPadding: "0px",
    responsive: [{

      breakpoint: 650,
      settings: {
        fade: false,
        infinite: true,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1
      }

    }]
  });

  (function ($) {

    $.fn.shuffle = function () {

      var allElems = this.get(),
        getRandom = function (max) {
          return Math.floor(Math.random() * max);
        },
        shuffled = $.map(allElems, function () {
          var random = getRandom(allElems.length),
            randEl = $(allElems[random]).clone(true)[0];
          allElems.splice(random, 1);
          return randEl;
        });

      this.each(function (i) {
        $(this).replaceWith($(shuffled[i]));
      });

      return $(shuffled);

    };

  })(jQuery);
  $("#home-carousel .item").shuffle();

  $("#home-carousel").slick({
    nextArrow: '<span class="arrow-right icon-chevron-right"></i>',
    prevArrow: '<span class="arrow-left icon-chevron-left"></i>',
    dots: false,
    autoplay: true,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    fade: true,
    arrow: false,
    speed: 1000,
    draggable: false,
    focusOnSelect: true,
    pauseOnHover: false
  });

  new MCSlider("mcslider");


  $('body').waitForImages(function () {

    //$("#body").css("overflow","visible");


    $("#body").removeClass("loading");
    $("#preloader").remove();

    $("#body,html").css("overflow", "visible");
    $("#body,html").css("width", "100%");
    $("#body,html").css("height", "100%");
  });

});


// jq scscool =>

  $("#goto").fadeOut()

  $(document).on("scroll", function () {

    if ($(document).scrollTop() > 300) {
      $("#goto").fadeIn("slow");
    } else {
      $("#goto").fadeOut(1)
    }
  })

  $("#goto").click(function (e) {
    $(document).scrollTop(10);
  });


// scrool top
function darkfunction(){
  if (document.body.classList == ""){
      document.body.classList ='dark';
      document.body.style.transition = "all ease .8s !important";
      document.getElementById('darkicon').classList.add('bi-sun');
      
  }else{
      document.body.classList = "";
      document.getElementById('darkicon').classList.remove('bi-sun');
  }
  }

// loader
loader();

function loader(success) {
  var obj = document.querySelector('.preloader'),
    inner = document.querySelector('.preloader_inner'),
    page = document.querySelector('body');
  obj.classList.add('show');
  page.classList.remove('show');
  var w = 0,
    t = setInterval(function () {
      w = w + 1;
      inner.textContent = w + '%';
      if (w === 100) {
        obj.classList.remove('show');
        obj.classList.add('opacity-sajjeo');
        page.classList.add('show');
        clearInterval(t);
        w = 0;
        if (success) {
          return success();
        }
      }
    }, 10);
}

// 

jQuery(document).ready(function($) {
  $('.fadeOut').owlCarousel({
    items: 1,
    animateOut: 'fadeOut',
    loop: true,
    margin: 40,
  });
  $('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    margin: 30,
    autoHeightClass: 'owl-height',
    autoHeight:true,
    stagePadding: 30,
    smartSpeed: 450
  });
  $('.custom2').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450
  });

});



// register tab

