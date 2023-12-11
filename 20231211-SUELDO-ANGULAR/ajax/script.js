const url = "https://api.chucknorris.io/jokes/random";
const button = document.querySelector("button");
const h2 = document.querySelector("h2");

button.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (h2.textContent = data.value));
});
