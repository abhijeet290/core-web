// callback hell

// async task
const promises = fetch(`
http://api.weatherapi.com/v1/current.json?key=89caa1c6cf8e42229e0153918250201&q=Patna&aqi=no`);
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// promises
//   .then((response) => {
//     const pro=response.json()
//     pro.then(data=>console.log(data))
//   })
//   .catch((error) => {
//     console.log(error);
//   });

promises
  .then((res) => res.json())
  .then((data) => console.log(data.current.temp_c))
  .catch((error) => console.log(error));
// console.log(promises);

// three stages of promises: pending resolve(fulfilled) or reject
