window.onload = function() {
    let minutes=0;
    let seconds=0;
    let miliseconds=0;
    let Minutes=document.querySelector('#minutes');
    let Seconds=document.querySelector('#seconds');
    let Miliseconds=document.querySelector('#miliseconds');
    let Startbtn=document.querySelector('#Start');
    let Stopbtn=document.querySelector('#Stop');
    let Resetbtn=document.querySelector('#Reset');
    let Lapbtn=document.querySelector('#Lap');
    let laps=document.querySelector('.laps');
    let resetlaps=document.querySelector('#resetlaps');
    const clearButton=document.getElementsByClassName("resetlaps")[0];

    let Interval;

    getTimer=()=>{
        return (minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)+":"+(miliseconds<10?"0"+miliseconds:miliseconds);
    };

    const startTimer=()=>{
        miliseconds++;
        if(miliseconds<=9){
            Miliseconds.innerHTML='0'+miliseconds;
        }
        if(miliseconds>9){
            Miliseconds.innerHTML=miliseconds;
        }
        if(miliseconds>99){
            seconds++;
            Seconds.innerHTML='0'+seconds;
            miliseconds=0;
            Miliseconds.innerHTML='0'+0;
        }
        if(seconds>9){
            Seconds.innerHTML=seconds;
        }
        if(seconds>59){
            minutes++;
            Minutes.innerHTML='0'+minutes;
            seconds=0;
            Seconds.innerHTML='0'+0;
        }
    };

    Startbtn.onclick=()=>{
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);
    };

    Stopbtn.onclick=()=>{
        clearInterval(Interval);
    };

    Resetbtn.onclick=()=>{
        clearInterval(Interval);
        miliseconds='00'
        seconds='00'
        minutes='00'
        Miliseconds.innerHTML=miliseconds;
        Seconds.innerHTML=seconds;
        Minutes.innerHTML=minutes;
    };
    Lapbtn.onclick=()=>{
        
        if(Interval){
            var li=document.createElement("li");
            li.innerHTML=getTimer();
            laps.appendChild(li);
        }
        clearButton.classList.remove("hidden");
    };
    const clearAll=()=>{
        laps.innerHTML="";
        laps.append(clearButton);
        clearButton.classList.add("hidden");
    };
    clearButton.addEventListener("click",clearAll);
};
