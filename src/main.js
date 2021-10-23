function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}

var image = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var randomButton = document.querySelector('.random-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button.hidden');
var viewForm = document.querySelector('.view.form-view.hidden');
var homeView = document.querySelector('.view.home-view');
var viewSavedCoversView = document.querySelector('.view.saved-view.hidden');

randomButton.addEventListener('click', pageLoad);
window.addEventListener('load', pageLoad);
//RANDOMIZE COVER WITH BUTTON
//document.addEventListener('DOMContentLoaded', pageLoad);
 //document.onload = pageLoad();
 //window.onload = pageLoad();
homeButton.addEventListener('click', showHomeView);
makeNewCoverButton.addEventListener('click', showFormView);
viewSavedButton.addEventListener('click', showSavedView)

function showHomeView() {
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  homeView.classList.remove('hidden');
  viewSavedCoversView.classList.add('hidden');
  viewForm.classList.add('hidden');
}

function showSavedView() {
  saveCoverButton.classList.add('hidden');
  randomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  viewSavedCoversView.classList.remove('hidden');
  viewForm.classList.add('hidden');
}

function showFormView() {
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
