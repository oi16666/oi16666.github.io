//jUqery toggle(hide and show) for navigation in mobile(responsive).

$(function() {
  $(".menu-toggle").click(function() {
    $(".menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});
