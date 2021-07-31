//function to zoom image
function imageZoom(){
    var $zoomimg = $('img.zoomimg');
    $zoomimg.on('click',function(e){
      e.stopPropagation();
      $(this).after('<div id="imgZoomDiv"><div><img src="" class="zoomed" /></div></div>');
      var $t = $(this);
      $('.zoomed').attr({src: $t.attr('data-src')});
      // $('#imgZoomDiv').animate({opacity:"1"}, 250).show();
      $('#imgZoomDiv').show();
  
      $('#imgZoomDiv > div').hide().prepend('<i class="bi bi-x close"></i>').fadeIn(500);// add close button
  
    });
    $(document).on('click', '#imgZoomDiv', function(e){
      e.preventDefault();
      $(this).hide().remove();
    });
  };
  imageZoom();