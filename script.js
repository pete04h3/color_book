"use strict";

document.addEventListener("DOMContentLoaded", start);

let selectedColor;

async function start() {
  let response = await fetch("colorbook_svg.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  //document.querySelector("h1").classList.add("hidden");
  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  //clearColor();
  document.querySelectorAll(".color").forEach(color => {
    color.addEventListener("click", e => {
      selectedColor = e.target.dataset.color;
      document.querySelector(".selectedcolorbox").style.backgroundColor = selectedColor;
    });
  });
  document.querySelector("button").addEventListener("click", clearColor);
  document.querySelector("h2").addEventListener("click", darkSide);
  document.querySelector("#fills").addEventListener("click", fillColor);
}

function clearColor() {
  document.querySelectorAll("#fills path, polygon, polyline").forEach(path => {
    path.style.fill = "transparent";

    console.log(clearColor);
  });
  document.querySelectorAll("#outlines").forEach(path => {
    path.style.stroke = "";
    path.style.fill = "";
  });

  document.querySelector("body").style.backgroundColor = "";
  document.querySelector("h1").style.color = "";
  document.body.style.backgroundImage = "url('')";
  document.querySelector(".selectedcolorbox").style.backgroundColor = "transparent";
}

function fillColor(e) {
  e.target.style.fill = selectedColor;
}

function darkSide() {
  console.log(darkSide);
  document.querySelectorAll("#fills path, polygon, polyline").forEach(path => {
    path.style.fill = "black";
  });
  document.querySelectorAll("#outlines").forEach(path => {
    path.style.stroke = "oldlace";
    path.style.fill = "red";
  });
  document.body.classList.add("slidein");
  document.querySelector("h1").classList.add("slidein");
  document.body.style.backgroundImage = "url('darkforest.jpg')";
  document.querySelector("h1").style.color = "ghostwhite";
}
