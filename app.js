let booksArr = [];

const row = document.querySelector(".row");

window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => {
      booksArr = books;
      displayBooks();
    })
    .catch((err) => console.log(err));
};

function displayBooks() {
  booksArr.forEach((book) => {
    const bookNode = document.createElement("div");
    bookNode.setAttribute("id", parseInt(book.asin));
    bookNode.classList.add(
      "col-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-3",
      "mb-4"
    );
    bookNode.innerHTML = `<div class="card h-100">
            <img src="${book.img}" class="card-img-top" alt="${book.title}" />
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
                Category: ${book.category}<br />
                Price: ${book.price}$
              </p>
              <a onclick="addToCart(${parseInt(
                book.asin
              )})" href="#" class="btn btn-success w-100">Add to cart <i class="fas fa-cart-plus"></i></a>
              <a onclick="skipBook(${parseInt(
                book.asin
              )})" href="#" class="btn btn-warning w-100">Skip this book <i class="fas fa-trash-alt"></i></i></a>
            </div>
          </div>`;
    row.appendChild(bookNode);
  });
}
function addToCart(id) {
  let bookNode = document.getElementById(id);
  bookNode.childNodes[0].childNodes[3].childNodes[5].classList.remove(
    "btn-success"
  );
  bookNode.childNodes[0].childNodes[3].childNodes[5].innerText =
    "Book added to cart";
  bookNode.childNodes[0].childNodes[3].childNodes[5].classList.add("btn-info");
  let bookNode_clone = bookNode.cloneNode(true);
  bookNode_clone.setAttribute("id", id + "cart");
  bookNode_clone.classList.remove("col-sm-6", "col-md-4", "col-lg-3", "mb-4");
  bookNode_clone.childNodes;
  let cartBody = document.querySelector(".modal-body-row");
  cartBody.appendChild(bookNode_clone);
}

function skipBook(id) {
  let skipBtn = document.getElementById(id);
  skipBtn.remove();
}

function clearCart() {
  let modal = document.querySelector(".modal-body-row");
  modal.innerText = "Your cart is empty ;(";
  let addedToCart = document.querySelectorAll(".btn-info");
  addedToCart.forEach((element) => element.classList.remove("btn-info"));
  addedToCart.forEach((element) => element.classList.add("btn-success"));
}

function searchBooks(query) {
  if (query.length > 2) {
    console.log(query);
  } else {
    console.log(query + " is too short :(");
  }
}
