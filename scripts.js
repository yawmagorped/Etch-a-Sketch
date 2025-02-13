const container = document.querySelector(".container");

let divArr;

const horizontalContainer = [];

let width = 16;
let height = 16;

const resizebtn = document.querySelector("#resize");
resizebtn.addEventListener('click', () => {
    width = prompt("enter new width");
    height = prompt("enter new height");
    if(width > 100) width = 100;
    if(height > 100) height = 100;
    deleteGrid();
    buildGrid();
})

function buildGrid() {
    for (let i = 0; i < width; i++) {
        horizontalContainer[i] = document.createElement("div");
        horizontalContainer[i].classList.add("horizontal-container");;
        container.appendChild(horizontalContainer[i]);

        for (let j = 0; j < height; j++) {
            let div = document.createElement("div");
            initDivSquares(div);
            horizontalContainer[i].appendChild(div)
        }        
    }    
}

function deleteGrid() {
    horizontalContainer.forEach(element => {
        element.remove();
    });
}

function initDivSquares(div) {
    div.classList.add("square");

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "red";
    })    
}    

buildGrid();