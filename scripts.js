let total = 0;

// Alert dog info when image is clicked
function showDogInfo(name, breed, fee) {
    alert(`Dog Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
}

// Add fee to total when Adopt button is clicked
function addToTotal(fee) {
    total += fee;
    alert(`Total Adoption Fees: $${total.toFixed(2)}`);
}

// Attach handlers once page is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const dogCards = document.querySelectorAll('.dog-card');

    dogCards.forEach(card => {
        const name = card.querySelector('h3')?.textContent.trim();
        const img = card.querySelector('img');
        const costText = card.querySelector('p:last-of-type')?.textContent;
        const button = card.querySelector('button');

        if (!name || !img || !costText || !button) return;

        const breed = 'Unknown'; // Replace if you have breed data
        const feeMatch = costText.match(/\$([0-9.,]+)/);
        const fee = feeMatch ? parseFloat(feeMatch[1].replace(/,/g, '')) : 0;

        img.addEventListener('click', () => showDogInfo(name, breed, fee));
        button.addEventListener('click', () => addToTotal(fee));
    });
});