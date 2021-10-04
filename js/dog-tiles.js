$(document).ready(function () {
  const dogCard = $(".card");

  dogCard
    .mouseover(function () {
      $(this).addClass("slow").addClass("hover-state");
    })
    .mouseleave(function () {
      $(this).removeClass("hover-state");
    });

  $("button").ripples({
    resolution: 500,
    dropRadius: 10,
    perturbance: 0.02,
  });
});
