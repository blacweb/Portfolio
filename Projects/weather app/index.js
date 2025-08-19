let temp=document.getElementById("temperature");
const humidity=document.getElementById("humidity");
const windSpeed=document.getElementById("windSpeed");
const discription=document.getElementById("description");
const fealing=document.getElementById("feeling");
// const city=document.getElementById("cityInput").value;
const error= document.getElementById("error");
const apiKey = "051c0a1d0870f5830315eb6a92647781";

async function getWeather() {
    const city=document.getElementById("cityInput").value.trim();
    const size=document.querySelector(".container");
  if (!city) {
    error.textContent = "Error: Please enter a valid city name.";
    size.style.height="550px";
    return;

  } else {
      const reponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
     try{

    if(!reponse.ok){
        error.textContent = "Invalid city.";
        return;
    }
    const data= await reponse.json();
    console.log(data);
    temp.textContent = `${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    discription.textContent= `Description: ${data.weather[0].description}`;
    windSpeed.textContent=`Speed: ${data.wind.speed}m/hr`;
    fealing.textContent=`feels like: ${data.main.feels_like}`;

    }
    catch(error){
        console.error(error);
    }
    error.textContent = ""; // ✅ CLEAR the error
    console.log("Valid city:", city);
  }
}


