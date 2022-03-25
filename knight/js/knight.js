"use strict"
let chessCoordinates = document.querySelector("#coordinates");
let input = document.querySelector("#submit-btn");
let regex= /[a-h]/g;
input.addEventListener("click", function(i){
    i.preventDefault();
    display();
})
function display(){
  let anotherCoordinate = chessCoordinates.value;
  if(anotherCoordinate === "" || anotherCoordinate.length > 2 || !anotherCoordinate.charAt(0).match(regex)||anotherCoordinate.charAt(1)>8 || anotherCoordinate.charAt(1)<1){

  };
};

