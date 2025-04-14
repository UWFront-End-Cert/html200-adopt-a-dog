// this is for clicks on button to show first alert //
document.addEventListener("DOMContentLoaded", function() {
  const adoptButtons = document.querySelectorAll(".adopt-button");

  adoptButtons.forEach(button => {
    button.addEventListener("click", function() {
      const card = button.closest(".dog-box");
      const name = card.querySelector(".dog-name").textContent;
      const fees = parseFloat(card.querySelector(".adopt-fees").textContent.replace("Cost to adopt: $", ""));
      alert(`Dog: ${name}\nAdoption Fees: $${fees}`);
    });
  });
});

// this is for clicks on photos //
document.addEventListener("DOMContentLoaded", function() {
  const adoptPhoto = document.querySelectorAll(".dog-profile-photo");

  adoptPhoto.forEach(img => {
    img.addEventListener("click", function() {
      const card = img.closest(".dog-box");
      const name = card.querySelector(".dog-name").textContent;
      const fees = parseFloat(card.querySelector(".adopt-fees").textContent.replace("Cost to adopt: $", ""));
      alert(`Dog: ${name}\nAdoption Fees: $${fees}`);
    });
  });
});

// this is for the alert to add to total of adoption buttons clicked //
document.addEventListener("DOMContentLoaded", function() {
  const adoptButtons = document.querySelectorAll(".adopt-button");
  let totalAdoptionFees = 0;

  adoptButtons.forEach(button => {
    button.addEventListener("click", function() {
      const card = button.closest(".dog-box");
      const fees = parseFloat(card.querySelector(".adopt-fees").textContent.replace("Cost to adopt: $", ""));
      totalAdoptionFees += fees;
      alert(`Total Adoption Fees: $${totalAdoptionFees}`);
    });
  });
});