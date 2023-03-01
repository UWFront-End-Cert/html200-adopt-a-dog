const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const dogName = card.querySelector('.dog-name').textContent;
  const dogBreed = card.querySelector('.dog-breed').textContent;
  const dogPrice = card.querySelector('.dog-price').textContent;

  card.querySelector('img').addEventListener('click', () => {
    alert(`Dog Name: ${dogName}\n${dogBreed}\n${dogPrice}`);
  });
});

const buttons = document.querySelectorAll(".card-button");
let total = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const cardContainer = this.parentNode.parentNode;
    const price = parseFloat(cardContainer.querySelector(".dog-price").textContent.split("$")[1]);
    const dogName = cardContainer.querySelector(".dog-name").textContent.trim();

    if (this.textContent === "Adopt") {
      total += price;
      this.textContent = "Remove";
      this.classList.add("adopted");
      alert(`You've added ${dogName} to you cart. \n\nYour total is now $${total.toFixed(2)}`);
    } else {
      total -= price;
      this.textContent = "Adopt";
      this.classList.remove("adopted");
    }
    document.querySelector(".cart-price p").textContent = "$" + total.toFixed(2);
  });
});

