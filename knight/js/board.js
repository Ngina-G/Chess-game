"use strict";
let anotherplace = [];
const chessBoard = document.querySelector(".knightBoard");
function knightCoordinates(x=1, y=1) {
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
  console.log(knightCoordinates);
};
// get valid coordinates
function validCoordinates (arr, a, b){
  if(a > 8 || a < 0 || b > 8 || b > 0){
    return false;
  } 
  for(let i =0; i < arr.length; i++){
    if(arr[i][0] === a && arr [i][i] === b){
      return true;
    }
  }
  return false;
}
// validCoordinates();


function chessTable (){
  const center = document.createElement("center");
  const table = document.createElement("table");
  for (let i = 1; i < 9; i++) {
    const tr = document.createElement("tr");
    for (let j = 1; j < 9; j++) {
      const td = document.createElement("td");
      if ((i + j) % 2 === 0) {
        td.setAttribute("class", "cell whitecell");
        tr.appendChild(td);
      } else {
        td.setAttribute("class", "cell blackcell");
        tr.appendChild(td);
      }
    }
    table.appendChild(tr);
    
  }
  center.appendChild(table);
  table.setAttribute("cellspacing", "0");
  table.setAttribute("width","500px");
  table.setAttribute("height", "500px");
  document.body.appendChild(center);

};
chessTable();

function singleTile(c, x, y, p = false, high = false) {
  let div = document.createElement("div");
  div.style.backgroundColor = c;
  div.style.display = "inline-block";
  div.style.height = "50px";
  div.style.width = "50px";
  div.setAttribute("onclick", `func(${x},${y})`);
  if (p) {
    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-chess-king");
    i.style.width = "80%";
    div.appendChild(i);
  }
  if (high) {
    div.classList.add("opacity");
  }
  return div;
}
const my = (x, y) => {
  let div = document.createElement("span");
  div.style.backgroundColor = "black";
  div.style.margin = "30px";
  let k = 1;
  for (let i = 1; i < 9; i++) {
    let row = document.createElement("div");
    let col = document.createElement("div");
    for (let j = 1; j < 9; j++) {
      let c = "white";
      if (k % 2 === 0) c = "green";
      if (x === i && y === j) {
        console.log("Condition met");
        col.appendChild(singleTile("red", j, i));
      } else {
        col.appendChild(singleTile(c, j, i));
        k++;
        console.log(k);
      }
    }
    k++;
    row.appendChild(col);
    div.appendChild(row);
  }
  return div;
};
function func(x, y) {
  console.log(x, y);
}