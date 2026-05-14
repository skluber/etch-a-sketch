const container = document.createElement("div");
container.id = "container";
container.className = "container";
document.body.appendChild(container);

for (let j = 0; j < 16*16; j++) {
    const cell = document.createElement("div");
    cell.id = "cell";
    cell.className = "cell";
    container.appendChild(cell);
}
