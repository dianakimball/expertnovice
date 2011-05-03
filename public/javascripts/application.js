function resize_shadow() {
  var ratio = 636/978;
  var width = $('#banner').width(); 
  var height = width * ratio;
  return $('#shadow').height(height);
}

$(function() {
  setTimeout(function() {
    resize_shadow(10).fadeIn(3000);
  }, 500);
  $(window).resize(function() {
    resize_shadow();
  });
});

