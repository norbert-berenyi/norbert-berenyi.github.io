$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('masthead').addClass("sticky");
  }
  else{
    $('masthead').removeClass("sticky");
  }
});
