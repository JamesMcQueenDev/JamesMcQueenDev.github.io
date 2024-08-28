const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    OpenModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".Modal");
    CloseModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.Active");
  modals.forEach((modal) => {
    CloseModal(modal);
  });
});

//Adds Modal to the Site
function OpenModal(modal) {
  if (modal == null) {
    return;
  }
  console.log("Hit");
  modal.classList.add("Active");
  overlay.classList.add("Active");
}

function CloseModal(modal) {
  if (modal == null) {
    return;
  }
  console.log("Hit");
  modal.classList.remove("Active");
  overlay.classList.remove("Active");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let backtotop = document.querySelector(".back-to-top"); // Select the <a> element within the .back-to-top element

if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 0) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };

  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop); // Change 'onscroll(document, toggleBacktotop)' to 'window.addEventListener("scroll", toggleBacktotop)'
}
