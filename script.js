$(document).ready(function() {
  console.log("ready!");

  $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
      }
  });

  function changeClass() {
    console.log("this =", $(this));
    $('img').animateCss('bounceIn');
  }

  $('button').on('click', changeClass);

})