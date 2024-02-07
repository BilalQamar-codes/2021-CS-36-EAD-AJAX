let fetchData = document.getElementById("fetchBtn");

fetchData.addEventListener('click', getData);

function getData() {

    console.log("the button is clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=ef1f125082a3913ed7372c478a475efa", true);

    xhr.onprogress= function () {
        console.log("On progress.......");
    }

    xhr.onload = function () {
        if (xhr.status === 200)
        {
            console.log(this.responseText);
        }
    }

    // send request
    xhr.send();


}