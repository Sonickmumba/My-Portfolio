const menuNavMobile = document.querySelector('.menu-nav-mobile');
const menuBar = document.querySelector('.menu-nav-mobile #menu');
const headline = document.querySelector('.headline-section');
const body = document.querySelector('body');

menuBar.addEventListener('click', () => {
  menuNavMobile.classList.toggle('show');
  body.classList.toggle('show');
  headline.classList.toggle('show');
  menuBar.classList.toggle('show');
});

const mobileLinks = document.querySelectorAll('.mobile-link a');
Array.from(mobileLinks).forEach((link) => {
  link.addEventListener('click', () => {
    menuNavMobile.classList.remove('show');
    body.classList.remove('show');
    headline.classList.remove('show');
    menuBar.classList.remove('show');
  });
});

// Dynamic insert of project-works

const worksDiv = document.getElementById('works');

const workCards = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot-Portfolio.svg',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://sonickmumba.github.io/My-Portfolio/',
    'source link': 'https://github.com/Sonickmumba/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot-Portfolio1.svg',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://sonickmumba.github.io/My-Portfolio/',
    'source link': 'https://github.com/Sonickmumba/My-Portfolio',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot-Portfolio2.svg',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://sonickmumba.github.io/My-Portfolio/',
    'source link': 'https://github.com/Sonickmumba/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot-Portfolio3.svg',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://sonickmumba.github.io/My-Portfolio/',
    'source link': 'https://github.com/Sonickmumba/My-Portfolio',
  },
];

// Function to display all the cards in the html

workCards.forEach((project) => {
  const workCard = document.createElement('section');
  workCard.className = 'works-card card-tonic';
  workCard.innerHTML = `<img class="snapshort tonic-img" src="${project.image}" alt="screenshot of Tonic project">
  <div class="left-block lb-tonic"> <div class="primary-container"> <h1 class="project-title">${project.name}</h1> <div class="frame2 frame-tonic"> <div class="client"><h3>CANOPY</h3></div> <img src="./images/Counter.png" alt="counter image"> <div class="role"><h3>Back End Dev</h3></div> <img src="./images/Counter.png" alt="counter image" class="dot"> <div class="year"><h3> 2022</h3></div> </div> </div> 
  <p class="project-description tonic"> ${project.description} </p> <ul class="dev-tools"> ${project.technologies.map((tech) => `<li class="dev-tool"> <p> ${tech}</p> </li>`).join('')} </ul> <form action="" class="projects"> <button type="button" class="go-projects">See projects</button> </form> </div>`;

  worksDiv.appendChild(workCard);
});

// adding the technologies to the popup window

const popupTitle = document.querySelector('#popup-title');
const popupImage = document.querySelector('#popup-img');
const popupDescription = document.querySelector('#popup-description');
const overlayWindow = document.querySelector('#overlay-window');
const popupBg = document.querySelector('#popup-bg');
const closeBtn = document.querySelector('.close-btn');
const liveDemo = document.querySelector('.demo');
const sourceLink = document.querySelector('.source-link');

const technologySkills = document.getElementById('popup-skills-buttons');
const ul = document.createElement('ul');
const li = document.createElement('li');
ul.className = 'dev-tools-popup';
li.className = 'dev-tool';
technologySkills.prepend(ul);

// create a function to populate the popup window

function populatePopup(index) {
  ul.innerHTML = ' ';
  popupTitle.innerHTML = workCards[index].name;
  popupImage.src = workCards[index].image;
  popupDescription.innerHTML = workCards[index].description;
  workCards[index].technologies.forEach((tech) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    li.className = 'dev-tool';
    p.innerHTML = tech;
    li.appendChild(p);
    ul.appendChild(li);
  });

  liveDemo.href = workCards[index]['live link'];
  sourceLink.href = workCards[index]['source link'];
}

const workButtons = document.querySelectorAll('.works-card .go-projects');
workButtons.forEach((btn) => btn.addEventListener('click', () => {
  overlayWindow.classList.add('pop');
  body.classList.add('pop');
  popupBg.classList.add('pop');
  populatePopup(Array.prototype.indexOf.call(workButtons, btn));
}));

// Add closing button function
closeBtn.addEventListener('click', () => {
  overlayWindow.classList.remove('pop');
  body.classList.remove('pop');
  popupBg.classList.remove('pop');
});

// Validate form //

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

function emailValidator(form, email, errorMessage) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value === email.value.toLowerCase()) {
      return form.submit();
    }
    email.classList.add('show');
    errorMessage.innerHTML = 'Please enter your email in lower case';
    return errorMessage;
  });
}

emailValidator(form, email, errorMessage);

// Store form data

const nameInput = document.querySelector('#name');
const textMessage = document.querySelector('#message');

const dataInput = {};
const storage = window.localStorage;

// function to Check if the storage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
      || e.code === 1014
      || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

// function to retrieve the data from the local storage


// function to populate the form
function populateForm(dataForm) {
  if (dataForm) {
    if (dataForm.name) {
      nameInput.value = dataForm.name;
    }
    if (dataForm.email) {
      email.value = dataForm.email;
    }
    if (dataForm.message) {
      textMessage.value = dataForm.message;
    }
  }
}

const dataForm = retrieveFormData();
populateForm(dataForm);

const inputs = [nameInput, email, textMessage];

inputs.forEach((formInput) => formInput.addEventListener('change', () => {
  dataInput.name = nameInput.value;
  dataInput.email = email.value;
  dataInput.message = textMessage.value;
  const storeData = JSON.stringify(dataInput);
  storage.setItem('formData', storeData);
}));