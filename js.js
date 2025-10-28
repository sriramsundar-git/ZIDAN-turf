const form = document.getElementById("bookingForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  popup.style.display = "flex"; 
  form.reset(); 
});

closePopup.addEventListener("click", function() {
  popup.style.display = "none"; 
});
