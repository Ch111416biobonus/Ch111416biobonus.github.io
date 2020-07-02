$(document).ready(function() {
  $(".c1").click(function() {
      $(".o1").css("display", "block");
      $(".remove").css("display", "block");
      // $(".sections").css("display", "none");
      $(".o1").animate({
          width: "100%",
      }, 1000);
      setTimeout(function() {
          $(".o1 .title").css("display", "block");
      }, 1200);
  });
  $(".c2").click(function() {
      $(".o2").css("display", "block");
      $(".remove").css("display", "block");
      // $(".sections").css("display", "none");
      $(".o2").animate({
          width: "100%",
      }, 1000);
      setTimeout(function() {
          $(".o2 .title").css("display", "block");
      }, 1200);
  });
  $(".c3").click(function() {
      $(".o3").css("display", "block");
      $(".remove").css("display", "block");
      // $(".sections").css("display", "none");
      $(".o3").animate({
          width: "100%",
      }, 1000);
      setTimeout(function() {
          $(".o3 .title").css("display", "block");
      }, 1200);
  });
  $(".c4").click(function() {
      $(".o4").css("display", "block");
      $(".remove").css("display", "block");
      // $(".sections .back").css("display", "none");
      $(".o4").animate({
          width: "100%",
      }, 1000);
      setTimeout(function() {
          $(".o4 .title").css("display", "block");
      }, 1200);
  });
  $(".c5").click(function() {
      $(".o5").css("display", "block");
      $(".remove").css("display", "block");
      $(".o5").animate({
          width: "100%",
      }, 1000);
      setTimeout(function() {
          $(".o5 .title").css("display", "block");
      }, 1200);
  });
  $(".remove").click(function() {
      location.reload();
  });
});
