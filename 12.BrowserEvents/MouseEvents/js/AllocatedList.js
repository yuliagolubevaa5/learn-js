"use strict";

let ul = document.querySelector("#ul");
let lis = ul.querySelectorAll("li");

let addColor = event => {
    event.preventDefault();
    let target = event.target.closest("li");
    if (target) {
        if (event.metaKey || event.ctrlKey) {
            target.classList.toggle("selected");
        } else {
            lis.forEach(li => li.classList.remove("selected"));
            target.classList.add("selected");
        }
    }
};

ul.addEventListener("mousedown", addColor);
