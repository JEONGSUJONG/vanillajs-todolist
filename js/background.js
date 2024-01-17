const images = [
  "0.gif",
  "1.gif",
  "2.gif",
  "4.gif"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);