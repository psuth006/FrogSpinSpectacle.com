// JavaScript to toggle the spinning class on the frog
const frog = document.getElementById("frog");
const button = document.getElementById("spinButton");

button.addEventListener("click", () => {
    frog.classList.toggle("spinning");
});
