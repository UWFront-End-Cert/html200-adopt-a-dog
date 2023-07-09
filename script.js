// Get all dog containers
const dogContainers = document.querySelectorAll('.dog-container');

// Add click event listener to each dog container
dogContainers.forEach((container) => {
  const dogName = container.querySelector('.dogsname').textContent;

  container.addEventListener('click', () => {
    alert(`Clicked on ${dogName}'s photo!`);
    // You can add more code here to display additional dog information
  });
});
// Get all adopt buttons
const adoptButtons = document.querySelectorAll('.adoptbutton');
let total = 0;

// Add click event listener to each adopt button
adoptButtons.forEach((button) => {
  button.addEventListener('click', () => {
    total++;
    alert(`Added to total: ${total}`);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Get all dog containers
  const dogContainers = document.querySelectorAll('.dog-container');

  // Add click event listener to each dog container
  dogContainers.forEach((container) => {
    const dogName = container.querySelector('.dogsname').textContent;

    container.addEventListener('click', () => {
      alert(`Clicked on ${dogName}'s photo!`);
      // You can add more code here to display additional dog information
    });
  });

  // Get all adopt buttons
  const adoptButtons = document.querySelectorAll('.adoptbutton');
  let total = 0;

  // Add click event listener to each adopt button
  adoptButtons.forEach((button) => {
    button.addEventListener('click', () => {
      total++;
      alert(`Added to total: ${total}`);
    });
  });
});


