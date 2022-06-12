//select all element

const fontSize = document.querySelector("#font-size");
const bgColor = document.querySelector("#bg-color");
const resetButton = document.querySelector("#btn");
const mainText = document.querySelector("#innerText");

//change the font size 
fontSize.addEventListener("change", (event) => {
    const newFontSize = event.target.value;
    mainText.style.fontSize = newFontSize;
    localStorage.setItem("fontSize", newFontSize);
});

//change the bgColor
bgColor.addEventListener("change", (event) => {
    const newBgColor = event.target.value;
    mainText.style.backgroundColor = newBgColor;
    localStorage.setItem("bgColor", newBgColor);
});
///initially setup the value
const initiallySetup = () => {
    const getFontSize = localStorage.getItem("fontSize");
    const getBgColor = localStorage.getItem("bgColor");
    mainText.style.fontSize = getFontSize;
    mainText.style.backgroundColor = getBgColor;
}
initiallySetup();


//remove the localStorage value
resetButton.addEventListener("click", () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
});