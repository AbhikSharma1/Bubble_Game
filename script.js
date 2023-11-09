var timer = 15;
var score = 0;
var hitrn = 0;

function makeBubble () {
    var clutter = "";

    for(var i = 1; i<=224; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += ` <div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer () {
    var timer1 = setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timer1);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

function getNewHit () {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function increaseScore () {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clickedNumber = Number(dets.target.textContent);
   if(clickedNumber === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
   }
});

getNewHit ();

runTimer ();
makeBubble ();
