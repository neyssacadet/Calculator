function addNum (firstNum, nextNum){
    return firstNum + nextNum;
}

function substractNum (firstNum, nextNum){
    return firstNum - nextNum;
}

function multiplyNum (firstNum, nextNum){
    return firstNum * nextNum; 
}

function divideNum (firstNum, nextNum){
    return firstNum/nextNum;
}


const operator = "";

function operate (firstNum, nextNum){
  switch(operator){
    case "+":
      addNum (firstNum, nextNum);
    case "-":
      substractNum (firstNum, nextNum);
    case "*":
      multiplyNum (firstNum, nextNum);
    case "/":
      divideNum (firstNum, nextNum);
  }
}
/*
function operate (operator, firstNum, nextNum){
  if (operator == box.id){
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
        const display = document.getElementById("display");
        display.innerHTML = box.id;
        display.style.gridColumn = `1 / span 4`;
        display.style.gridRow = `1`;
        display.style.padding =`20px`;
        display.style.backgroundColor = `rgba(255, 255, 255, 0.8)`;
      });
    });
  });
*/
