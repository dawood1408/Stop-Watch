var hour = 0;
var min= 0;
var sec=0;
var msec =0;
var intterval;
var hourHeading=document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById("msec");
function startTimer(){
    msec++;
    msecHeading.innerHTML=msec
    if(msec>=100){
        sec++;
        secHeading.innerHTML=sec
        msec=0;
        
    }
    else if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
    else if(min>=2) {
        hour++;
        hourHeading.innerHTML=hour;
        min=0;
    }
}

function start(){
    intterval=setInterval(startTimer,10)
}
function pause(){
    clearInterval(intterval);

}
function Reset(){
 hour = 0;
 min = 0;
 sec = 0;
 msec = 0;
hourHeading.innerHTML=hour;
minHeading.innerHTML =min;
msecHeading.innerHTML=msec;
secHeading.innerHTML=sec;
pause()
}