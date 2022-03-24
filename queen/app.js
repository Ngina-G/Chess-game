let theArr=[];
let myArr=[];
let arr=[];
let additionalArr=[];
function rookTop(a,b){
    for(let i=b;i<9;i++){
        myArr.push([a,i])
    }
    return myArr.shift();
    
}
function rookBottom(g,h){
    for(let i=h;i>0;i--){
       arr.push([g,i]);
    }
    return arr.shift();
}
function rookRight(u,k){
    for(let i=u;i<9;i++){
        additionalArr.push([i,k]);
    }
    return additionalArr.shift();
}
function rookLeft(j,k){
    for(let u=j;u>0;u--){
        theArr.push([u,k]);
    }
    return theArr.shift();
}
function possibleRookCoordinates(l,m){
  rookBottom(l,m);
  rookLeft(l,m);
  rookRight(l,m);
  rookTop(l,m);
let finalArr=[...additionalArr,...arr,...myArr,...theArr];
  return finalArr;
 
}
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

  const TheTile = (color, c, p, validCo = []) => {
    let div = document.createElement("div");
    div.style.backgroundColor = color;
    div.style.display = "inline-block";
    div.style.height = "50px";
    div.style.width = "50px";
   div.setAttribute("class","random2")
    if (c.x === p.x && c.y === p.y) {
      let i = document.createElement("i");
      i.classList.add("fa-solid", "fa-chess-queen", "fa-3x");
      i.style.width = "80%";
      div.appendChild(i);
      return div;
    }
  
    if (cordinateExists(validCo, c.x, c.y)) {
      div.classList.add("opacity");
      div.setAttribute("onclick", `func(${c.x},${c.y})`);
      return div;
    }
    return div;
  };
  const my2 = (x, y) => {
    let div = document.createElement("span");
    div.style.backgroundColor = "black";
    div.style.margin = "30px";
    let k = 1;
    let validCo = possibleRookCoordinates(x,y);
    console.log(validCo);
  
    for (var i = 1; i < 9; i++) {
      var row = document.createElement("div");
      var col = document.createElement("div");
      for (var j = 1; j < 9; j++) {
        let color = "white";
        if (k % 2 === 0) color = "green";
        if (x === i && y === j) {
          col.appendChild(
            TheTile(color, { x: i, y: j }, { x: x, y: y }, validCo)
          );
        } else {
          col.appendChild(
            TheTile(color, { x: i, y: j }, { x: x, y: y }, validCo)
          );
          k++;
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
    let root = document.getElementById("root");
    root.removeChild(root.firstChild);
    root.appendChild(my2(x, y));
  }  