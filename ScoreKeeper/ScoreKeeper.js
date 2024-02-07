const p1Btn=document.querySelector("#p1Btn");
const p2Btn=document.querySelector("#p2Btn");
const p1=document.querySelector("#P1");
const p2=document.querySelector("#P2");
const reset=document.querySelector("#reset");
const playTo=document.querySelector("#playTo");

let p1Score=0;
let p2Score=0;
let winningScore=3;
let isGameOver=false;

playTo.addEventListener('change', (e)=>{
    console.log(e.target.value);
    winningScore=parseInt(e.target.value);
    resetfct();
});

p1Btn.addEventListener("click",function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningScore){
            p1.classList.add("has-text-success");
            p2.classList.add("has-text-danger");
            isGameOver=true;
            p1Btn.disabled=true;
            p2Btn.disabled=true;
        }
        p1.textContent=p1Score;
    }
})
p2Btn.addEventListener("click",function(){
    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winningScore){
            p2.classList.add("has-text-success");
            p1.classList.add("has-text-danger");
            isGameOver=true;
            p1Btn.disabled=true;
            p2Btn.disabled=true;
        }
        p2.textContent=p2Score;
    }
})
reset.addEventListener("click",resetfct);

function resetfct(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1.textContent=0;
    p2.textContent=0;
    p2.classList.remove("has-text-success","has-text-danger");
    p1.classList.remove("has-text-danger","has-text-success");
    p1Btn.disabled=false;
    p2Btn.disabled=false;
}