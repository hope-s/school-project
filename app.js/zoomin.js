//function to zoom image
function imageZoom(){
    var $zoomimg = $('img.zoomimg');
  
    //$zoomimg.mouseover(function(){
      //$(this).css({"cursor":"zoom-in","outline":"1px solid #fff"});
    //});
    //create overlay, load large data-src image	into src
    $zoomimg.on('click',function(e){
      e.stopPropagation();
      $(this).after('<div id="imgZoomDiv"><div><img src="" class="zoomed" /></div></div>');
      var $t = $(this);
      $('.zoomed').attr({src: $t.attr('data-src')});
      // $('#imgZoomDiv').animate({opacity:"1"}, 250).show();
      $('#imgZoomDiv').show();
  
      $('#imgZoomDiv > div').hide().prepend('<i class="bi bi-x close"></i>').fadeIn(500);// add close button
      setTimeout($.scrollLock(true),250);
  
    });
    //remove overlay - imgZoomDiv
    $(document).on('click', '#imgZoomDiv', function(e){
      e.preventDefault();
      //$('.zoomed').attr('src','');
      //$(this).animate({opacity:"0"}, 250).hide().remove();
      $(this).hide().remove();
      setTimeout($.scrollLock(false),500);
    });
  };
  imageZoom();