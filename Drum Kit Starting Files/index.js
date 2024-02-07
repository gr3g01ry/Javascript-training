
window.addEventListener('load', function() {
    console.log('All assets are loaded')
})

window.onload =()=>{
    // alert("c'est liée");
    console.log("c'est bon!.");
};

// document.addEventListener('click',(e)=>{
//     console.log(e);
// })

document.querySelectorAll("button").forEach((elt)=>{
    elt.addEventListener("click",(e)=>{
        console.log(e);
        let value=e.target.innerText;
        btnAnimation(value);
        e.target.classList.toggle("white");
        getBtnClicked(value);
    }
)});


document.addEventListener('keydown',(e)=>{
    console.log(e);
    // e.preventdefault();
    // let val=btnAnimation(e.key);
    let ekey=' ';
    ekey=e.key;
    console.log(ekey+'greg');
    if(e.code=='Space')ekey="space";
    console.log('resr' + ekey +'test');
    btnAnimation(ekey);
    setTimeout(()=>{
        btnAnimation(ekey);
    },500);
    document.querySelector("."+ ekey +" ").classList.toggle("white");
    // document.querySelector('.'+ e.key +'').style.color="#"+newColor ()+"";
    getBtnClicked(ekey);
})

function newColor () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#"+randomColor;
  }
  
function getBtnClicked(e){
    console.log(e);
    console.log(e)
    switch(e){
        case "a":
            // console.log("test A");
            // e.target.style.color="white";
            let tom11=new Audio ('./sounds/tom-1.mp3').play();
            // console.log("test A");
            // soundMaker.src="./sounds/tom-1.mp3";
            // soundMaker.play();
            break;
        case "z":
            console.log("test Z");
            let tom22=new Audio ('./sounds/tom-2.mp3').play();
            break;
        case "e":
            console.log("test E");
            let tom33=new Audio ('./sounds/tom-3.mp3').play();
            break;
        case "r":
            console.log("test R");
            let tom44=new Audio ('./sounds/tom-4.mp3').play();
            break;
        case "t":
            console.log("test T");
            let crash2=new Audio ('./sounds/crash.mp3').play();
            break;
        case "y":
            console.log("test Y");
            let snare2=new Audio ('./sounds/snare.mp3').play();
            break;
        case "space":
            // e.preventDefault();
            console.log("test SPACE");
            let BassDrum2=new Audio ('./sounds/Bass-Drum-kick.mp3').play();
            break;
        default:
            console.log("not good drum click");
            break;
    }
}

function btnAnimation(currentKey ){
    let button= document.querySelector('.'+currentKey);
    button.classList.toggle("pressed");
}




function add(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}
function minus(a,b){
    return a-b;
}

//no good because too banding to one function
// function operator(a,b){
//     return add(a,b);
// }
// console.log(operator(2,5));

//better link function as arguments
function operator(a,b,fct){
    return fct(a,b);
}
console.log(operator(5,4,add));
console.log(operator(5,4,multiply));
console.log(operator(5,4,divide));
console.log(operator(5,4,minus));
//give easy way to params with fct ++++++++++++++++++++++++LOVE