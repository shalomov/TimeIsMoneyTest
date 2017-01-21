$(document).ready(function(){
 
  //hover

  $( ".btn_hover-f" ).hover(
  function() {
    $(".change_bg-f" ).css('background-color','#49cbcd');
  }  , function() {
    $(".change_bg-f" ).css('background-color','#485460');
  }
);
  $( ".btn_hover-s" ).hover(
  function() {
    $(".change_bg-s" ).css('background-color','#49cbcd');
  }  , function() {
    $(".change_bg-s" ).css('background-color','#485460');
  }
  
);
  $( ".btn_hover-t" ).hover(
  function() {
    $(".change_bg-t" ).css('background-color','#49cbcd');
  }  , function() {
    $(".change_bg-t" ).css('background-color','#485460');
  }
);

  //toggle-menu
  $(".toggle_mnu").click(function() {
      $(".sandwich").toggleClass("active");
    });
    $(".main-nav ul a").click(function() {
      $(".top-menu").fadeOut(600);
      $(".sandwich").toggleClass("active");
    }).append("<span>");

    $(".toggle_mnu").click(function() {
      if ($(".top-menu").is(":visible")) {
        $(".top-menu").fadeOut(600);
      } else {
        $(".top-menu").fadeIn(600);
      };
    });

  //slider init
  $('.bxslider').bxSlider({
    pager: false
  });

});