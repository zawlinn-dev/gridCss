"use strict";

// Import Random Image to HTML

const inst = document.querySelector(".insta_container"),
  cards = document.querySelector(".card_container");

// Contents

let initialVal = 0;
const items = ["tacos", "beer", "wine", "music"];

init();

function init() {
  const digits = Array.from({ length: 20 }, () => [
    randomNumber(2),
    randomNumber(2),
  ]).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ]);

  const html1 = items.map(generateHTML1).join("");
  // console.log(html1);

  cards.insertAdjacentHTML("beforeend", html1);
  const html2 = digits.map(generateHTML2).join("");

  inst.insertAdjacentHTML("beforeend", html2);
}
