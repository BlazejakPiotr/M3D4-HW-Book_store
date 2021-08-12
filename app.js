let booksArr = [];
let cartArr = [];

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
    bookNode.setAttribute("id", book.asin);
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
              <a onclick="addToCart(${book.asin})" href="#" class="btn btn-success w-100">Add to cart <i class="fas fa-cart-plus"></i></a>
              <a onclick="skipBook(${book.asin})" href="#" class="btn btn-warning w-100">Skip this book <i class="fas fa-trash-alt"></i></i></a>
            </div>
          </div>`;
    row.appendChild(bookNode);
  });
}
function addToCart(id) {
  alert("SUP? " + id);
}

function skipBook(id) {
  let skipBtn = document.getElementById(id);
  console.log(skipBtn);
  skipBtn.remove();
}
