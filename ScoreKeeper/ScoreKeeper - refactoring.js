const p1={
    score:0,
    button:document.querySelector("#p1Btn"),
    display:document.querySelector("#P1"),
}
const p2={
    score:0,
    button:document.querySelector("#p2Btn"),
    display:document.querySelector("#P2"),
}

const reset=document.querySelector("#reset");
const playTo=document.querySelector("#playTo");

let winningScore=3;
let isGameOver=false;


playTo.addEventListener('change', (e)=>{
    console.log(e.target.value);
    winningScore=parseInt(e.target.value);
    resetfct();
});

p1Btn.addEventListener("click",function(){
    updateScore(p1,p2);
})
p2Btn.addEventListener("click",function(){
    updateScore(p2,p1);
})
reset.addEventListener("click",resetfct);


function updateScore(player, opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score===winningScore){
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            isGameOver=true;
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score;
    }
}

function resetfct(){
    isGameOver=false;
    p1.score=0;
    p2.score=0;
    p1.display.textContent=0;
    p2.display.textContent=0;
    p1.display.classList.remove("has-text-success","has-text-danger");
    p2.display.classList.remove("has-text-danger","has-text-success");
    p1.button.disabled=false;
    p2.button.disabled=false;
}