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

  const blog = document.querySelector('#blog');
  const entries = [
    {
      title: 'Traveling With Your Dog',
      image: 'images/blog-1.jpg',
      snippet: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
      copy: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
      <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>`
    },
    {
      title: 'How To Walk Multiple Dogs',
      image: 'images/blog-2.jpg',
      snippet: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
      copy: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
      <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>`
    },
    {
      title: 'Teach Your Dog To Fetch!',
      image: 'images/blog-3.jpg',
      snippet: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
      copy: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
      <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>`
    }
  ];

  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i];

    const entryBody = document.createElement('article');
    entryBody.setAttribute('class', 'card');

    const entryImg = document.createElement('div');
    entryImg.setAttribute('class', 'card-img');
    const imageLoc = document.createElement('img');
    imageLoc.setAttribute('src', entry.image);

    const entryContent = document.createElement('div');
    entryContent.setAttribute('class', 'card-content');

    const entrySnippet = document.createElement('p');
    entrySnippet.setAttribute('class', 'snippet');
    entrySnippet.textContent = entry.snippet;

    const homeLink = document.createElement('p');
    homeLink.setAttribute('class', 'read-more');
    homeLink.innerHTML = '<a href="blog.html">Read more &gt;&gt;</a>';

    const entryTitle = document.createElement('h3');
    entryTitle.setAttribute('class', 'card-title');
    entryTitle.textContent = entry.title;

    const entryCopy = document.createElement('div');
    entryCopy.setAttribute('class', 'card-copy');
    entryCopy.innerHTML = entry.copy;

    //blog
    blog.appendChild(entryBody);
    entryImg.appendChild(imageLoc);
    entryBody.appendChild(entryImg);
    entryContent.appendChild(entryTitle);
    entryContent.appendChild(entryCopy);
    entryContent.appendChild(entrySnippet);
    entryContent.appendChild(homeLink);
    entryBody.appendChild(entryContent);
  }
