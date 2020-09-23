document.addEventListener("DOMContentLoaded", start);

async function start() {
    let response = await fetch("cat-01-optimized.svg");
    let mySvgData = await response.text();

    document.querySelector("section").innerHTML = mySvgData;

    // startManipulatingTheData(){
        
    // }
    

}