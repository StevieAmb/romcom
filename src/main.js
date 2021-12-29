
//MAKE COVER INPUT BOXES
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputDescriptor1 = document.querySelector('.user-desc1');
var inputDescriptor2 = document.querySelector('.user-desc2');

//DEFAULT HTML ELEMENTS
var image = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

//BUTTONS
var makeMyBookButton = document.querySelector('.create-new-book-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveButton = document.querySelector('.save-cover-button');
var randomizerButton = document.querySelector('.random-cover-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');

//VIIEWS
var formPage = document.querySelector('.form-view');
var homePage = document.querySelector('.home-view');
var displaySavedCoversPage = document.querySelector('.view.saved-view.hidden');

//DATA MODEL
var currentCover;
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];




//  Add your functions here 👇
let getRandomIndex = (array => Math.floor(Math.random() * array.length));

const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
}

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
}

const randomizeCovers = () => {
  image.src = covers[getRandomIndex(covers)];
  bookTitle.innerText = titles[getRandomIndex(titles)];
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(image.src, bookTitle.innerText, descriptor1.innerText, descriptor2.innerText)
}

const displaySavedCover = () => {
  displaySavedCoversPage.innerHTML = ""
  for (var i = 0; i <savedCovers.length; i++) {
    displaySavedCoversPage.innerHTML +=
    `<section class="mini-cover">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`
  }
  showSavedView();
}
// makeMyBookButton.addEventListener('click', (event) => {
// makeUserCover(event)});

const showCover = (event) => {
  savedCovers.push(currentCover);
  savedCovers.forEach(savedCover => {
    displaySavedCoversPage.innerHTML = ``;
    displaySavedCoversPage.innerHTML +=
    `<section class="mini-cover">
    <img class="cover-image" src="${savedCover.cover}">
    <h2 class="cover-title">${savedCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCover.tagline1}</span> and <span class="tagline-2">${savedCover.tagline2}</span></h3>
    </section>'`
  });
  console.log(savedCovers);
}

const pushUserInput = () => {
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);
}

function makeUserCover(){
  // event.preventDefault();
  console.log(event);
  image.src = inputCover.value;
  bookTitle.innerText = inputTitle.value;
  descriptor1.innerText = inputDescriptor1.value;
  descriptor2.innerText = inputDescriptor2.value;
  currentCover = new Cover(image.src, bookTitle.innerText, descriptor1.innerText, descriptor2.innerText);
  pushUserInput();
  showHomeView();
}

const showHomeView = () => {
  show([saveButton, randomizerButton, homePage]);
  hide([homeButton, displaySavedCoversPage, formPage]);
}

const showSavedView = () => {
  show([homeButton, displaySavedCoversPage]);
  hide([saveButton, randomizerButton, formPage, homePage]);
}

const showFormView = () => {
  show([homeButton, formPage]);
  hide([randomizerButton, saveButton, homePage, displaySavedCoversPage]);
}




// // Add your event listeners here 👇
document.onload = randomizeCovers();
randomizerButton.addEventListener('click', randomizeCovers);
homeButton.addEventListener('click', showHomeView);
makeYourOwnCoverButton.addEventListener('click', showFormView);
viewSavedButton.addEventListener('click', displaySavedCover);
saveButton.addEventListener('click', showCover);
