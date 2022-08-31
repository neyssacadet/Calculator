let message = ""; 
let operators = new Set (["add", "multiply", "substract", "divide"]);

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



