window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => bookData(books))
    .catch((err) => console.log(err));
};

function bookData(books) {
  console.log(books[0]);
}
