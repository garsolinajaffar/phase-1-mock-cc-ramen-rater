const baseURL = "http://localhost:3000";
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const newRamenForm = document.querySelector("#new-ramen");

// Fetch all ramens from API and display images in #ramen-menu
function getRamenMenu() {
  fetch(`${baseURL}/ramens`)
    .then((response) => response.json())
    .then((ramens) => {
      ramens.forEach((ramen) => {
        // create img tag and set src attribute to ramen image
        // append img tag to #ramen-menu div
      });
    });
}

// Display the details for the selected ramen in #ramen-detail
function showRamenDetail(ramen) {
  // set #ramen-detail innerHTML to display ramen info
}

// Add event listeners for #ramen-menu and #new-ramen form
function addEventListeners() {
  // add click listener to #ramen-menu
  // add submit listener to #new-ramen form
}

// Initialize app by fetching ramen menu and adding event listeners
function init() {
  getRamenMenu();
  addEventListeners();
}

// Call init function to start app
init();
