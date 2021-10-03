$(document).ready(function () {
  const dogCard = $(".card");

  dogCard
    .mouseover(function () {
      $(this).addClass("slow").addClass("hover-state");
    })
    .mouseleave(function () {
      $(this).removeClass("hover-state");
    });
});
