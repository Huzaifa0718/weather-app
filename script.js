let x = document.getElementById("temp");
let z = document.getElementById("name");
let y = document.getElementById("input");
let m = document.getElementById("windspeed");
let p = document.getElementById("min");
let q = document.getElementById("max");
// let m = document.getElementById("img");
let result = document.getElementById("result");

// y.value = query.innerHTML
// let input = prompt("enter the location") 
let weather = () => {
  let cityValue = y.value;
  // let unit = "metric";
  // query.innerHTML = inputBox.value 

  if (cityValue.length == 0) {
    x.innerHTML = `<h2>enter  a city name</h2>`;
  }
  else {
    let p = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=6fa0b270e4db184ae291321138d02f89&units=metric")
    p.then(response => response.json())
      .then((data) => {
        console.log(data);
         result.textContent = data.name;
        x.innerHTML = `${(data.main.temp)}°C`
        
         z.textContent = data.weather[0].description;
        m.textContent = ` Humidity :    ${(data.main.humidity)} %`
      // p.innerHTML = `${(data.main.temp_min)}`
       q.innerHTML = ` max temp :  ${(data.main.temp_max)} °C`
         console.log(data.main.temp)
         console.log(data.main.temp_min)
         console.log(data.main.temp_max)
        console.log(data.weather[0].icon)
        console.log(data.weather[0].description)


        
      })
  }
}
weather();


