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

// const myBoard = () => {
//   for (let i = 1; i < 9; i++) {
//     const square = document.createElement("div");
//     if (i % 2 === 0) {
//       square.style.backgroundColor = "green";
//     } else {
//       square.style.backgroundColor = "white";
//     }
//     chessBoard.appendChild(square);

//   }
//   for (let i = 1; i < 9; i++) {
//     const square1 = document.createElement("div");
//     if (i % 2 === 0) {
//       square1.style.backgroundColor = "white";
//     } else {
//       square1.style.backgroundColor = "green";
//     }
//     chessBoard.appendChild(square1);
//   }
//   for (let i = 1; i < 9; i++) {
//     const square2 = document.createElement("div");
//     if (i % 2 === 0) {
//       square2.style.backgroundColor = "green";
//     } else {
//       square2.style.backgroundColor = "white";
//     }
//     chessBoard.appendChild(square2);
//   }
//   for (let i = 1; i < 9; i++) {
//     const square3 = document.createElement("div");
//     if (i % 2 === 0) {
//       square3.style.backgroundColor = "white";
//     } else {
//       square3.style.backgroundColor = "green";
//     }
//     chessBoard.appendChild(square3);
//   }
//   for (let i = 1; i < 9; i++) {
//     const square4 = document.createElement("div");
//     if (i % 2 === 0) {
//       square4.style.backgroundColor = "green";
//     } else {
//       square4.style.backgroundColor = "white";
//     }
//     chessBoard.appendChild(square4);
//   }
//   let i= 1;
//    for (let i = 1; i < 9; i++) {
//      const square5 = document.createElement("div");
//      if (i % 2 === 0) {
//        square5.style.backgroundColor = "white";
//      } else {
//        square5.style.backgroundColor = "green";
//      }
//      chessBoard.appendChild(square5);
//    }
//      for (let i = 1; i < 9; i++) {
//        const square6 = document.createElement("div");
//        if (i % 2 === 0) {
//          square6.style.backgroundColor = "green";
//        } else {
//          square6.style.backgroundColor = "white";
//        }
//        chessBoard.appendChild(square6);
//      }
//       for (let i = 1; i < 9; i++) {
//         const square7 = document.createElement("div");
//         if (i % 2 === 0) {
//           square7.style.backgroundColor = "white";
//         } else {
//           square7.style.backgroundColor = "green";
//         }
//         chessBoard.appendChild(square7);
//       }
//      if( i<1 || i>8){
//          return false;
//      }
// };
// myBoard();