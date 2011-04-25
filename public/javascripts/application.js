// function resize_shadow(offset) {
//  var ratio = 1164/1735;
//  var width = $('#banner').width();
//  var height = width * ratio - (offset || 0);
//  return $('#shadow').height(height);
//}

//$(function() {
//  setTimeout(function() {
//    resize_shadow(10).fadeIn(5000);
//  }, 2000);
//  $(window).resize(function() {
//    resize_shadow();
//  });
// });

function reposition_button() {
  var ratio = 1164/1735;
  var horizontal-offset = $('#banner').width();
  var height = width * ratio;
  return $('#image_map').height(height);
}

$(function() {
  reposition_button();
  $(window).resize(function() {
    resize_image_map();
  });
});

$(function() {
  setTimeout(function() {
  $('#dark').fadeIn(5000);
  }, 2000);
});

$(function() {
$('#intrigue').click(function()
    {
     $('#contact').slideToggle(500, function() {
    });
});
});
