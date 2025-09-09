// Global variable example
let globalColor = "green";

// Function with parameter & return value
function changeBoxColor(elementId, color) {
  let box = document.getElementById(elementId);
  box.style.backgroundColor = color;
  return `Box ${elementId} changed to ${color}`;
}

// Toggle animation on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  let message = changeBoxColor("box1", "purple"); // Reuse function
  console.log(message);

  document.getElementById("box1").classList.toggle("animate");
});

// Modal logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
