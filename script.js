const headerContainer = document.querySelector(".header");
const serialNumberCells = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");

let columns = 26;
let rows = 100;

function createHeaderCells() {
    for (let i = 0; i <= columns; i++) {
        const headerCell = document.createElement("div");
        headerCell.className = "header-cell cell";
        if (i !== 0) {
            headerCell.innerText = String.fromCharCode(64 + i);
        }
        headerContainer.appendChild(headerCell);
    };
};

function createSerialNumberCells() {
    for (let i = 1; i <= rows; i++) {
        const snoCell = document.createElement("div");
        snoCell.innerText = i;
        snoCell.className = "sno-cell cell";
        serialNumberCells.appendChild(snoCell);
    };
};

function createRows(rowNumber) {
    // create rows and each row has 26 colums
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 1; i <= columns; i++) {
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;
        row.appendChild(cell);
        cell.id = String.fromCharCode(64 + i) + rowNumber;

        // adding focus on every cell
        cell.addEventListener("focus", onCellFocus);
    };
    mainContainer.appendChild(row);
};

function buildMainSection() {
    for (let i = 1; i <= rows; i++) {
        createRows(i);
    }
}

createHeaderCells();
createSerialNumberCells();
buildMainSection();