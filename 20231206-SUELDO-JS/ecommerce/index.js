const detailBtns = document.querySelectorAll(".detailBtn");
const countElement = document.querySelector(".counter");
const quantityBtns = document.getElementsByClassName("rounded");
const btnAddToCart = document.querySelector(".btnAddToCart");
const cartCount = document.querySelector(".cartCount");
const cartLink = document.querySelector(".cartLink");
const table = document.querySelector("tbody");
const deleteBtns = document.getElementsByTagName("i");
const subtotal = document.querySelector(".subtotal");
const btnBuy = document.querySelector(".btnBuy");
let itemDetail = {};
let count = 1;
let cart = [];
let total = 0;

/*Al cargar details , mostrar el item que eligio el usuario*/
window.addEventListener("load", () => {
  /* Funcionalidades Generales*/
  let storedCartItems = obtenerDatosDesdeLocalStorage();
  cartLink.hidden = true;
  if (storedCartItems != null) {
    cart = storedCartItems;
    cartCount.textContent = cart.length;
    cartLink.hidden = false;
  }
  /* Funcionalidades Index */
  /*capturar lo necesario para guardar la informacion para vista details*/
  detailBtns.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const article = event.currentTarget.closest("article");

      const item = getItemDetailsFromArticle(article);

      localStorage.setItem("itemDetail", JSON.stringify(item));
      window.location.href = "./detail.html";
    });
  });
  /* Funcionalidades DETAILS*/
  if (document.title == "MY SHOP") {
    setupItemDetail();

    Array.from(quantityBtns).forEach((button) => {
      button.addEventListener("click", setQuantity);
    });

    btnAddToCart.addEventListener("click", (e) => {
      let newItem = { ...itemDetail, quantity: count };
      let existingItemIndex = cart.findIndex(
        (item) => item.title === newItem.title
      );

      existingItemIndex !== -1
        ? (cart[existingItemIndex].quantity += newItem.quantity)
        : cart.push(newItem);
      guardarDatosEnLocalStorage(cart);
      cartLink.hidden = false;
      cartCount.textContent = cart.length;
    });
  }
  /* Funcionalidades Cart */
  if (document.title == "Cart") {
    actualizarTabla();
    cartLink.style.display = "none";
    Array.from(deleteBtns).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.indexNumber;
        eliminarElementoDeCarrito(index);
      });
    });
    btnBuy.addEventListener("click", terminarCompra);
  }
});

/* Utils */

/* Funcion para manipular la cantidad */

function getItemDetailsFromArticle(article) {
  const image = article.querySelector("img");
  const title = article.querySelector("h2");
  const price = article.querySelector("h3");
  return {
    img: image.src,
    title: title.innerText,
    price: parseFloat(price.innerText.slice(1)),
  };
}

function setupItemDetail() {
  itemDetail = JSON.parse(localStorage.getItem("itemDetail"));
  document.querySelector("img").src = itemDetail.img;
  document.querySelector("h3").textContent = itemDetail.title;
  document.querySelector(
    "h4"
  ).innerHTML = `<strong>$</strong> ${itemDetail.price.toFixed(2)}`;
}

function setQuantity(opp) {
  if (opp.target.textContent == "-" && count > 1) count--;
  if (opp.target.textContent == "+") count++;
  countElement.textContent = count;
}

function actualizarTabla() {
  table.innerHTML = "";
  total = 0;
  let template = cart
    .map((item, index) => {
      total += item.price * item.quantity;
      return `
          <tr>
            <td>${item.title}</td>
            <td>${item.quantity}</td>
            <td>$ ${item.price}</td>
            <td><i class="deleteBtn text-light fw-bolder fs-5 fa-solid fa-trash-can" data-index-number="${index}"></i>
            </td>
          </tr>
        `;
    })
    .join(" ");
  table.innerHTML += template;
  subtotal.textContent = `Subtotal $ : ${total}`;
}

function obtenerDatosDesdeLocalStorage() {
  return JSON.parse(localStorage.getItem("cartItems"));
}

function guardarDatosEnLocalStorage(cart) {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function eliminarElementoDeCarrito(index) {
  cart.splice(index, 1);
  guardarDatosEnLocalStorage(cart);
  actualizarTabla();
}

function terminarCompra() {
  table.innerHTML += `  
<tr>
  <td colspan="4">
     <p>Compra realizada con exito , el total abonado fue de $ ${total} </p>  </td>
</tr>`;
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}
