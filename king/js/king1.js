"use strict";
const chessBoard = document.querySelector(".kingBoard");
function possibleKingCoordinates(x=1, y=1) {
  let anotherplace = [];
 let myCoordinates = [
   { x: x, y: y + 1 },
   { x: x + 1, y: y + 1 },
   { x: x + 1, y: y },
   { x: x + 1, y: y - 1 },
   { x: x, y: y - 1 },
   { x: x - 1, y: y - 1 },
   { x: x - 1, y: y },
   { x: x - 1, y: y + 1 },
 ];
  for (let i = 0; i < myCoordinates.length; i++) {
    anotherplace.push([myCoordinates[i].x, myCoordinates[i].y]);
  }
  return anotherplace;
  console.log(possibleKingCoordinates());
};
// // get valid coordinates
// function validCoordinates (arr, a, b){
//   if(a > 8 || a < 0 || b > 8 || b > 0){
//     return false;
//   }
//   for(let i =0; i < arr.length; i++){
//     if(arr[i][0] === a && arr [i][i] === b){
//       return true;
//     }
//   }
//   return false;
// }
// // validCoordinates();

// function chessTable (){
//   const center = document.createElement("center");
//   const table = document.createElement("table");
//   for (let i = 1; i < 9; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 1; j < 9; j++) {
//       const td = document.createElement("td");
//       if ((i + j) % 2 === 0) {
//         td.setAttribute("class", "cell whitecell");
//         tr.appendChild(td);
//       } else {
//         td.setAttribute("class", "cell blackcell");
//         tr.appendChild(td);
//       }
//     }
//     table.appendChild(tr);

//   }
//   center.appendChild(table);
//   table.setAttribute("cellspacing", "0");
//   table.setAttribute("width","500px");
//   table.setAttribute("height", "500px");
//   document.body.appendChild(center);

// };
// chessTable();

// function singleTile(c, x, y, p = false, high = false) {
//   let div = document.createElement("div");
//   div.style.backgroundColor = c;
//   div.style.display = "inline-block";
//   div.style.height = "50px";
//   div.style.width = "50px";
//   div.setAttribute("onclick", `func(${x},${y})`);
//   if (p) {
//     let i = document.createElement("i");
//     i.classList.add("fa-solid", "fa-chess-king");
//     i.style.width = "80%";
//     div.appendChild(i);
//   }
//   if (high) {
//     div.classList.add("opacity");
//   }
//   return div;
// }
// const my = (x, y) => {
//   let div = document.createElement("span");
//   div.style.backgroundColor = "black";
//   div.style.margin = "30px";
//   let k = 1;
//   for (let i = 1; i < 9; i++) {
//     let row = document.createElement("div");
//     let col = document.createElement("div");
//     for (let j = 1; j < 9; j++) {
//       let c = "white";
//       if (k % 2 === 0) c = "green";
//       if (x === i && y === j) {
//         console.log("Condition met");
//         col.appendChild(singleTile("red", j, i));
//       } else {
//         col.appendChild(singleTile(c, j, i));
//         k++;
//         console.log(k);
//       }
//     }
//     k++;
//     row.appendChild(col);
//     div.appendChild(row);
//   }
//   return div;
// };
// function func(x, y) {
//   console.log(x, y);
// }
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
function singleTile(c, x, y, p = false, validCo = []) {
  let div = document.createElement("td");
  div.style.backgroundColor = c;
  div.style.width = "55px";
  div.style.height = "55px";
  div.setAttribute("onclick", `func(${x},${y})`);
  if (p) {
    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-chess-king", "fa-3x", "damn");
    div.appendChild(i);
  }
  if (cordinateExists(validCo, x, y)) {
    div.classList.add("opacity");
    div.setAttribute("onclick", `func(${x},${y})`);
  }
  // if(high){
  //     div.classList.add("opacity")
  // }
  return div;
}

const my = (x, y) => {
  let center = document.createElement("center");
  let div = document.createElement("table");
  let another = document.getElementById("root");
  let k = 1;
  var validCo = possibleKingCoordinates(x, y);
  console.log(validCo);
  for (var i = 1; i < 9; i++) {
    var row = document.createElement("tr");
    var col = document.createElement("td");
    for (var j = 1; j < 9; j++) {
      let c = "white";
      if (k % 2 === 0) c = "black";
      if (x === i && y === j) {
        col.appendChild(singleTile("red", i, j, true, validCo));
      } else {
        col.appendChild(singleTile(c, i, j, false, validCo));
        k++;
      }
    }
    k++;
    row.appendChild(col);
    div.appendChild(row);
  }

  center.appendChild(div);
  another.appendChild(center);
  return div;
};

function func(x, y) {
  console.log(x, y);
  let root = document.getElementById("root");
  removeAllChildNodes(root);
  root.appendChild(chessBoard());
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function cell(c, x, y, p = false, validco) {
  let div = document.createElement("div");

  div.classList.add("damn", "parentCont");

  div.style.backgroundColor = c;

  if (p) {
    let img = document.createElement("img");
    img.src = "./image/knight.jpg";
    img.style.height = "100%";
    img.setAttribute("alt", "the img");
    div.appendChild(img);

    return div;
  }
  if (cordinateExists(validco, x, y)) {
    let img = document.createElement("img");
    img.src = "./image/circle.png";
    img.style.height = "100%";
    img.setAttribute("alt", "the img");
    div.appendChild(img);
    div.setAttribute("onclick", `func(${x},${y})`);
    return div;
  }

  return div;
}

function diag(x, y) {
  let k = x;
  let j = y;
  let arr = [];

  for (let i = 1; i < 16; i++) {
    if (k < 1 || j > 8) {
      break;
    }
    arr.push([k, j]);
    k--;
    j++;
  }
  return arr;
}
function func(x, y) {
  console.log(x, y);
  let root = document.getElementById("root");
  let finale = my(x, y);
  console.log(root.firstChild);
  removeAllChildNodes(root);
  root.appendChild(finale);
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function myChessBoard(x, y) {
  let parentCont = document.createElement("div");
  parentCont.classList.add("parentCont");
  let cont = document.createElement("div");

  let k = 1;
  var validCo = possibleKingCoordinates(x, y);
  for (var i = 1; i < 9; i++) {
    let row = document.createElement("div");
    let col = document.createElement("div");
    col.classList.add("cont");
    for (var j = 1; j < 9; j++) {
      let c = "white";
      if (k % 2 === 0) c = "black";
      if (x === i && y === j) {
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

document.getElementById("root").appendChild(myChessBoard(1, 1));
