document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  function updateCartInfo() {
    const checkoutInfo = document.getElementById('checkout-info');
    let infoHTML = '';

    if (cart.length > 0) {
      infoHTML += '<h2>Cart:</h2>';

      cart.forEach((dog) => {
        infoHTML += `
          <p>Adopted Dog: ${dog.dogName}</p>
          <p>Breed: ${dog.breed}</p>
          <p>Adoption Fee: $${dog.adoptionFee}</p>
          <hr>
        `;
      });

      infoHTML += `<p>Total: $${total}</p>`;
    } else {
      infoHTML = '<p>No dogs in the cart.</p>';
    }

    checkoutInfo.innerHTML = infoHTML;
  }

  const adoptButtons = document.querySelectorAll('.adoptbutton');

  adoptButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dogContainer = button.closest('.dog-container');
      const dogName = dogContainer.querySelector('.dogsname').textContent;
      const breed = dogContainer.querySelector('p:nth-child(3)').textContent;
      const adoptionFee = 150;

      cart.push({ dogName, breed, adoptionFee });
      total += adoptionFee;

      alert(`Added ${dogName} to cart. Total: $${total}`);
      updateCartInfo();

      // Store cart in localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  });

  // Load cart info on page load
  updateCartInfo();

  const urlParams = new URLSearchParams(window.location.search);
  const checkoutInfo = document.getElementById('checkout-info');

  if (urlParams.has('dogName') && urlParams.has('breed') && urlParams.has('total')) {
    const dogName = urlParams.get('dogName');
    const breed = urlParams.get('breed');
    total = parseInt(urlParams.get('total'));

    const infoHTML = `
      <p>Adopted Dog: ${dogName}</p>
      <p>Breed: ${breed}</p>
      <p>Total: $${total}</p>
    `;
    checkoutInfo.innerHTML = infoHTML;
  } else {
    checkoutInfo.textContent = 'No dog information available.';
  }
});
// Show Dogs Name on Click of Photo
function showDogName(dogName) {
  alert(`Clicked on ${dogName}'s photo!`);
}
