function searchUnits() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.querySelectorAll(".grid a");

    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
