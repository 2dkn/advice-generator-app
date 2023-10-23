"strict";

const api = "https://api.adviceslip.com";
const button = document.getElementById("next-btn");
const advice = document.getElementById("advice-text");
const number = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice__text");
const containerInOut = document.querySelector(".container");

let isButtonClickable = true;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 224) + 1;
  // return 71;
};

const addAnimationClass = () => {
  adviceText.classList.add("animate");
  setTimeout(() => {
    adviceText.classList.remove("animate");
  }, 1500);
};

const addContainerClass = () => {
  containerInOut.classList.add("animate");
  setTimeout(() => {
    containerInOut.classList.remove("animate");
  }, 1500);
};

const fetchAdvice = () => {
  // This checks if the button is clickable again
  if (!isButtonClickable) {
    return;
  }
  // Disables the button
  isButtonClickable = false;
  button.disabled = true;

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

  // Sets timer on the button to be click again
  setTimeout(() => {
    isButtonClickable = true;
    button.disabled = false;
  }, 1500);
};

// Add a click event listener to the button to fetch advice/animation/container on click
button.addEventListener("click", fetchAdvice);
button.addEventListener("click", addAnimationClass);
button.addEventListener("click", addContainerClass);

// calls the functions
fetchAdvice();
addAnimationClass();
addContainerClass();
