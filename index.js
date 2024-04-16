const hourEl = document.getElementById("hour");
const mintEl=document.getElementById("mint")
const secEl = document.getElementById("sec");
const ampmEl = document.getElementById("ampm")
const date=  Date.now()

function updateClock() {
    let h=new Date().getHours();
    let m =new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm = "AM"
    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    hourEl.innerText = h;
    mintEl.innerText=m;
    secEl.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);

} 
updateClock()