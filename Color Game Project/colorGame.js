console.log("Depart color Game Guess");

var game={};
//var colors=[
//    "rgb(255, 0, 0)",
//    "rgb(0, 255, 0)",
//    "rgb(0, 0, 255)",
//    "rgb(255, 255, 0)",
//    "rgb(255, 0, 255)",
//    "rgb(255, 50, 50)",
//]
/*
game.init=funtion(){
    setUpModeBtn();
    setUpSquares();
    reset();
}
game.init();
*/

var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetBtn=document.getElementById("reset");
var easyBtn=document.querySelector("#btnEasy");
var hardBtn=document.querySelector("#btnHard");
var modeBtn=document.getElementsByClassName("mode");

init();

function init(){
    //mode btn event listener
    setUpModeBtn();
    setUpSquares();
}

function setUpModeBtn(){
       for(var i=0; i<modeBtn.length;i++){
    modeBtn[i].addEventListener('click',function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
//        this.classList.toggle("selected");
        this.textContent==="Easy"? numSquares=3 : numSquares=6; 
        reset();
//        if(this.textContent=="Easy"){
//            numSquares=3;
//        }else{
//            numSquares=6;
//        }
        })
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor= colors[i];

        //add event listenr
        squares[i].addEventListener("click",function(){
            console.log("clicked suqares");
            var colorChoice=this.style.backgroundColor;
           // console.log(colorChoice, pickedColor);
            if (colorChoice==pickedColor){
                console.log("Correct")
                messageDisplay.textContent="+10pt pour Griffon d'or";
                changeColors(colorChoice);
                h1.style.backgroundColor=pickedColor;
                resetBtn.textContent="Play Again";
                document.body.style.backgroundColor="white";

    //            colors.forEach(x,pickColor());
            }else{
                this.style.background="#232323";
                console.log("-10pt pour Griffont D'or ")
                messageDisplay.textContent="-5pt contre griffon d'or";
            }
        })
    }
    reset();
}
for(var i=0; i<modeBtn.length;i++){
    modeBtn[i].addEventListener('click',function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
//        this.classList.toggle("selected");
        this.textContent==="Easy"? numSquares=3 : numSquares=6; 
        reset();
//        if(this.textContent=="Easy"){
//            numSquares=3;
//        }else{
//            numSquares=6;
//        }
    })
}
function reset(){
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0; i<squares.length; i++){
//    squares[i].style.backgroundColor= colors[i];
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    resetBtn.textContent="New Color";
    messageDisplay.textContent="";
    h1.style.backgroundColor="purple";
    document.body.style.backgroundColor="#232323";
}

//easyBtn.addEventListener('click',function(){
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numSquares=3;
//    colors=generateRandomColor(numSquares);
//    pickedColor=pickColor();
//    colorDisplay.textContent=pickedColor;
//    for(var i=0; i<squares.length; i++){
//        if(colors[i]){
//            squares[i].style.background=colors[i]
//        }else{
//            squares[i].style.display="none";
//        }
//    }
//})
//
//hardBtn.addEventListener('click',function(){
//    easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    numSquares=6;
//    colors=generateRandomColor(numSquares);;
//    pickedColor=pickColor();
//    colorDisplay.textContent=pickedColor;
//    for(var i=0; i<squares.length; i++){
//        if(colors[i]){
//            squares[i].style.background=colors[i];
//            squares[i].style.display="block";
//        }
//    }
//})

resetBtn.addEventListener('click', function(){
    reset();
//    colors=generateRandomColor(numSquares);
//    pickedColor=pickColor();
//    colorDisplay.textContent= pickedColor;
//    for(var i=0; i<squares.length; i++){
//    squares[i].style.backgroundColor= colors[i];
//    }
//    this.textContent="New Color";
//    messageDisplay.textContent="";
//    h1.style.backgroundColor="purple";
//    document.body.style.backgroundColor="#232323";
});

//colorDisplay.style.color=pickedColor;
//colorDisplay.textContent= pickedColor;//


function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
   var random= Math.floor(Math.random()*colors.length);
return colors[random];
}
function generateRandomColor(num){
    var arr=[];
    for(var i=0; i< num ; i++){
        arr[i]=randomColor();
    }
    return arr;
}

function randomColor(){
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', '+ b + ')';
}