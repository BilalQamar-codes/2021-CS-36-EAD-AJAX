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
                // updating the object
                let obj = JSON.parse(this.responseText);
                Response.city = obj.name;
                Response.country = obj.sys.country;
                Response.temp = obj.main.temp;
                Response.feels = obj.main.feels_like;
                Response.icon = obj.weather[0].icon;
                Response.des = obj.weather[0].description;
                Response.humidity = obj.main.humidity;
                Response.wind = obj.wind.speed;
                console.log(Response.city+Response.country);
                console.log(document.getElementById("detail").innerHTML)
                
                // changing all the fields according
                document.getElementById("detail").innerHTML = Response.city+","+Response.country;
                document.getElementById("temp").innerHTML = "Temprature:   "+Response.temp+" C";
                document.getElementById("feels").innerHTML = "Feels-Like:   "+Response.feels + " C";
                document.getElementById("des").innerHTML = "Description:   "+Response.des;
                document.getElementById("humidity").innerHTML = "Humidity:   "+Response.humidity+" %";
                document.getElementById("wind").innerHTML = "Wind-Speed:   "+Response.wind+" m/s";
                var iconurl = "http://openweathermap.org/img/w/" + Response.icon + ".png";
                document.getElementById("icon").src= iconurl;
            }
            else{
                alert("Not Found!!!!!1");
            }
        }
        // send request
        
        xhr.send();
    }

    else{
        alert("City name can not be Empty!!!")
    }


}