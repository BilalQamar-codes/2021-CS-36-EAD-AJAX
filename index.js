let fetchData = document.getElementById("fetchBtn");
let Response = {
                city: "XXXX",
                country: "xxxx",
                temp: 1111,
                feels: 1111,
                icon: "cccc",
                des: "abcd",
                humidity: 0.00,
                wind: 0.00
            };
let city = document.getElementById("cityname").value;

fetchData.addEventListener('click', getData);

function getData() {

    console.log("the button is clicked");
    const xhr = new XMLHttpRequest();
    city = document.getElementById("cityname").value;
    if (city !== "")
    {
        xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef1f125082a3913ed7372c478a475efa&units=metric`, true);

    

        xhr.onprogress= function () {
            console.log("On progress.......");
        }

        xhr.onload = function () {
            if (xhr.status === 200)
            {
                let obj = JSON.parse(this.responseText);
                Response.city = obj.name;
                Response.country = obj.sys.country;
                Response.temp = obj.main.temp;
                Response.feels = obj.main.feels_like;
                Response.icon = obj.weather[0].icon;
                Response.des = obj.weather[0].description;
                Response.humidity = obj.main.humidity;
                Response.wind = obj.wind.speed;
                
            }
        }
        // send request
        xhr.send();
    }

    else{
        alert("City name can not be Empty!!!")
    }


}