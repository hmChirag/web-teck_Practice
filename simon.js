let level=0;
let gameseq=[];
let userseq=[];
let started=false;
let btns=["yellow","red","green","blue"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    cheackans(userseq.length-1);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randindx=Math.floor(Math.random()*3);
    let randcolor=btns[randindx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
    
}

function cheackans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,250);
        }
    }
    else{
            h2.innerHTML=`game over!your score was <b>${level}</b> <br>Press any key to start<br>`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";            
            },150);
            reset();
    }
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}