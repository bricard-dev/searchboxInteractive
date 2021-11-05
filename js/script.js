let cards = document.querySelectorAll(".card");
let liveSearch = () => {
  let search_query = document.getElementById("searchbox").value;
  for (card of cards) {
    if (
      search_query === "" ||
      card.textContent.toLowerCase().includes(search_query.toLowerCase())
    ) {
      // card.style.display = "block";
      card.classList.remove("is-hidden");
    } else {
      // card.style.display = "none";
      card.classList.add("is-hidden");
    }
  }
};

let searchInput = document.getElementById("searchbox");
searchInput.addEventListener("input", () => {
  liveSearch();
});
