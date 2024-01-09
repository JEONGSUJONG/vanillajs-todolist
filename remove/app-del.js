const h1 = document.querySelector("div.hello:first-child h1");

// --------------------------------------- //
// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.className == clickedClass) {
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }
// h1.addEventListener("click", handleTitleClick);

// --------------------------------------- //
// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }
// h1.addEventListener("click", handleTitleClick);
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList

// --------------------------------------- //
function handleTitleClick() {
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);