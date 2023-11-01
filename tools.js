const cellNumber = document.querySelector(".active-cell");
const fontSizeInput = document.querySelector("#fontSize");
const fontFamilyInput = document.querySelector("#fontFamily");

let activeElement = null;

const state = {};

const defaultProperties = {
    fontFamily: "sans",
    fontSize: 16,
    color: "#000",
    textAlign: "left", // left center right
    backgroundColor: "#fff",
    isBold: false,
    isItalic: false,
    isUnderlined: false
}

function onCellFocus(e) {
    const elementId = e.target.id;
    cellNumber.innerText = elementId;
    activeElement = e.target;

    if (state[elementId]) {
        resetOptions(state[elementId]);
    }
    else {
        resetOptions(defaultProperties);
    }
};

function resetOptions(optionState) {

};

function onChangeFontSize() {

};

resetOptions();