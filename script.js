let color = "black";

document.addEventListener("DOMContentLoaded", function () {
    createContainer(16);
    console.log("hi");
})

const popUp = document.querySelector("#popup");
popUp.addEventListener("click", () => {
    let size = getSize();
    createContainer(size);
 });

function createContainer(size) {
    let container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("What will be the size of container?");
    let message = document.querySelector("#message");
    if (input == "") {
        message.setAttribute("style", "color: red;")
        message.textContent = "Please provide a number";
    }
    else if (input < 0 || input > 100) {
        message.setAttribute("style", "color: red;")
        message.textContent = "Please provide a number between 1 & 100.";
    }
    else {
        message.setAttribute("style", "color: green;")
        message.textContent = "Now you play.";
        return input;
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}