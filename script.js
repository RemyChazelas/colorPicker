const textPicker = document.querySelector("#text-picker");
const bgPicker = document.querySelector("#bg-picker");
const bodyBgPicker = document.querySelector("#body-bg-picker");
const titlePicker = document.querySelector("#title-picker");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const mousemove = document.querySelector(".mousemove");
const keypressContainer = document.querySelector(".keypress");
const key = document.querySelector("#key");
const borderMousePicker = document.querySelector("#border-mouse-picker");
const bgMousePicker = document.querySelector("#bg-mouse-picker");
const copyTextColor = document.querySelector("#copy-text-color");

let textColor = "";
let bgColor = "";
let bodyBgColor = "";
let titleColor = "";
let borderMouseColor = "";
let bgMouseColor = "";

textPicker.addEventListener("input", (e) => {
  console.log(e);
  textColor = e.target.value;
  container.style.color = `${textColor}`;
  console.log(textColor);
  document.querySelector(".copy-text").textContent = textColor;
});

bgPicker.addEventListener("input", (e) => {
  bgColor = e.target.value;
  container.style.backgroundColor = `${bgColor}`;
});

bodyBgPicker.addEventListener("input", (e) => {
  bodyBgColor = e.target.value;
  body.style.backgroundColor = `${bodyBgColor}`;
});

titlePicker.addEventListener("input", (e) => {
  titleColor = e.target.value;
  document.querySelector("h1").style.color = `${titleColor}`;
});

borderMousePicker.addEventListener("input", (e) => {
  borderMouseColor = e.target.value;
  document.querySelector(
    ".mousemove"
  ).style.border = `5px solid ${borderMouseColor}`;
});

document.querySelector("#bg-mouse-picker").addEventListener("input", (e) => {
  bgMouseColor = e.target.value;
  document.querySelector(
    ".mousemove"
  ).style.backgroundColor = `${bgMouseColor}`;
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// document.addEventListener("keypress", (e) => {
//   key.textContent = e.key;
//   console.log(e.key);
// });

// function copy() {
//   textPicker.select();
//   copy.execCommand("copy");
// }

// copyTextColor.addEventListener("click", copy);
