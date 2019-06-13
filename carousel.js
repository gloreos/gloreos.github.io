$("#myCarousel, #myCarousel2", "#myCarousel3", "#myCarousel4").carousel();

$(".carousel-control-prev").click(function(){
  $("#myCarousel, #myCarousel2", "#myCarousel3", "#myCarousel4").carousel("prev");
});

$(".carousel-control-next").click(function(){
  $("#myCarousel, #myCarousel2", "#myCarousel3", "#myCarousel4").carousel("next");
});
