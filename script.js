
const skeleton =
document.getElementById("skeleton-container");

const services =
document.getElementById("services-container");


setTimeout(function () {
   //test visible after 1.5 seconds
   skeleton.style.display = "none";
   services.style.display = "block";
}, 1500);