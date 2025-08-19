const fact=document.querySelector(".fact");
const res=fetch('https://uselessfacts.jsph.pl/api/v2/facts/random').then(res=>res.json()).then(data=>fact.innerHTML="💡"+data.text)
const today_fact=document.querySelector(".today")
function gen(){
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/today').then(res=>res.json()).then(data=>today_fact.innerHTML=data.text);
}