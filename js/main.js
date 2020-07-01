$(document).ready(function() {
  $(".c1").click(function() {
      $(".o1").css("display", "block");
      $(".remove").css("display", "block");
      // $(".i1").css("display", "block");
      $(".o1").animate({
          width: "100%",
      }, 1000);
      setTimeout(function() {
          $(".title").css("display", "block");
      }, 1200);
  });
  $(".remove").click(function() {
      location.reload();
  });
});
