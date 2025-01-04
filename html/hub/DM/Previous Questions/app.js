function search() {
    // Get input value
    let input = document.getElementById("myInput").value.toLowerCase();
    // Get all card elements
    let cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      let title = card.querySelector(".card-title").textContent.toLowerCase();
      if (title.includes(input)) {
        card.parentElement.style.display = ""; // Show matching cards
      } else {
        card.parentElement.style.display = "none"; // Hide non-matching cards
      }
    });
  }
  