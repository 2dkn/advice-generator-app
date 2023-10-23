"strict";

const api = "https://api.adviceslip.com";
const button = document.getElementById("next-btn");
const advice = document.getElementById("advice-text");
const number = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");

const getRandomNumber = () => {
  return Math.floor(Math.random() * 224) + 1;
};

const fetchAdvice = () => {
  const randomAdviceNumber = getRandomNumber();

  // Fetch advice text
  fetch(`${api}/advice/${randomAdviceNumber}`)
    .then((response) => response.json())
    .then((data) => {
      advice.innerText = data.slip.advice;
    })
    .catch((error) => {
      console.error("Error fetching advice: " + error);
    });

  // Display the advice number
  number.innerText = `ADVICE #${randomAdviceNumber}`;
};

// Add a click event listener to the button to fetch advice on click
button.addEventListener("click", fetchAdvice);

fetchAdvice();
