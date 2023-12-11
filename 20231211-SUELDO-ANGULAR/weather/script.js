const input = document.querySelector("input");
const btn = document.querySelector("button");
const ciudad = document.getElementById("ciudad");
const temperatura = document.getElementById("temperatura");
const grados = document.getElementById("grados");
const wicon = document.getElementById("wicon");
const descripcion = document.getElementById("descripcion");

btn.addEventListener("click", () => {
  let ciudadElegida = input.value;
  cargarCiudad(ciudadElegida);
});

function cargarCiudad(value) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=fdd533266e28101881f610f2b8f1ebe1`
  )
    .then((response) => response.json())
    .then((data) => {
      ciudad.textContent = data.name;
      let aCelsius = (data.main.temp - 273.15).toFixed(1);
      grados.textContent = `${aCelsius}°C`;
      descripcion.textContent = data.weather[0].description;
    })
    .catch((error) => alert(error));
}
