document.addEventListener("DOMContentLoaded", function () {
    createContainer(16);
    console.log("hi");
})

function createContainer(size) {
    let container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fe)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fe)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        container.insertAdjacentElement("beforeend", div);
    }
}