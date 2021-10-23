// ITERATION 3
// Step 1 - In the new cover form view, users should be able to fill out the four input fields and then hit the Make My Book button
// When the Make My Book button is clicked, several things will happen:
// Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
// Use the values from the inputs to create a new instance of the Cover class
// Change back to the main home view (hiding the form view again)
// Display the newly created cover image, title, and descriptors in the main cover


// Step 1 -
//we need to capture data in input fields
//when user hits the Make My Book button


// Materials
//The four input fields - 4 fields
//an event listeners
//function that happens when we hit the button.
//Make My Book Button - mat

//put the input.value in a variable, that's how we store it.

//FUNCTIONS
//take in input from the boxes and store them somewhere
//functions also need to the push the data into the respective arrays
//we can user userStorage as argument
//the function needs to change the page when the button is clicked
//shoot the user cover (which is the userCover, userTitle, userDecs 1 & 2)
//to the main page.

// var userTitle = titles[titles.length -1];
// var userDescr1 = descriptors[descriptors.length - 2];
// var userDescr2 = descriptors[descriptors.length - 1];

//MAKE FORM PAGE VARIABLES
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputDescriptor1 = document.querySelector('.user-desc1');
var inputDescriptor2 = document.querySelector('.user-desc2');

var createBookButton = document.querySelector('.create-new-book-button');

// Event Listeners
//We need 5.
//
inputCover.addEventListener('keyup', pushUserCover);
inputTitle.addEventListener('keyup', pushUserTitle);
inputDescriptor1.addEventListener('keyup', pushDescriptor1);
inputDescriptor2.addEventListener('keyup', pushDescriptor2);

function pushUserCover() {
  var userCover = inputCover.value;
  covers.push(userCover);
  console.log(userCover);
}// This function takes in a value in a input box and pushes the value into
//the covers array.

function pushUserTitle() {
  var userTitle = inputTitle.value;
  titles.push(userTitle);
  console.log(userTitle);
}// This function takes in a value in a input box and pushes the value into
//the titles array.


function pushDescriptor1() {
  var userDescr1 = inputDescriptor1.value;
  descriptors.push(userDescr1);
  console.log(userDescr1);
}// This function takes in a value in a input box and pushes the value into
//the descriptors array (the second to last indexed item).

function pushDescriptor2() {
  var userDescr2 = inputDescriptor2.value;
  descriptors.push(userDescr2);
  console.log(userDescr2);
}// This function takes in a value in a input box and pushes the value into
//the descriptors array.

createBookButton.addEventListener('click', collectInputs);



function collectInputs() {
  window.removeEventListener("click", pageLoad);
  userCover = covers[covers.length - 1];
  userTitle = titles[titles.length - 1];
  userDescr1 = descriptors[descriptors.length - 2];
  userDescr2 = descriptors[descriptors.length - 1];
var savedCovers = [
  new Cover(userCover, userTitle, userDescr1, userDescr2)];
image.src = savedCovers[0].cover;
bookTitle.innerText = savedCovers[0].title;
descriptor1.innerText = savedCovers[0].tagline1;
descriptor2.innerText = savedCovers[0].tagline2;


  console.log(userCover, userTitle, userDescr1, userDescr2);
}

//
// createBookButton.addEventListener('click', );








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


// var savedCovers = [
// new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];
//var currentCover;
//
// // Add your event listeners here 👇
function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
