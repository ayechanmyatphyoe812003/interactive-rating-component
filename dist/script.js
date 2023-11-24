const form = document.getElementById("form");
form.addEventListener("submit", () => {
  const data = form.elements.rating.value;
  localStorage.setItem("rating", data);
});
