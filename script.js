let toggleBtn = document.querySelector(".toggleBtn");

let container = document.querySelector(".container");

toggleBtn.addEventListener("click", () => {
  container.classList.toggle("active");
});
