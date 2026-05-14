const input = document.querySelector('input[type="number"]');
const sizeButton = document.getElementById("size-btn");

function createGrid (size) {
    const container = document.createElement("div");
    container.id = "container";
    container.className = "container";
    document.body.appendChild(container);
    let opacity = 100;

    for (let j = 0; j < size*size; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `calc(100% / ${size})`
        container.appendChild(cell);
    }

    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains("cell")) {
            if (opacity < 10) opacity = 100
            event.target.style.backgroundColor = randomRGB();
            event.target.style.opacity = `${opacity}%`;
            opacity -= 10;
        }
    })  

}

function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`
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







