let slider = document.getElementById("myRange");
let sliderOutput = document.getElementById("value_h");

let colorSelection = (color) => { // if statements will return gird_item_active color? //
    if(color == "red"){
        console.log('haha');
    }else if(color == "yellow"){
        console.log('yellow')
    }else if(color == "orange"){
        console.log('yellow')
    }else if(color == "green"){
        console.log('yellow')
    }else if(color == "blue"){
        console.log('yellow')
    }else if(color == "purple"){
        console.log('yellow')
    }else if(color == "white"){
        console.log('yellow')
    }else if(color == "white"){
        console.log('yellow')
    }else if(color == "black"){
        console.log('yellow')
    }else if(color == "gray"){
        console.log('yellow')
    }else if(color == "aqua"){
        console.log('yellow')
    }else if(color == "brown"){
        console.log('yellow')
    }else if(color == "pink"){
        console.log('yellow')
    }
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
      e.target.classList.toggle('grid_item_active');
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
