"use strict";

let storedColor;

const colorArray = ["#25191A", "#584442", "#440b10", "#663e3b", "#D9C8BE", "#CCB8AF", "#2F2122", "#B19B93"];
document.addEventListener("DOMContentLoaded", start);

async function start() {
    let response = await fetch("cat.svg");
    let mySvgData = await response.text();

    document.querySelector("#colored_svg").innerHTML = mySvgData;
    document.querySelector("#uncolored_svg").innerHTML = mySvgData;

    setColorPalette();
    pickColor();
    colorPicker();
}

function pickColor(){
    document.querySelectorAll(".color_pick").forEach(elm => {
        elm.addEventListener("click", function(){
            document.querySelector("#colorPicker").dataset.field = this.dataset.field;
            document.querySelector("#colorPicker").click();
            
        });
    });
}

function colorPicker() {
    document.querySelector("#colorPicker").addEventListener("input", function(event) {
        let element = document.querySelector(`.color_pick[data-field="${this.dataset.field}"]`).parentNode;
        console.log(element);
        element.style.backgroundColor = event.target.value;
        storedColor = event.target.value;
        console.log(storedColor)
        document.querySelector("#selected_color").style.backgroundColor = storedColor; 

    });
}

function setColorPalette(){
    let buttons = document.querySelectorAll(".colors .color");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = colorArray[i];
        buttons[i].addEventListener("click", clickedColor);
    }

    document.querySelectorAll(".shape").forEach(shape =>{
        shape.addEventListener("click", clickedShape);
    });
}


function clickedColor() {
    storedColor = this.style.backgroundColor;

    document.querySelector("#selected_color").style.backgroundColor = storedColor;
}

function clickedShape() {
    this.setAttribute("fill", storedColor);
    console.log(this);
}
