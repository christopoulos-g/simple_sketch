let slider = document.getElementById("myRange");
let sliderOutput = document.getElementById("value_h");
var colorS = 'red'; // Only var works with window.colorS //

let colorSelection = (color) => { // if statements will return gird_item_active color? //
    if(color == "red"){
        window.colorS = 'red';
    }else if(color == "yellow"){
        window.colorS = 'yellow';
    }else if(color == "orange"){
        window.colorS = 'orange';
    }else if(color == "green"){
        window.colorS = 'green';
    }else if(color == "blue"){
        window.colorS = 'blue';
    }else if(color == "purple"){
        window.colorS = 'purple';
    }else if(color == "white"){
        window.colorS = 'white';
    }else if(color == "black"){
        window.colorS = 'black';
    }else if(color == "gray"){
        window.colorS = 'gray';
    }else if(color == "aqua"){
        window.colorS = 'aqua';
    }else if(color == "brown"){
        window.colorS = 'brown';
    }else if(color == "pink"){
        window.colorS = 'pink';
    }
    console.log (colorS);
}


gridCreate(32);     
sliderOutput.innerHTML = slider.value;
sliderOutput.innerHTML = "32" + " x " + "32";  // To match the initial slider position //
slider.oninput = function () {
    sliderOutput.innerHTML = this.value + " x " + this.value;
    gridClear();
    gridCreate(this.value);
}


const colorApply = (e) => {
    if (e.target.classList.contains('grid_item')) {

      e.target.classList.toggle(colorS);
      console.log('inside if clicked');
    }
    console.log('outside clicked');
}

document.querySelector('.grid_container').addEventListener('click', colorApply);



function gridClear() {
    const gridContainer = document.getElementsByClassName("grid_container")[0];
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


function gridCreate(size) {
    const gridContainer = document.getElementsByClassName("grid_container")[0];
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + size + ', auto )');
    gridContainer.style.setProperty('grid-template-rows', 'repeat(' + size + ', auto');

    for(let i = 0; i < size*size; i++) {
        const gridChild = document.createElement("div");
        gridChild.className = "grid_item";
        const gridChild_t = document.createTextNode(" ");
        gridChild.appendChild(gridChild_t);
        document.getElementsByClassName("grid_container")[0].appendChild(gridChild);
    } 
}
