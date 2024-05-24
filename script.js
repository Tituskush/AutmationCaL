function calculate() {
    for (let i = 1; i <= 10; i++) {
        const prod = parseInt(document.getElementById(`prod_${i}`).value) || 0;
        const targ = parseInt(document.getElementById(`targ_${i}`).value) || 0;

        const needed = targ - prod;

        const neededElement = document.getElementById(`needed_${i}`);
        if (needed >= 0) {
            neededElement.innerText = `Need Production: ${needed}`;
            neededElement.style.color = "red";
        } else {
            neededElement.innerText = `Over Production: ${Math.abs(needed)}`;
            neededElement.style.color = "red";
        }
    }
}

document.getElementById("shareBtn").addEventListener("click", function() {
    let results = "Production Calculator Results:\n";
    for (let i = 1; i <= 10; i++) {
        results += `Band ${i} (1/5/6/7/14a/14b/15/16/17/18/20): ${document.getElementById(`needed_${i}`).innerText}\n`;
    }
    // Simulating sharing by logging to console
    console.log(results);
});
function updateLabel(value) {
    const label = document.querySelector('label[for="targ_1"]');
    if (value !== "") {
        label.innerText = `Band 1 (Regarding ${value}):`;
    } else {
        label.innerText = `Band 1:`;
    }
}
const suggestions = [
    "1000", "1500", "2000", "2500", "3000" // Sample suggestions
];

function showSuggestions(value) {
    const suggestionsList = document.getElementById("suggestions_1");
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (value.trim() === "") {
        return; // Don't show suggestions if the input is empty
    }

    const filteredSuggestions = suggestions.filter(suggestion => {
        return suggestion.includes(value); // Filter suggestions based on input value
    });

    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", () => {
            document.getElementById("targ_1").value = suggestion;
            suggestionsList.innerHTML = ""; // Clear suggestions when clicked
        });
        suggestionsList.appendChild(li);
    });
}
