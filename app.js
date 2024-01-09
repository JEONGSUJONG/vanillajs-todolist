const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.innerText = "Mouse was clicked";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}
function handleMouseLeave() {
  h1.innerText = "Bye";
}
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
  document.body.style.backgroundColor = "blue";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("No Wifi");
}
function handleWindowOnline() {
  alert("Connected");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
