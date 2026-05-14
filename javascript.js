const input = document.querySelector('input[type="number"]');
const sizeButton = document.getElementById("size-btn");

function createGrid (size) {
    const container = document.createElement("div");
    container.id = "container";
    container.className = "container";
    document.body.appendChild(container);

    for (let j = 0; j < size*size; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `calc(100% / ${size})`
        container.appendChild(cell);
    }

    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains("cell")) {
            event.target.style.backgroundColor = "black";
        }
    })  

}

function removeGrid() {
    document.getElementById("container").remove();
}

createGrid(16);

sizeButton.addEventListener('click', () => {
    let userSize = parseInt(input.value)

    if (userSize <= 0 || userSize > 100) {
        alert("Please enter a valid number between 1-100")
    } else {
        removeGrid();
        createGrid(userSize)
    }
})







