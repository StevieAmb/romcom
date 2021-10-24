// Iteration 4 - Saving & Viewing Covers
// Material phase -
// When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array -
//- Push array into a saved covers array
//
//
//  When a user clicks the “View Saved Covers” button, we should see the saved covers section
//  This is working with classes for the view.
//  All the covers in the savedCovers array should be displayed in the saved covers section
//
// OOOoooooo what?
//
// 4.  If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates)  If statement
//
// function saveReview(newReview, reviews) {
//   for (var i = 0; i < reviews.length; i++) {
//     if (reviews[i] === newReview) {
//       return reviews
//     }
//   }
//     reviews.push(newReview);
//     return reviews
// }
//
// Note: None of this needs to persist on page load


//MAKE FORM PAGE VARIABLES
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputDescriptor1 = document.querySelector('.user-desc1');
var inputDescriptor2 = document.querySelector('.user-desc2');


var image = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var createBookButton = document.querySelector('.create-new-book-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var randomButton = document.querySelector('.random-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button.hidden');

var viewForm = document.querySelector('.view.form-view.hidden');
var homeView = document.querySelector('.view.home-view');
var viewSavedCoversView = document.querySelector('.view.saved-view.hidden');


// Event Listeners
randomButton.addEventListener('click', pageLoad);
//window.addEventListener('load', pageLoad);
//RANDOMIZE COVER WITH BUTTON
//document.addEventListener('DOMContentLoaded', pageLoad);
document.onload = pageLoad();
//window.onload = pageLoad();
homeButton.addEventListener('click', showHomeView);
makeNewCoverButton.addEventListener('click', showFormView);
viewSavedButton.addEventListener('click', showSavedView);
createBookButton.addEventListener('click', makeUserCover);
saveCoverButton.addEventListener('click', saveCover);

function saveCover(){
  makeUserCover();
  for (var i = 0; i <savedCovers.length; i++) {
  viewSavedCoversView.innerHTML =
  `<section class="mini-cover">
  <img class="cover-image" src="${savedCovers[i].cover}">
  <h2 class="cover-title">${savedCovers[i].title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
  </section>`;
  savedCovers.push(currentCover);
  }
  showSavedView();
}

function pushUserInput() {
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);
}// This function takes in a value in a input box and pushes the value into
//the covers array.

function makeUserCover() {
event.preventDefault();
currentCover = new Cover(image.src, bookTitle.innerText, descriptor1.innerText, descriptor2.innerText);
pushUserInput();
image.src = inputCover.value;
bookTitle.innerText = inputTitle.value;
descriptor1.innerText = inputDescriptor1.value;
descriptor2.innerText = inputDescriptor2.value;
showHomeView();
}

function showHomeView() { //shows the form view
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  homeView.classList.remove('hidden');
  viewSavedCoversView.classList.add('hidden');
  viewForm.classList.add('hidden');
}

function showSavedView() { //shows the saved view covers form
  saveCoverButton.classList.add('hidden');
  randomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  viewSavedCoversView.classList.remove('hidden');
  viewForm.classList.add('hidden');
}

function showFormView() { //shows the view of the form
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  viewForm.classList.remove('hidden');
  homeView.classList.add('hidden');
  viewSavedCoversView.classList.add('hidden');
}

function pageLoad() { //assigns randomized images, titles, descriptors to variables that hold HTML elements
   image.src = covers[getRandomIndex(covers)];
   bookTitle.innerText = titles[getRandomIndex(titles)];
   descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
   descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
 }

 function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
 }


var savedCovers = [
 new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];
//var currentCover;
//
// // Add your event listeners here 👇
function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
