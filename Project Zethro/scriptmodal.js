// Get the modal element
const modal = document.getElementById("myModal");

// Get all the image elements that trigger the modal
const modalTriggers = document.querySelectorAll(".modal-trigger");

// Get the close button element
const closeButton = document.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add click event listeners to all the image triggers
modalTriggers.forEach(function(trigger) {
  trigger.addEventListener("click", openModal);
});

// Add a click event listener to the close button
closeButton.addEventListener("click", closeModal);