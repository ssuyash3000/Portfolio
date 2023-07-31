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
}, 550);
let resume = document.getElementById("resume");
resume.addEventListener("click", () => {
  window.open("./assets/Suyash_2023_Grad_Final.pdf", "_blank");
});
setInterval(() => {
  resume.style.border = "5px solid blue";
  if (counter1 === 0) {
    resume.style.borderTop = "5px solid blue";
    resume.style.borderLeft = "5px solid red";
    resume.style.borderRight = "5px solid white";
    resume.style.borderBottom = "5px solid white";
  } else if (counter1 === 1) {
    resume.style.borderRight = "5px solid blue";
    resume.style.borderLeft = "5px solid white";
    resume.style.borderTop = "5px solid red";
    resume.style.borderBottom = "5px solid white";
  } else if (counter1 === 2) {
    resume.style.borderBottom = "5px solid blue";
    resume.style.borderTop = "5px solid white";
    resume.style.borderRight = "5px solid red";
    resume.style.borderLeft = "5px solid white";
  } else {
    resume.style.borderLeft = "5px solid blue";
    resume.style.borderTop = "5px solid white";
    resume.style.borderRight = "5px solid white";
    resume.style.borderBottom = "5px solid red";
  }
  counter1++;
  counter1 %= 4;
}, 750);
