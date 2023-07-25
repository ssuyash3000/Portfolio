let heading = document.getElementById("heading");
let counter = 0;
let counter1 = 0;
setInterval(() => {
  if (counter === 0) {
    heading.innerHTML = "Portfolio in making.";
  } else if (counter === 1) {
    heading.innerHTML = "Portfolio in making..";
  } else heading.innerHTML = "Portfolio in making...";
  counter++;
  counter %= 3;
}, 350);
let resume = document.getElementById("resume");
resume.addEventListener("click", () => {
  window.open("./assets/Suyash's Resume.pdf", "_blank");
});
setInterval(() => {
  if (counter1 === 0) {
    resume.style.borderTop = "5px solid blue";
    resume.style.borderLeft = "5px solid white";
    resume.style.borderRight = "5px solid white";
    resume.style.borderBottom = "5px solid white";
  } else if (counter1 === 1) {
    resume.style.borderRight = "5px solid blue";
    resume.style.borderLeft = "5px solid white";
    resume.style.borderTop = "5px solid white";
    resume.style.borderBottom = "5px solid white";
  } else if (counter1 === 2) {
    resume.style.borderBottom = "5px solid blue";
    resume.style.borderTop = "5px solid white";
    resume.style.borderRight = "5px solid white";
    resume.style.borderLeft = "5px solid white";
  } else {
    resume.style.borderLeft = "5px solid blue";
    resume.style.borderTop = "5px solid white";
    resume.style.borderRight = "5px solid white";
    resume.style.borderBottom = "5px solid white";
  }

  counter1++;
  counter1 %= 4;
}, 550);
