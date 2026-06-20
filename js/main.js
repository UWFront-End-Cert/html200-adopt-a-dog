"use strict";

const dogCatalog = [
  {
    name: "Angus",
    breed: "Boxer Mix",
    age: "3 years",
    gender: "Male",
    fee: 125,
    image: "images/angus-card.jpg",
    description:
      "Angus is a playful, energetic boy who loves long walks and belly rubs. Great with older kids."
  },
  {
    name: "Duffy",
    breed: "Pit Bull Mix",
    age: "2 years",
    gender: "Male",
    fee: 140,
    image: "images/duffy-card.jpg",
    description:
      "Duffy is an affectionate and gentle pup who bonds quickly with his humans."
  },
  {
    name: "Jack",
    breed: "Terrier Mix",
    age: "5 years",
    gender: "Male",
    fee: 110,
    image: "images/jack-card.jpg",
    description:
      "Jack is a calm, easygoing companion who enjoys lounging on the couch just as much as fetch."
  },
  {
    name: "Jake",
    breed: "Shepherd Mix",
    age: "4 years",
    gender: "Male",
    fee: 150,
    image: "images/jake-card.jpg",
    description:
      "Jake is intelligent, loyal, and eager to please and thrives with routine."
  },
  {
    name: "Lucas",
    breed: "Border Collie Mix",
    age: "4 years",
    gender: "Male",
    fee: 165,
    image: "images/lucas-card.jpg",
    description:
      "Lucas is a smart, high-energy dog who needs an active family with room to run."
  },
  {
    name: "Luna",
    breed: "Labrador Mix",
    age: "1 year",
    gender: "Female",
    fee: 155,
    image: "images/luna-card.jpg",
    description:
      "Luna is a curious and sweet puppy who is full of love and bursting with energy."
  },
  {
    name: "Maximus",
    breed: "Great Dane Mix",
    age: "6 years",
    gender: "Male",
    fee: 170,
    image: "images/maximus-card.jpg",
    description: "Do not let his size fool you. Maximus is a gentle giant who loves cuddles."
  },
  {
    name: "Murphy",
    breed: "Beagle Mix",
    age: "3 years",
    gender: "Male",
    fee: 135,
    image: "images/murphy-card.jpg",
    description:
      "Murphy is a joyful explorer who loves sniffing out every adventure."
  },
  {
    name: "Piper",
    breed: "Australian Shepherd",
    age: "2 years",
    gender: "Female",
    fee: 145,
    image: "images/piper-card.jpg",
    description:
      "Piper is clever and loves to learn new tricks. Ideal for an active family."
  },
  {
    name: "Poppy",
    breed: "Golden Retriever Mix",
    age: "1 year",
    gender: "Female",
    fee: 160,
    image: "images/poppy-card.jpg",
    description:
      "Poppy is sweet and playful and gets along with everyone."
  },
  {
    name: "Stella",
    breed: "Doberman Mix",
    age: "5 years",
    gender: "Female",
    fee: 150,
    image: "images/stella-card.jpg",
    description:
      "Stella is a dignified and devoted companion who thrives in a calm, loving home."
  },
  {
    name: "Violet",
    breed: "Husky Mix",
    age: "3 years",
    gender: "Female",
    fee: 155,
    image: "images/violet-card.jpg",
    description:
      "Violet is spirited and full of personality. She needs space to run."
  }
];

const blogPosts = [
  {
    tag: "Lifestyle",
    title: "The Life-Changing Bond Between a Dog and Their Human",
    image: "images/blog-1.jpg",
    alt: "Person sitting with their dog at a scenic overlook",
    dateValue: "2026-05-20",
    dateText: "May 20, 2026",
    author: "Sarah M.",
    paragraphs: [
      "There is something special about the moment a rescue dog realizes they are finally home. Many adopters say that trust and affection begin to grow in just a few days.",
      "Beyond companionship, dog ownership can improve emotional well-being and routine. That daily bond often becomes the best part of the day."
    ],
    isFeatured: true
  },
  {
    tag: "Training",
    title: "5 Tips for Settling a Rescue Dog Into a New Home",
    image: "images/blog-2.jpg",
    alt: "Group of dogs on leashes in a city park",
    dateValue: "2026-04-12",
    dateText: "April 12, 2026",
    author: "James T.",
    paragraphs: [
      "A new environment can be overwhelming for rescue dogs. Keep the first week calm and predictable to build confidence."
    ],
    listType: "ol",
    listItems: [
      "Create a quiet safe space.",
      "Limit guests at first.",
      "Use a consistent feeding and walk schedule.",
      "Reward desired behavior immediately.",
      "Be patient and let trust develop."
    ]
  },
  {
    tag: "Health",
    title: "What to Expect at Your Dog's First Vet Visit",
    image: "images/blog-3.jpg",
    alt: "Person hugging a golden retriever",
    dateValue: "2026-03-05",
    dateText: "March 5, 2026",
    author: "Dr. Avery K.",
    paragraphs: [
      "A first vet visit helps establish a baseline for your dog health and ensures your new pet gets the right preventive care."
    ],
    listType: "ul",
    listItems: [
      "Review vaccine records.",
      "Complete a full physical exam.",
      "Discuss flea and parasite prevention.",
      "Check microchip information.",
      "Set nutrition and activity goals."
    ]
  }
];

let adoptionTotal = 0;

function showDogInfo(name, breed, fee) {
  alert(name + "\nBreed: " + breed + "\nAdoption Fee: $" + fee);
}

function addAdoptionTotal(event, name, breed, fee) {
  if (event) {
    event.preventDefault();
  }

  adoptionTotal += Number(fee) || 0;
  alert(
    name +
      " added to your adoption list.\nBreed: " +
      breed +
      "\nRunning Total: $" +
      adoptionTotal
  );
}

function createDogCard(dog, includeDescription) {
  const article = document.createElement("article");
  article.className = "dog-card";

  const image = document.createElement("img");
  image.src = dog.image;
  image.alt = dog.name;
  image.addEventListener("click", function () {
    showDogInfo(dog.name, dog.breed, dog.fee);
  });

  const body = document.createElement("div");
  body.className = "dog-card-body";

  const heading = document.createElement("h3");
  heading.textContent = dog.name;

  const breed = document.createElement("p");
  breed.className = "breed";
  breed.innerHTML =
    dog.breed + " &bull; " + dog.age + " &bull; " + dog.gender;

  body.appendChild(heading);
  body.appendChild(breed);

  if (includeDescription) {
    const description = document.createElement("p");
    description.className = "dog-desc";
    description.textContent = dog.description;
    body.appendChild(description);
  }

  const button = document.createElement("a");
  button.href = "checkout.html";
  button.className = "btn btn-sm";
  button.textContent = "Adopt " + dog.name;
  button.addEventListener("click", function (event) {
    addAdoptionTotal(event, dog.name, dog.breed, dog.fee);
  });

  body.appendChild(button);
  article.appendChild(image);
  article.appendChild(body);

  return article;
}

function renderDogCards() {
  const homeGrid = document.getElementById("home-dog-grid");
  if (homeGrid) {
    homeGrid.textContent = "";
    dogCatalog.slice(0, 4).forEach(function (dog) {
      homeGrid.appendChild(createDogCard(dog, false));
    });
  }

  const dogsGrid = document.getElementById("dogs-page-grid");
  if (dogsGrid) {
    dogsGrid.textContent = "";
    dogCatalog.forEach(function (dog) {
      dogsGrid.appendChild(createDogCard(dog, true));
    });
  }
}

function createBlogPost(post, featured) {
  const article = document.createElement("article");
  article.className = featured ? "blog-post blog-post--featured" : "blog-post";

  const imageWrap = document.createElement("div");
  imageWrap.className = "blog-post-image";
  const image = document.createElement("img");
  image.src = post.image;
  image.alt = post.alt;
  imageWrap.appendChild(image);

  const content = document.createElement("div");
  content.className = "blog-post-content";

  const tag = document.createElement("span");
  tag.className = "blog-tag";
  tag.textContent = post.tag;

  const heading = document.createElement("h2");
  const headingLink = document.createElement("a");
  headingLink.href = "#";
  headingLink.textContent = post.title;
  heading.appendChild(headingLink);

  const meta = document.createElement("p");
  meta.className = "blog-meta";
  const date = document.createElement("time");
  date.dateTime = post.dateValue;
  date.textContent = post.dateText;
  meta.appendChild(date);
  meta.appendChild(document.createTextNode(" \u2022 By " + post.author));

  content.appendChild(tag);
  content.appendChild(heading);
  content.appendChild(meta);

  post.paragraphs.forEach(function (paragraphText) {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    content.appendChild(paragraph);
  });

  if (post.listType && Array.isArray(post.listItems)) {
    const list = document.createElement(post.listType);
    post.listItems.forEach(function (itemText) {
      const item = document.createElement("li");
      item.textContent = itemText;
      list.appendChild(item);
    });
    content.appendChild(list);
  }

  const button = document.createElement("a");
  button.href = "#";
  button.className = "btn btn-sm";
  button.textContent = "Read More";
  content.appendChild(button);

  article.appendChild(imageWrap);
  article.appendChild(content);

  return article;
}

function renderBlogPosts() {
  const featuredRoot = document.getElementById("blog-featured-post");
  const gridRoot = document.getElementById("blog-posts-grid");

  if (!featuredRoot || !gridRoot) {
    return;
  }

  featuredRoot.textContent = "";
  gridRoot.textContent = "";

  const featuredPost = blogPosts.find(function (post) {
    return post.isFeatured;
  });

  if (featuredPost) {
    featuredRoot.appendChild(createBlogPost(featuredPost, true));
  }

  blogPosts
    .filter(function (post) {
      return !post.isFeatured;
    })
    .forEach(function (post) {
      gridRoot.appendChild(createBlogPost(post, false));
    });
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function setupContactForm() {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formValues = {
      fullName: String(formData.get("full_name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      contactDate: String(formData.get("contact_date") || "").trim(),
      dogInterest: String(formData.get("dog_interest") || "").trim(),
      householdSize: String(formData.get("household_size") || "").trim(),
      contactMethod: String(formData.get("contact_method") || "").trim(),
      newsletter: formData.get("newsletter") === "yes",
      message: String(formData.get("message") || "").trim()
    };

    const missingFields = [];

    if (!formValues.fullName) missingFields.push("Full Name");
    if (!formValues.email) missingFields.push("Email");
    if (!formValues.phone) missingFields.push("Phone Number");
    if (!formValues.contactDate) missingFields.push("Preferred Contact Date");
    if (!formValues.dogInterest) missingFields.push("Dog Interest");
    if (!formValues.householdSize) missingFields.push("Household Size");
    if (!formValues.contactMethod) missingFields.push("Contact Method");
    if (!formValues.message) missingFields.push("Message");

    if (missingFields.length > 0) {
      alert("Please complete all fields: " + missingFields.join(", "));
      return;
    }

    if (!isValidEmail(formValues.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Contact form submission:", formValues);
    alert("Thank you. The form information has been received");
    contactForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderDogCards();
  renderBlogPosts();
  setupContactForm();
});

window.showDogInfo = showDogInfo;
window.addAdoptionTotal = addAdoptionTotal;
