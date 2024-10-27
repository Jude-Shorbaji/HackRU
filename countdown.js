const startingMinutes =25;
let time=startingMinutes*60;
const countdownEL= document.getElementById('countdown');

let refreshIntervalId = setInterval(updateCountdown,1000);

function updateCountdown(){
    const minutes=Math.floor(time/60)<10 ? "0"+Math.floor(time/60): Math.floor(time/60);
    let seconds=time%60<10 ? "0"+time%60: time%60;
    
    countdownEL.innerHTML = minutes+":"+seconds;
    time--;
    time = time < 0 ? 0 : time; 
}

function newTime(){
    time=window.prompt("How many minutes will you study for?","enter number")*60;
}