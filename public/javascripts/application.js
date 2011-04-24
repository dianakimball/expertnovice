function resize_shadow(offset) {
  var ratio = 1164/1735;
  var width = $('#banner').width();
  var height = width * ratio - (offset || 0);
  return $('#shadow').height(height);
}

$(function() {
  setTimeout(function() {
    resize_shadow(10).fadeIn(5000);
  }, 2000);
  $(window).resize(function() {
    resize_shadow();
  });
});
