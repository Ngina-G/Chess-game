let galaxy=document.querySelector(".container")




//bishop arrays

function rookTop(a,b){
  let myArr=[];
    for(let i=b;i<9;i++){
        myArr.push([a,i])
    }
    myArr.shift()
    return myArr;
    
}
function rookBottom(g,h){
  let arr=[];
    for(let i=h;i>=1;i--){
       arr.push([g,i]);
    }
    arr.shift();
    return arr;
}
function rookRight(u,k){
  let additionalArr=[];
    for(let i=u;i<9;i++){
        additionalArr.push([i,k]);
    }
    additionalArr.shift();
    return additionalArr;
}
function rookLeft(j,k){
  let theArr=[];
    for(let u=j;u>0;u--){
        theArr.push([u,k]);
    }
    theArr.shift();
    return theArr;
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
function diag(x, y) {
  let k = x;
  let j = y;
  let arr = [];

  for (let i = 1; i < 9; i++) {
    if (k < 1 || j > 8||k>8||j<1) {
      break;
    }
    arr.push([k, j]);
    k++;
    j++;
  }
  arr.splice(0,1);
  return arr;
}
function bishopLeft(r,q){
  let diagonaLeft=[];
  let k = r;
  let j = q;

  for (let i = 1; i < 9; i++) {
    if (k < 1 || j > 8||k>8||j<1) {
      break;
    }
    diagonaLeft.push([k, j]);
    k--;
    j--;
  }
  diagonaLeft.splice(0,1);
  return diagonaLeft;
}
function bishopRight(w,f){
  let diagonalRight=[]
  let k = w;
  let j = f;

  for (let i = 1; i < 9; i++) {
    if (k < 1 || j > 8||k>8||j<1) {
      break;
    }
    diagonalRight.push([k, j]);
    k++;
    j--;
  }
  diagonalRight.splice(0,1);
  return diagonalRight;
}
function bishopBottom(e,z){
  let diagonalBottom=[];
  let k = e;
  let j = z;

  for (let i = 1; i < 9; i++) {
    if (k < 1 || j > 8||k>8||j<1) {
      break;
    }
    diagonalBottom.push([k, j]);
    k--;
    j++;
  }
  diagonalBottom.splice(0,1);
  return diagonalBottom;
}

function possibleRookCoordinates(l,m){
  
  let finalArr=[...rookBottom(l,m),...rookLeft(l,m),...rookRight(l,m),...rookTop(l,m),...diag(l,m),...bishopLeft(l,m),...bishopBottom(l,m),...bishopRight(l,m)];
  return finalArr;
   
  }
function singleTile(c,x,y,p=false,validCo=[]){
  let div=document.createElement("td")
   div.style.backgroundColor=c;
   div.style.width="55px";
   div.style.height="55px"
   div.setAttribute('onclick',`func(${x},${y})`)
  if(p){
    let i=document.createElement("i");
    i.classList.add("fa-solid", "fa-chess-queen","fa-2x","random")
    div.appendChild(i)
    return div
  }if (cordinateExists(validCo, x,y)) {
    div.classList.add("opacity");
    div.setAttribute("onclick", `func(${x},${y})`);
    return div;
  }
  // if(high){
  //     div.classList.add("opacity")
  // }
  return div;
}


const my=(x,y)=>{
  let center = document.createElement('center');
   let div=document.createElement("table");
   let another=document.getElementById("root");
    let k=1;
    var validCo = possibleRookCoordinates(x, y);
    console.log(validCo)
    for(var i=1;i<9;i++){
      var row=document.createElement("tr")
      var col=document.createElement("td")
      for(var j=1;j<9;j++){
          let c="white"
        if(k%2===0)c="black"
        if(x===i&& y===j){
            col.appendChild(singleTile(c,i,j,true,validCo))
            
        }
        else{
            col.appendChild(singleTile(c,i,j,false,validCo))
            k++
        }
      }k++
      row.appendChild(col)
      div.appendChild(row)
    }
      
      center.appendChild(div);
      another.appendChild(center);
      return div;
  }

function func(x, y) {
    console.log(x, y);
    let root = document.getElementById("root");
    let finale=my(x,y);
    console.log(root.firstChild)
    removeAllChildNodes(root)
    root.appendChild(finale);
  }
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}