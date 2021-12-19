let firstbox;

allColors = ["red", "green", "blue", "yellow", "purple", "brown", "gold", "orange", "teal"];

function changeButton() {

    firstbox = document.getElementById("first");
    firstbox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "dotted 2px maroon"
}