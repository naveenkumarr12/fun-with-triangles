const lengthInput = document.querySelectorAll(".length-input");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const areaOutput = document.querySelector("#output");

function areaCalculation(base, height) {
  var area = (base * height) / 2;
  return area;
}

function calculateTriangleArea() {
  if (lengthInput[0].value && lengthInput[1].value) {
    if (lengthInput[0].value < 0 || lengthInput[1].value < 0) {
      areaOutput.innerText = "The Length cannot be negative!";
    } else {
      var triangleArea = areaCalculation(
        Number(lengthInput[0].value),
        Number(lengthInput[1].value)
      );

      areaOutput.innerText = "Area of the Triangle is " + triangleArea + ".";
    }
  } else {
    areaOutput.innerText = "Give all the values!";
  }
}

calculateAreaBtn.addEventListener("click", calculateTriangleArea);