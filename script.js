const apikey="1a57f4ab4ea525193d43e5da67271f7f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();

 
        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML =data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
        document.querySelector(".wind").innerHTML =data.wind.speed +"km/h";
    
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display="none";
        

    }
   
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

});

