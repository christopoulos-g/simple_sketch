
document.addEventListener('DOMContentLoaded', function() {
    
    let slider = document.getElementById("myRange");
    let sliderOutput = document.getElementById("value_h");
    
    sliderOutput.innerHTML = slider.value;
    sliderOutput.innerHTML = "32" + " x " + "32";  // To match the intital slider position 
    slider.oninput = function () {
        sliderOutput.innerHTML = this.value + " x " + this.value;
        gridClear();
        gridCreate(this.value);
    }


    function gridClear() {
        const gridContainer = document.getElementById("grid-container");
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }


    function gridCreate(size) {
        const gridContainer = document.getElementById("grid-container");
        gridContainer.style.setProperty('grid-template-columns', 'repeat(' + size + ', auto )');
        gridContainer.style.setProperty('grid-template-rows', 'repeat(' + size + ', auto)');

        for(let i = 0;i < size*size;i++) {
            const gridChild = document.createElement("div");
            gridChild.className = "grid-item";
            const gridChild_t = document.createTextNode(" ");
            gridChild.appendChild(gridChild_t);
            document.getElementById("grid-container").appendChild(gridChild);
        } 
    }

}, false);