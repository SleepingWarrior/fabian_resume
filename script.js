$(document).ready(() => {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  const animation = () => {
    $("#about-btn, #email-btn").fadeTo(1000, 0.2).css("background", "#333").fadeTo(1000, 1.0, animation);
  };

  $("#about-btn, #email-btn").on("mouseover", () => {
    $("#about-btn, #email-btn").stop(true).fadeTo(1.0, 1.0).css("background", "var(--yellow)");
  });

  $("#about-btn, #email-btn").on("mouseout", animation);

  animation();
});
