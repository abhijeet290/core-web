document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;

  function updateTemp(data){
    const element=document.getElementById('weatherInfo')
    element.innerHTML=`Today's temperature is ${data.current.temp_c}&deg;C`
  }
  const prom=fetch(`
        http://api.weatherapi.com/v1/current.json?key=89caa1c6cf8e42229e0153918250201&q=${place}&aqi=no`);

        prom
        .then((res) => res.json())
        .then((data) => updateTemp(data))
        .catch((error) => console.log(error));
});

// document.querySelector("button").addEventListener("click", () => {
//   const place = document.getElementById("location").value;

//   function updateTemp(data) {
//     const element = document.getElementById("weatherInfo");
//     element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
//   }

//   const prom = fetch(`
//       http://api.weatherapi.com/v1/current.json?key=89caa1c6cf8e42229e0153918250201&q=${place}&aqi=no`);

//   prom.then((response) => response.json()).then((data) => updateTemp(data));
// });
