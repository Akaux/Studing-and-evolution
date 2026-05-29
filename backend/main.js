
const btn1 = document.getElementById("btn-str")
const btn2 = document.getElementById("btn-stp")
const btn3 = document.getElementById("btn-rst")


let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let cron;

function start(){
pause();
cron = setInterval(() => {timer();}, 10);
}
function pause(){
    clearInterval(cron);
}

function reset(){
pause()
 hours = 0;
 minutes = 0;
 seconds = 0;
 miliseconds = 0;
 document.getElementById('hours').innerText = '00';
 document.getElementById('minutes').innerText = '00';
 document.getElementById('seconds').innerText = '00';
}

function timer(){
    if((miliseconds += 10) == 1000){
    miliseconds = 0;
    seconds ++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes ++;
    }
    
    if(minutes == 60){
        minutes = 0;
        hours ++;
    }
    document.getElementById('hours').innerText = returnData(hours);
    document.getElementById('minutes').innerText = returnData(minutes);
    document.getElementById('seconds').innerText = returnData(seconds);
}

btn1.addEventListener('click', start);
btn2.addEventListener('click', pause);
btn3.addEventListener('click', reset);

function returnData(input){
 return input >= 10 ? input : `0${input}`
}

function redemXP (){
    alert("Paraben !");
}