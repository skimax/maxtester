$(document).ready(function(){
    doIntro();

		

function doIntro() {
  $(".img1").fadeIn(1350, function() {
    $(this).fadeOut(2000, function() {
      $(".img2").fadeIn(2500, function() {
        $(this).fadeOut(2000, function() {
          $(".img3").fadeIn(2500, function() {
            $(this).fadeOut(2500, function() {
            
              doIntro();




});
});
});
});
});
});

}

});