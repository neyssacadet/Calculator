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

function operate (operator, firstNum, nextNum){
  if (operator == add){
    addNum(firstNum, nextNum);
  }
  else if (operator == substract){
    substractNum(firstNum, nextNum);
  }
  else if (operator == multiply){
    multiplyNum(firstNum, nextNum);
  }
  else if (operator == divide){
    divideNum(firstNum, nextNum);
  }
}

window.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".grid-container");
  
    Array.from(boxes, function(box) {
      box.addEventListener("click", function() {
        let message = box.id;
        alert(message);
      });
    });
  });