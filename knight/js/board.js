"use strict";

let galaxy = document.querySelector(".container");
function possibleKnightCoordinates(x=1, y=1) {
  let anotherplace = [];
  let myCoordinates = [
    { x: x + 1, y: y + 2 },
    { x: x + 2, y: y + 1 },
    { x: x + 2, y: y - 1 },
    { x: x + 1, y: y - 2 },
    { x: x - 1, y: y - 2 },
    { x: x - 2, y: y - 1 },
    { x: x - 2, y: y + 1 },
    { x: x - 1, y: y + 2 },
  ];
  for (let i = 0; i < myCoordinates.length; i++) {
    anotherplace.push([myCoordinates[i].x, myCoordinates[i].y]);
  }
  return anotherplace;
  console.log(possibleKnightCoordinates());
};
//bishop arrays

function cordinateExists(arr, a, b) {
  if (a > 8 || a < 0 || b > 8 || b < 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === a && arr[i][1] === b) {
      return true;
    }
  }
  return false;
}

function func(x, y) {
  console.log(x, y);
  let root = document.getElementById("root");
  removeAllChildNodes(root);
  root.appendChild(chessBoard(x, y));
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
//create a single div
function cell(c, x, y, p = false, validco) {
  let div = document.createElement("div");
  div.classList.add("damn", "parentCont");
  div.style.backgroundColor = c;
  if (p) {
    let img = document.createElement("i");
    img.classList.add("fa-solid", "fa-chess-knight");
    img.style.color = "orange";
    img.style.height = "100%";
    img.setAttribute("alt", "the img");
    div.appendChild(img);
    return div;
  }
  if (cordinateExists(validco, x, y)) {
    let img = document.createElement("img");
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubeopVZj3hsjAPFRLiW29q7vlfuBeEa14Kg&usqp=CAU";
    img.style.height = "100%";
    img.setAttribute("alt", "the img");
    div.appendChild(img);
    div.setAttribute("onclick", `func(${x},${y})`);
    return div;
  }
  return div;
}
function chessBoard(x, y) {
  let parentCont = document.createElement("div");
  parentCont.classList.add("parentCont");
  let cont = document.createElement("div");
  let k = 1;
  var validCo = possibleKnightCoordinates(x, y);
  for (var i = 1; i < 9; i++) {
    let row = document.createElement("div");
    let col = document.createElement("div");
    col.classList.add("cont");
    for (var j = 1; j < 9; j++) {
      let c = "white";
      if (k % 2 === 0) c = "black";
      if (x === i && y === j) {
        //cell(c, x, y, p = false, validco)
        col.appendChild(cell(c, i, j, true, validCo));
      } else {
        col.appendChild(cell(c, i, j, false, validCo));
      }
      k++;
      row.appendChild(col);
    }
    k++;
    cont.appendChild(row);
  }
  parentCont.appendChild(cont);
  return parentCont;
}
document.getElementById("root").appendChild(chessBoard(1, 1));