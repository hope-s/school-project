

function MCSlider (carousel) {
	var $jq = jQuery.noConflict();    
    var nome = carousel;
    var animation;
    var slideTime = 10;
    var iconNumber = $jq("#box-content-icon").children().length;
    var currentIcon = 1;
    var bp = "";
    var old_bp = "";
    
    
    function checkbp(){
        if($jq(".mobile-h").css("display")=="none"){
            bp="d"; 
        } else {
            bp="m";
        }        
    }
    
    function initAll(){
        TweenMax.to($jq(".box-left"), .5, {opacity:0,xPercent: -40, ease: Cubic.easeInOut})
        TweenMax.to($jq(".box-right"), .5, {opacity:0,xPercent: 40, ease: Cubic.easeInOut})
        
        //TweenMax.to($jq($jqcarousel1.$slides[0]).find(".box-left"), .5, {opacity:1,xPercent: 0, ease: Cubic.easeInOut})
        //TweenMax.to($jq($jqcarousel1.$slides[0]).find(".box-right"), .5, {opacity:1,xPercent: 0, ease: Cubic.easeInOut})
        
        TweenMax.to($jq("#icons-"+currentIcon+" .i-top"), .5, {opacity:1,yPercent: 20, ease: Cubic.easeInOut})
        TweenMax.to($jq("#icons-"+currentIcon+" .i-bottom"), .5, {opacity:1,yPercent: -20, ease: Cubic.easeInOut})        
    }
    
    $jq("#"+nome).find(".box-left").css("opacity",0);
    $jq("#"+nome).find(".box-right").css("opacity",0);
    
    $jq("#"+nome).on( 'init', function(event, slick) {
        
        checkbp();
        old_bp = bp;
        
        initAll();
        
        //slick.slickGoTo(0);
        TweenMax.to($jq(slick.$slides[0]).find(".box-left"), .5, {opacity:1,xPercent: 0, ease: Cubic.easeInOut})
        TweenMax.to($jq(slick.$slides[0]).find(".box-right"), .5, {opacity:1,xPercent: 0, ease: Cubic.easeInOut})
        
    });        
    
      var $jqcarousel1 = $jq("#"+nome).slick({
        dots: false,
        autoplay: false,
        infinite: true,
        variableWidth: false,
        fade:true,
        arrow:false,
        speed:1000,
        draggable:false,
        adaptiveHeight: false,
        responsive: [{

              breakpoint: 650,
              settings: {
                  fade:false,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "30px",
                    slidesToShow: 1,
                    draggable:true,
              }

            }] 
            
      });    
    
    $jq(window).resize(function(){
        
        checkbp();
        if(bp != old_bp) {
            old_bp = bp;
            if(bp="d") {
                TweenMax.to($jq(".i-top"), .5, {delay:.1,opacity:0,yPercent: -40, ease: Cubic.easeInOut})
                TweenMax.to($jq(".i-bottom"), .5, {delay:.1,opacity:0,yPercent: 40, ease: Cubic.easeInOut})
                animation.kill();
        
                $jqcellButtons1.find(".fill").css("width",0);
                $jqcellButtons1.eq( 0 ).find(".fill").css("width","100%");                
                
                initAll();
                $jqcarousel1.slick("slickGoTo",0);
            }
        }
        
        $jqcarousel1.slick('resize');
    });
    
    
    
    //$jqcarousel1.slick("slickGoTo",1);
    
    
    //TweenMax.to($jqcarousel1.find(".box-left"), .5, {opacity:0,xPercent: -20, ease: Cubic.easeInOut})
    //TweenMax.to($jqcarousel1.find(".box-right"), .5, {opacity:0,xPercent: 20, ease: Cubic.easeInOut})

    
    var $jqcellButtonGroup1 = $jq("#"+nome).parent().find(".mcslider-page-dots");
    var $jqcellButtons1 = $jqcellButtonGroup1.find('li');
    var canMove1 = true;
    lastIndex1=-1;

    $jqcarousel1.on( 'swipe', function(event, slick, direction) {
        canMove1 = false;
        animation.kill();
    });

    
    $jqcarousel1.on( 'beforeChange', function(event, slick, currentSlide,nextSlide) {
            if($jq(".mobile-h").css("display")=="none"){
                TweenMax.to($jq(slick.$slides[currentSlide]).find(".box-left"), .5, {opacity:0,xPercent: -40, ease: Cubic.easeInOut})
                TweenMax.to($jq(slick.$slides[currentSlide]).find(".box-right"), .5, {opacity:0,xPercent: 40, ease: Cubic.easeInOut})
            
                TweenMax.to($jq("#icons-"+currentIcon+" .i-top"), .5, {delay:.1,opacity:0,yPercent: -40, ease: Cubic.easeInOut})
                TweenMax.to($jq("#icons-"+currentIcon+" .i-bottom"), .5, {delay:.1,opacity:0,yPercent: 40, ease: Cubic.easeInOut})
            } else {
                $jq(".box-left,.box-right").css("opacity",1);
                $jq(".box-left,.box-right").css("transform","translateX(0)");
            }
    });
    
    
    $jqcarousel1.on( 'afterChange', function(event, slick, currentSlide) {
        
        currentIcon = Math.floor((Math.random() * iconNumber) + 1);
        
        selected = currentSlide;
        $jqcellButtons1.filter('.is-selected').removeClass('is-selected');
        $jqcellButtons1.eq( selected ).addClass('is-selected');
        lastIndex1 = selected;
        
        if($jq(".mobile-h").css("display")=="none"){
            TweenMax.to($jq(slick.$slides[currentSlide]).find(".box-left"), .5, {opacity:1,xPercent: 0, ease: Cubic.easeInOut})
            TweenMax.to($jq(slick.$slides[currentSlide]).find(".box-right"), .5, {opacity:1,xPercent: 0, ease: Cubic.easeInOut})
            
            TweenMax.from($jq(slick.$slides[currentSlide]).find(".box-right .title"), .5, {opacity:1,xPercent: -10, ease: Cubic.easeInOut})
            TweenMax.from($jq(slick.$slides[currentSlide]).find(".box-right p"), .5, {opacity:1,xPercent: 50, ease: Cubic.easeInOut})
            TweenMax.from($jq(slick.$slides[currentSlide]).find(".box-right h3"), .5, {opacity:1,xPercent: 10, ease: Cubic.easeInOut})

            TweenMax.to($jq("#icons-"+currentIcon+" .i-top"), 10, {opacity:1,yPercent: 20, ease: Power4.easeOut})
            TweenMax.to($jq("#icons-"+currentIcon+" .i-bottom"), 10, {opacity:1,yPercent: -20, delay:.5,ease: Power4.easeOut})
        } else {
            $jq(".box-left,.box-right").css("opacity",1);
            $jq(".box-left,.box-right").css("transform","translateX(0)");
        }
        
        autoPlay1();
        
        if(canMove1==false) {
            $jqcellButtons1.find(".fill").css("width",0);
            $jqcellButtons1.eq( currentSlide ).find(".fill").css("width","100%");
        }
        
    });

    
    $jqcellButtonGroup1.on( 'click', 'li', function() {
        var index = $jq(this).index();
        $jqcarousel1.slick( 'slickGoTo', index );
        
        canMove1 = false;
        animation.kill();
        
        $jqcellButtons1.find(".fill").css("width",0);
        $jqcellButtons1.eq( index ).find(".fill").css("width","100%");
    });
    
    autoPlay1();

    function autoPlay1(){
        if(canMove1){
            var $jqactive = $jqcellButtons1.filter(".is-selected").find(".fill");
            animation = TweenLite.to($jqcellButtons1.filter(".is-selected").find(".fill"), slideTime, {width:"100%",onComplete:function(){
                if(canMove1){
                    
                    TweenLite.to($jqactive,.5,{left:"100%",ease: Cubic.easeOut,onComplete:function(){
                                $jqactive.css('left', 0);
                                $jqactive.css("width",0);
                            
                    }});
                    $jqcarousel1.slick( 'slickNext');
                    
                }
            }});
        }
    } 
}