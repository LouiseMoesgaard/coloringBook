"use strict";

let storedColor;

document.addEventListener("DOMContentLoaded", start);

async function start() {
    let response = await fetch("minicoloringbook.svg");
    let mySvgData = await response.text();

    document.querySelector("section").innerHTML = mySvgData;

    registerButtons();   
}

function registerButtons(){
    document.querySelectorAll("#colors .color").forEach(color =>{
        color.addEventListener("click", clickedColor);
    });

    document.querySelectorAll("#shapes .shape").forEach(shape =>{
        shape.addEventListener("click", clickedShape);
    });
}


function clickedColor(){
    storedColor = this.getAttribute("fill");
}

function clickedShape(){
 this.setAttribute("fill", storedColor);  
}




