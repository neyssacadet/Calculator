let message = ""; 


// functions for operating 2 numbers 
function addNum (a, b){
    return a + b;
}
console.log(addNum(2,3));

function substractNum (a, b){
    return a - b;
}
console.log(substractNum(2,3));

function multiplyNum (a, b){
    return a * b; 
}
console.log(multiplyNum(2,3));

function divideNum (a, b){
    return a/b;
}
console.log(divideNum(2,3));

/*let operator = "";
//function that takes an operator and 2 numbers
function operate(operator, firstNum, nextNum){
  if(operator = "+"){
    addNum(firstNum, nextNum);
  }
  else{
    alert("error");
  }
}


function that takes an operator and 2 numbers and calls another function
function operate (a, b){
  switch(operator){
    case "+":
      addNum (a, b);
    case "-":
      substractNum (a, b);
    case "*":
      multiplyNum (a, b);
    case "/":
      divideNum (a, b);
  }
}

function operate (operator, a, b){
  if (operator == box.id){
    addNum(a, b);
  }
  else if (operator == substract){
    substractNum(a, b);
  }
  else if (operator == multiply){
    multiplyNum(a, b);
  }
  else if (operator == divide){
    divideNum(a, b);
  }
 
}*/



window.addEventListener("DOMContentLoaded", function() {
  let boxes = document.querySelectorAll(".grid-container");
    Array.from(boxes, function(box) {
      box.addEventListener("click", function() {
        message = message + box.id;
        const display = document.getElementById("display");
        display.innerHTML = message;
      });
    });
  });



