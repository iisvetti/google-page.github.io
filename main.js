const luckyButton = document.getElementById("lucky-btn");
const logo = document.getElementById("logo");

const googleLogo = "./images/logo-google.png";
const oddityLogo = "./images/logo-oddity.png";

let isOddity = false;

luckyButton.addEventListener("click", () => {
  if (isOddity) {
    logo.src = googleLogo;
    logo.alt = "Google Logo";
  } else {
    logo.src = oddityLogo;
    logo.alt = "Oddity Logo";
  }
  isOddity = !isOddity;
});

