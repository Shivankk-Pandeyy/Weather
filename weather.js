const apikey="bc10ec65f2f0c474ce63aa769a6c9dee";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.getElementById("WW");
async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.getElementById("C").innerHTML=data.name;
    document.getElementById("T").innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById("hm").innerHTML=data.main.humidity+"%";
    document.getElementById("ws").innerHTML=data.wind.speed+"Km/h";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="Images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="Images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="Images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="Images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="Images/mist.png";
    }

}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);    
});