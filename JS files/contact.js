function send(){
    const error=document.querySelector(".error");
    const send=document.querySelector(".Submit");
    const sent=document.querySelector(".sent");
    const email=document.getElementById("email").value;
if(email.includes("@")){
    send.style.display="none";
   sent.innerHTML="sent ✅"
   error.innerHTML="";
   sent.style.display="flex"
}
else{
    error.innerHTML="Please Enter Valid Email"
}
}