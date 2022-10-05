const sideInputs = document.querySelectorAll(".side-input");
const calHypoBtn = document.querySelector("#cal-hypo-btn");
const hypoOutput = document.querySelector("#output");

function sumOfAnglesSquare(a, b) {
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if(sideInputs[0].value && sideInputs[1].value) {
        if(sideInputs[0].value < 0 || sideInputs[1].value < 0) {
            hypoOutput.innerText = "The sides cannot be NEGATIVE!";
        }
        else {
            var hypotenuseSquare = sumOfAnglesSquare(Number(sideInputs[0].value), Number(sideInputs[1].value));
            var hypotenuseLength = Math.sqrt(hypotenuseSquare).toFixed(2);
            
            hypoOutput.innerText = "The Length of Hypotenuse is " + hypotenuseLength + ".";
        }
    } else {
        hypoOutput.innerText = "Give all the values!";
    }
}

calHypoBtn.addEventListener("click", calculateHypotenuse);