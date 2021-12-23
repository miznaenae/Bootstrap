let firstbox;
let newBorder;

allColors = ["red", "green", "blue", "yellow", "purple", "brown", "gold", "orange", "teal"];
allBorders = ["dotted", "solid", "groove", "double", "inset", "outset", "ridge"];

function changeButton() {
    firstbox = document.getElementById("first");
    firstbox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allBorders.length)] + "2px" +
        allColors[Math.floor(Math.random() * allColors.length)]
    firstbox.style.border = newBorder;

}