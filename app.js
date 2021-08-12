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
                Price: ${book.price}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`;
    row.appendChild(bookNode);
  });
}
