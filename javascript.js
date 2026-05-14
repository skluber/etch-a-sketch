const container = document.createElement("div");
container.id = "container";
container.className = "container";
document.body.appendChild(container);

for (let j = 0; j < 16*16; j++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    container.appendChild(cell);
}

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = "black";
    }
})