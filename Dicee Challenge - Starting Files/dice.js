
let imgList=document.querySelectorAll("img");
console.log(imgList);
for(let i=0;i<imgList.length;i++){
    imgList[i].setAttribute("src","./images/dice6.png");
}

function launchDice(){
    let dice;
    dice=Math.floor(Math.random()*6+1);
    return dice;
}

let diceResult=launchDice();
imgList[0].setAttribute("src","./images/dice"+diceResult+".png");

let diceResult2=launchDice();
imgList[1].setAttribute("src","./images/dice"+diceResult2+".png");

let h1Flag=document.querySelector('h1');
if(diceResult>diceResult2){
    h1Flag.innerHTML="<h1 style='font-size:5rem'>&#128681  Player1 wins </h1>";
}else if(diceResult<diceResult2){
    h1Flag.innerHTML="<h1 style='font-size:5rem'>Player2 wins &#128681 </h1>";
}else{
    h1Flag.innerHTML="<h1 style='font-size:5rem'>&#9823No Winner&#9823</h1>";
}

document.onkeydown=function handleKeyDown(e){
    console.log(e);
    e.preventDefault();
    if(e.keyCode==32){
        window.location.reload();
    }
}