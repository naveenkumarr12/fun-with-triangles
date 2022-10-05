

const angleInput = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputMsg = document.querySelector("#output");

function outputText(sumOfAngles) {
    if(sumOfAngles === 180) {
        outputMsg.innerText = "Yeah! It forms a Triangle!🥳"
    }
    else {
        outputMsg.innerText = "It does not form a Triangle😶."
    }
}

function checkIfTriangle() {
    var sumOfAngles = Number(angleInput[0].value) + Number(angleInput[1].value) + Number(angleInput[2].value);
    
    if(angleInput[0].value && angleInput[1].value && angleInput[2].value) {  
        outputText(sumOfAngles);
    }
    else {
        outputMsg.innerText = "Give the value of all Angles!"
    }
    
}

isTriangleBtn.addEventListener("click", checkIfTriangle);