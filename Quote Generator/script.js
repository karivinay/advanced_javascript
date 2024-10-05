const verseEl = document.querySelector(".verse");
const scriptureEl = document.querySelector(".scripture");
console.log(scriptureEl);
const API = "./verses.json";
async function fetchVerse() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    // Get a single verse from an array
    // Generate a random Index
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(randomIndex);
    const verse = data[randomIndex].content;
    const scripture = data[randomIndex].scripture;

    // Display the verse and scripture
    verseEl.textContent = verse;
    scriptureEl.textContent = scripture;
    console.log(verse, scripture);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

setInterval(function () {
  fetchVerse();
}, 1000 * 60 * 60 * 24);