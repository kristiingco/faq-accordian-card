const dropdownItems = document.getElementsByClassName(
  "container__card__details__group"
);

function toggle() {
  const [question, answer] = this.children;
  const [questionText, arrow] = question.children;
  if (answer.style.display === "none") {
    answer.style.display = "block";
    questionText.style.fontWeight = "bold";
    arrow.style.transform = "rotate(180deg)";
  } else {
    answer.style.display = "none";
    questionText.style.fontWeight = "normal";
    arrow.style.transform = "rotate(0)";
  }
}

for (let item of dropdownItems) {
  item.addEventListener("click", toggle);
}
