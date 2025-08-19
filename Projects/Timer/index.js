const hour=document.querySelector(".hour")
const min=document.querySelector(".min")
const sec=document.querySelector(".sec")
const milli=document.querySelector(".miliSec")
// const audio=document.getElementById("audio");
function start(){
    const stop=document.querySelector(".stop");
    const reset=document.querySelector(".reset");
    const start=document.querySelector(".start");
    start.style.display="none";
    let count = 0;
    const updateMiliSec= setInterval(() => {
    milli.innerHTML++
    count++;
       if(milli.innerHTML>380){
        milli.innerHTML="00";
        sec.innerHTML++
        // document.getElementById("audio").play();
       }

       if(sec.innerHTML>60){
        sec.innerHTML=0;
        min.innerHTML++;
       }
       if(min.innerHTML>60){
        min.innerHTML="00";
        hour.innerHTML++;
       }
        }, 1);
        stop.addEventListener("click",()=>{
            start.style.display="inline";
            clearInterval(updateMiliSec);
        });
        reset.addEventListener("click",()=>{
            hour.innerHTML="00";
            min.innerHTML="00";
            sec.innerHTML="00";
            milli.innerHTML="00";
        })
     

}


