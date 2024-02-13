document.getElementById("yesText").onclick = function() {
  document.getElementById('askText').innerText = "Yay! See u tomorrow night! <3"
  document.getElementById('video1').style.visibility = 'hidden';
  document.getElementById('video2').style.visibility = 'visible';
  document.getElementById('video2').play();
  setTimeout(function() {
      document.getElementById('bubbles').style.visibility = 'visible';
      document.getAnimations().forEach((anim) => {
          anim.cancel();
          anim.play();
      });
  }, 23500);
};


const container = document.getElementById("container");
const btnNo = document.getElementById("noText");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
const containerHeight = container.getBoundingClientRect().height;
const containerWidth = container.getBoundingClientRect().width;
const btnHeight = btnNo.getBoundingClientRect().height;
const btnWidth = btnNo.getBoundingClientRect().width;
const btnTop = btnNo.getBoundingClientRect().top;
const btnLeft = btnNo.getBoundingClientRect().left;

let newTop = btnTop;
let newLeft = btnLeft;
while (Math.abs(newTop - btnTop) < containerHeight / 3) {
  newTop = getRandomNumber(0, containerHeight - btnHeight);
}

while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
  newLeft = getRandomNumber(0, containerWidth - btnWidth);
}

btnNo.style.top = Math.floor(newTop) + "px";
btnNo.style.left = Math.floor(newLeft) + "px";
});