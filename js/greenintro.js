

// hide the nav when 
var nav = document.getElementById("nav");
function Scroll1() {
if (window.scrollY >70) {
nav.style.top = "-80px"; 
} else {
nav.style.top = "0";
}
}
window.addEventListener("scroll", Scroll1);





// show the button when scroll and show it above the footer

var btn = document.getElementById("btn");
window.addEventListener("scroll", function() {
if (window.scrollY > 400) {
 btn.classList.add("show");
} else {
btn.classList.remove("show");
}
});
btn.addEventListener("click", function() {
window.scrollTo({ top: 0, behavior: "smooth" });
});



































