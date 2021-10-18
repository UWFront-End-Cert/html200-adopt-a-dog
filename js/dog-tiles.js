$(document).ready(function () {
  // apply hover state to dog tiles
  const dogCard = $(".card");
  dogCard
    .mouseover(function () {
      $(this).addClass("slow").addClass("hover-state");
    })
    .mouseleave(function () {
      $(this).removeClass("hover-state");
    });

  // card bounces after it's been clicked
  dogCard.click(function () {
    $(this).effect("bounce", { times: 1 }, 1000);
  });

  // apply ripple effect on buttons
  $("button").ripples({
    resolution: 500,
    dropRadius: 10,
    perturbance: 0.2,
  });
});
