const handleResize = function () {
  const illustration = document.getElementById(
    "container__card__images__illustation"
  );
  if (window.innerWidth >= 768) {
    illustration.src = "images/illustration-woman-online-desktop.svg";
  } else {
    illustration.src = "images/illustration-woman-online-mobile.svg";
  }
};

handleResize();
window.addEventListener("resize", handleResize);

const dropdownItems = document.getElementsByClassName(
  "container__card__details__group"
);

function toggle() {
  const [question, answer] = this.children;
  const [questionText, arrow] = question.children;
  if (answer.style.display === "none" || answer.style.display === "") {
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
  item.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      toggle.apply(this);
    }
  });
}
