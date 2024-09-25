const main = document.querySelector(".main");
const createBtn = document.querySelector(".btn");

let notes = document.querySelector(".input-box");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  img.src = "bin.png";

  main.appendChild(inputBox).appendChild(img);
});

main.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});
