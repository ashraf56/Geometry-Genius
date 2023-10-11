let N=0;

// Triangle card js
document.getElementById('triangle-btn').addEventListener('click' ,function(){

let TriAngleInputB=ALLInputElmentID('Triangleinput-b');
let TriangleinputH=ALLInputElmentID('Triangleinput-h');
let Triangle =(0.5 *TriAngleInputB*TriangleinputH);
let Tname=document.getElementById('triangle-name').innerText;
if(isNaN(Triangle) || TriAngleInputB<=0 || TriangleinputH<=0 ){
  alert('Please enter a valid input')
  return
}
N+=1;
createElement(Tname ,Triangle)

})


// function for input feild

function ALLInputElmentID(ID) {
  let Allinput=document.getElementById(ID);
  let inputString=Allinput.value;
  let AllinputStringtoNumber=parseFloat(inputString);
  Allinput.value='';
  return AllinputStringtoNumber
}

function createElement(Tname ,angle) {
  let button=document.createElement('button');
  let tbody=document.getElementById('Tbody');
button.textContent='convert to cm²'
button.style.backgroundColor='violet'
button.style.color='white'
button.style.border='none'
button.style.fontWeight='bold'

button.style.borderRadius='5px'
button.style.width='140px'

let td=document.createElement('td');
td.appendChild(button)

let tr=document.createElement('tr');
tr.innerHTML=`
<tr>
            <th >${N}</th>
            <td>${Tname}</td>
            <td>${angle}cm²</td>
            
          </tr>
`
tr.appendChild(td)

tbody.appendChild(tr);
}

//function for TextFeild Element

function getAllTxtElement(Tid) {
  let text=document.getElementById(Tid).innerText;
  return text;
}


// Rectangle card js

document.getElementById('Rectangle-btn').addEventListener('click',function () {
 
let RectangleInputW=ALLInputElmentID('Rectangleinput-w');
let RectangleINputL=ALLInputElmentID('Rectangleinput-l');
let RectangleName=getAllTxtElement('Rectangle-text')
let Rectangle=RectangleInputW*RectangleINputL;
if(isNaN(Rectangle)|| RectangleInputW <=0 || RectangleINputL<=0){
  alert('Please enter a valid input')
  return
}

N+=1;
createElement(RectangleName ,Rectangle)

})



//parallelogram cad js 

document.getElementById('parallelogram-btn').addEventListener('click',function(){

// let parallelogram=document.getElementById('parallelogram-text').innerText;
let parallelogram= getAllTxtElement('parallelogram-text');
let ParallelogramArea= 10*12;
N+=1;
createElement(parallelogram,ParallelogramArea);


})


//Rhombus card js 

document.getElementById('Rhombus-btn').addEventListener('click',function () {
  
let RhombusName=getAllTxtElement('Rhombus-text');
let RhombusArea=0.5*16*8;
N+=1;
createElement(RhombusName, RhombusArea);

})

// pentagon card js
document.getElementById('pentagon-btn').addEventListener('click',function () {
  
  let PentagonName=getAllTxtElement('pentagon-text');
  let PentagonArea=0.5*6*10;
  N+=1;
  createElement(PentagonName, PentagonArea);
  
  })
  
// Ellipse card js
document.getElementById('ellipse-btn').addEventListener('click',function () {
  
  let EllipseName=getAllTxtElement('ellipse-text');
  let EllipseAreaS=(3.1416*10*4).toFixed(2);
  let EllipseArea=parseFloat(EllipseAreaS);
  N+=1;
  createElement(EllipseName, EllipseArea);
  
  })
  
  

 