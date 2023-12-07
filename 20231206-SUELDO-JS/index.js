const input = document.getElementById("input");
const text = document.getElementById("text");
const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const regex = /^[a-zA-Z]+$/;

input.addEventListener("keyup", (e) => {
  const char = e.key;
  if (e.key.length == 1) {
    text.textContent += vocales.includes(char || char.toUpperCase())
      ? "_"
      : char;
  }
  if (e.key == "Backspace") text.textContent = text.textContent.slice(0, -1);
});
