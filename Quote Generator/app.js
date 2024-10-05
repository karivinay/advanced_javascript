// const API = "http://api.quotable.io/random";
const API = "./quotes.json";
const quoteEl = document.querySelector(".quote");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
const notificationEl = document.querySelector(".notification");
const tweetLink = document.querySelector("#tweet");
async function fetchData() {
  quoteEl.textContent = "generating quote...Please wait";
  try {
    // Fetch the Quote and display the quote
    const response = await fetch(API);
    const data = await response.json();
    const quote = data.content;
    quoteEl.textContent = quote;

    // Tweet Functionality
    const tweetText = encodeURIComponent(quote);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

    tweetLink.setAttribute("href", tweetUrl);
    console.log(tweetUrl);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

// fetchData();

generateBtn.addEventListener("click", fetchQuotes);

copyBtn.addEventListener("click", function () {
  // Copy to clipboard
  const textToCopy = quoteEl.textContent;

  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      // Showing and Hiding a notification
      notificationEl.classList.add("showNotification");
      setTimeout(() => {
        notificationEl.classList.remove("showNotification");
      }, 4000);
    })
    .catch(function (err) {
      console.log("Something went wrong", err);
    });
});

async function fetchQuotes() {
  // 1 20
  try {
    const response = await fetch(API);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length) ;
    console.log(randomIndex);
    const quote = data[randomIndex].content;
    quoteEl.textContent = quote;

    // Tweet Functionality
    const tweetText = encodeURIComponent(quote);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

    tweetLink.setAttribute("href", tweetUrl);
    console.log(tweetUrl);
    console.log(quote);
  } catch (err) {
    console.log("Something went wrong", err);
  }
}
// fetchQuotes();