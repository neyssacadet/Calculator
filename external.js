function addNum (firstNum, nextNum){
    let addition = firstNum + nextNum;
    return addition;
}

function substractNum (firstNum, nextNum){
    let substraction = firstNum - nextNum;
    return substraction;
}

function multiplyNum (firstNum, nextNum){
    let multiplication = firstNum * nextNum; 
    return multiplication;
}

function divideNum (firstNum, nextNum){
    let division = firstNum/nextNum;
    return division;
}

window.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".grid-container");
  
    Array.from(boxes, function(box) {
      box.addEventListener("click", function() {
        let message = "YASS!";
        alert(message);
      });
    });
  });