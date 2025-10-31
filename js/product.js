
var nav = document.getElementById("nav");
function Scroll1() {
if (window.scrollY >70) {
nav.style.top = "-500px"; 
} else {
nav.style.top = "0";
}
}
window.addEventListener("scroll", Scroll1);




document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("btn");
const footer = document.querySelector("footer"); 
if (!btn) {
console.error("<button id='btn'> في HTML");
return;
}
function updateBtnVisibilityAndPosition() {
if (window.scrollY > 600) {
btn.classList.add("show");
} else {
btn.classList.remove("show");
}
if (footer) {
const footerRect = footer.getBoundingClientRect();
const windowHeight = window.innerHeight;
if (footerRect.top < windowHeight) {
const overlap = Math.max(0, windowHeight - footerRect.top);
btn.style.bottom = `${overlap + 20}px`;
} else {
btn.style.bottom = "30px";
}
}
}
updateBtnVisibilityAndPosition();
window.addEventListener("scroll", updateBtnVisibilityAndPosition);
window.addEventListener("resize", updateBtnVisibilityAndPosition);
btn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});
});








