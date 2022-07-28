let slider = document.getElementById("myRange");
let sliderOutput = document.getElementById("value_h");
var colorS = 'red'; // Only var works with window.colorS //
const gridContainer = document.getElementsByClassName("grid_container")[0];

gridCreate(32);     
sliderOutput.innerHTML = slider.value;
sliderOutput.innerHTML = "32" + " x " + "32";  // To match the initial slider position //
slider.oninput = function () {
    sliderOutput.innerHTML = this.value + " x " + this.value;
    gridClear();
    gridCreate(this.value);
}


let colorSelection = (color) => { // if statements will return gird_item_active color? //
    clearFocus();
    document.getElementById(color).classList.toggle('colors_focus');
    window.colorS = color;
}

function clearFocus(){
    document.getElementById("red").classList.remove("colors_focus");
    document.getElementById("yellow").classList.remove("colors_focus");
    document.getElementById("orange").classList.remove("colors_focus");
    document.getElementById("green").classList.remove("colors_focus");
    document.getElementById("blue").classList.remove("colors_focus");
    document.getElementById("purple").classList.remove("colors_focus");
    document.getElementById("white").classList.remove("colors_focus");
    document.getElementById("black").classList.remove("colors_focus");
    document.getElementById("gray").classList.remove("colors_focus");
    document.getElementById("aqua").classList.remove("colors_focus");
    document.getElementById("brown").classList.remove("colors_focus");
    document.getElementById("pink").classList.remove("colors_focus");
    document.getElementById("eraser").classList.remove("colors_focus");
}


function gridClearButton(){
    gridClear();
    gridCreate(slider.value);
}


function gridClear() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


function gridCreate(size) {
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + size + ', auto )');
    gridContainer.style.setProperty('grid-template-rows', 'repeat(' + size + ', auto');

    for(let i = 0; i < size*size; i++) {
        const gridChild = document.createElement("div");
        gridChild.className = "grid_item";
        document.getElementsByClassName("grid_container")[0].appendChild(gridChild);
    }
}


const colorApply = (e) => {
    if (e.target.classList.contains('grid_item')) {
        if(colorS == "eraser"){
            console.log("it works in");
            e.target.classList.remove('red');
            e.target.classList.remove('yellow');
            e.target.classList.remove('orange');
            e.target.classList.remove('green');
            e.target.classList.remove('blue');
            e.target.classList.remove('purple');
            e.target.classList.remove('white');
            e.target.classList.remove('black');
            e.target.classList.remove('gray');
            e.target.classList.remove('aqua');
            e.target.classList.remove('brown');
            e.target.classList.remove('pink');
        }else{
        e.target.classList.toggle(colorS);
        console.log("it works out");
        }
    }
}

document.querySelector('.grid_container').addEventListener('click', colorApply);