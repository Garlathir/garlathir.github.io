let button = document.querySelector(".content-spoiler__button");
let arrowOfButton = document.querySelector(".content-spoiler__icon");
let companyItems = document.querySelectorAll(".tech-repair__company--hidden");

let companyItems768 = document.querySelectorAll(
  ".tech-repair__company--hidden768"
);

button.onclick = function () {
  let hide = "Скрыть";
  let showAll = "Показать все";

  if (button.innerHTML === hide) {
    button.innerHTML = showAll;
    companyItems.forEach((element) => {
      element.style.display = "none";
    });
    if (document.documentElement.clientWidth < 1119) {
      companyItems768.forEach((element) => {
        element.style.display = "none";
      });
    } else {
      companyItems768.forEach((element) => {
        element.style.display = "flex";
      });
    }
    arrowOfButton.style.transform = "rotate(0)";
  } else {
    button.innerHTML = hide;
    if (document.documentElement.clientWidth < 1119) {
      companyItems768.forEach((element) => {
        element.style.display = "flex";
      });
    }
    companyItems.forEach((element) => {
      element.style.display = "flex";
    });
    arrowOfButton.style.transform = "rotate(180deg)";
  }
};
