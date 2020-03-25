// dogInfo
// addUp
// #cart-total

function dogInfo(name,breed,cost) {
  alert('This is ' + name + ', they are a ' + breed + '. It is $' + cost + ' to bring them home with you!');
}

let total = 0;

function addUp(cost) {
  total += cost;
  alert('Total: $' + total);

  // a little something extra = updates cart total in header, but only for the page you are on (for now)
  document.getElementById("cart-total").innerHTML = total;
};

  const blog = document.getElementById('blog');
  const entries = [
    {
      title: 'Traveling With Your Dog'
    },
    {
      title: 'How To Walk Multiple Dogs'
    },
    {
      title: 'Teach Your Dog To Fetch!'
    }
  ];

  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i];
    const entryTitle = document.createElement('h3');
    entryTitle.textContent = entry.title;

    blog.appendChild(entryTitle);
  }
