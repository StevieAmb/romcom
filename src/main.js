function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}

//MATERIALS
//Make Your Own Cover button variable
//Show New Random Cover button variable
//View Saved Covers button variable
//home


var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var randomButton = document.querySelector('.random-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button.hidden');


//FORMS WE NEED TO ACCESS
var viewForm = document.querySelector('.view.form-view.hidden');
var homeView = document.querySelector('.view.home-view');
var viewSavedCoversView = document.querySelector('.view.saved-view.hidden');

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

console.log(viewForm.classList.remove('.hidden'));
//TWO VIEWS
//saved cover page
//home page
//form page


//PSEUDOCODE
//Time 2 -
//
//Time 3 -
//on pages that aren't the HopePageView, we are creating an addEventListener
//from the home button to the HomePage




//PROJECT DIRECTIONS
// NOTE: in this iteration, you are not worrying about making the form WORK, and you are not worrying about saving or displaying covers. You simply want to make sure the views can be switched when you click the appropriate buttons.
//
// In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks
// When a user clicks the “Home” button, we should only see the Home section
// When a user clicks the “Home” button, the home button should be hidden
// When a user clicks the “Home” button, the “Show New Random Cover” and “Save Cover” buttons should be visible again
// Hint: go check out the HTML and CSS files to see how the form and saved covers sections are being hidden in the first place




//FUNCTIONS
//makeNewCoverButton.addEventListener('click',  );

// function showForm() {
//
// }



var image = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

//RANDOMIZE COVER WITH BUTTON
window.addEventListener('load', pageLoad);
//document.addEventListener('DOMContentLoaded', pageLoad);
 //document.onload = pageLoad();
 //window.onload = pageLoad();
 randomButton.addEventListener('click', pageLoad);

// function randomCover() { //assigns randomized images, titles, and descriptors to variables that hold HTML elements
//   var image = document.querySelector('img');
//   image.src = covers[getRandomIndex(covers)]
//   var bookTitle = document.querySelector('h2');
//   bookTitle.innerText = titles[getRandomIndex(titles)];
//   var descriptor1 = document.querySelector('.tagline-1');
//   descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
//   var descriptor2 = document.querySelector('.tagline-2');
//   descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
// }
function pageLoad() { //assigns randomized images, titles, descriptors to variables that hold HTML elements
   image.src = covers[getRandomIndex(covers)];
   bookTitle.innerText = titles[getRandomIndex(titles)];
   descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
   descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
 }




var savedCovers = [
new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];
//var currentCover;
//
// // Add your event listeners here 👇
