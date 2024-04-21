let currentModel = "Model XYZ";
let currentDuration = 0;

function changeModel() {
    currentModel = currentModel === "Model XYZ" ? "Model CPRG" : "Model XYZ";
    updateQuote();
}

function changeDuration() {
    currentDuration = prompt("Enter the duration (in days):");
    if (currentDuration !== null && !isNaN(currentDuration)) {
        currentDuration = parseInt(currentDuration);
        updateQuote();
    }
}

function updateQuote() {
    const modelText = document.getElementById("model-text");
    const durationText = document.getElementById("duration-text");
    const calculatedCost = document.getElementById("calculated-cost");

    modelText.textContent = currentModel;
    durationText.textContent = currentDuration;
    calculatedCost.textContent = (currentModel === "Model XYZ" ? 100 : 213) * currentDuration;
}