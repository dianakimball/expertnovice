function resize_shadow() {
  var ratio = 636/978;
  var width = $('#banner').width(); 
  var height = width * ratio;
  return $('#shadow').height(height);
}

$(function() {
  setTimeout(function() {
    // TODO: Reset fadeIn to 10000
    resize_shadow(10).fadeIn(0);
  // TODO: Reset to 2000
  }, 0);
  $(window).resize(function() {
    resize_shadow();
  });
});

