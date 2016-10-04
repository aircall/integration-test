(function() {
  'use strict';

var count = 0;

$(".number").on('click', function() {
  var num = ($(this).clone().children('ul').remove().end().text());
  if (count < 10) {
    $(".num").append('<span>' + num.trim() + '</span>');
    count++
  }
});

$('.fa-times').on('click', function() {
  $('.num span').remove();
  count--;
});


})();
