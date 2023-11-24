const rating_number = document.getElementById("rating-number");
const data = localStorage.getItem("rating");
rating_number.innerText = data;
