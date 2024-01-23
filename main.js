const GRIDSIZE = 16;
const boxSize = 970;
var useRgbColor = false;

const btnDrawGrid = document.querySelector("#btnChangeArea");
const rangeSlider = document.querySelector(".rangeSlider");
const rangeOutput = document.querySelector("#rangeOutput");
const rgbButton = document.querySelector("#btnRgb");

rangeSlider.addEventListener("input", (event) => {
    let sliderVal = event.target.value;
    rangeOutput.textContent = sliderVal + " x " + sliderVal;});

btnDrawGrid.addEventListener("click", function () {
    let rangeValue = rangeSlider.value;
    createGrid(rangeValue);
});

rgbButton.addEventListener("click", (event) => {

    if (useRgbColor) {
        useRgbColor = false;
        rgbButton.classList.remove("rgb");
    }
    else {
        useRgbColor = true;
        rgbButton.classList.add("rgb");
    }
})

function createGrid(size) {
    const containerDiv = document.querySelector(".container");

    //clearing old container div and reset color
    containerDiv.innerHTML = '';
    useRgbColor = false;

    for (let i = 0; i < size * size; i++) 
    {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("gridElement");

        gridDiv.addEventListener("mousemove", function name(e) {

            if (useRgbColor) 
            {
                e.target.style.backgroundColor = `rgb(${getRandomRGBColor()}, ${getRandomRGBColor()}, ${getRandomRGBColor()})`;
            }
            else
            {
                e.target.style.backgroundColor = "black";
            }
        });

        gridDiv.style.flexBasis = `${100 / size}%`;
        gridDiv.style.flexGrow = 0;
        gridDiv.style.flexShrink = 0;
        gridDiv.style.margin = 0;
        gridDiv.style.padding = 0;

        containerDiv.appendChild(gridDiv);
    }

}

function getRandomRGBColor() {

    let min = Math.ceil(0);
    let max = Math.floor(255);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

createGrid(GRIDSIZE);