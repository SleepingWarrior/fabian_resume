$(document).ready(() => {});

const animation = () => {
  $("#about-btn, #email-btn").fadeTo(1000, 0.2).css("background", "#333").fadeTo(1000, 1.0, animation);
};

$("#about-btn, #email-btn").on("mouseover", () => {
  $("#about-btn, #email-btn").stop(true).fadeTo(1.0, 1.0).css("background", "var(--yellow)");
});

$("#about-btn, #email-btn").on("mouseout", animation);

animation();