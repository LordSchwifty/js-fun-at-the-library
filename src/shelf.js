function shelfBook(books, sciFiShelf) {
  if (books.genre === books.genre.sciFi) {
    books.push(sciFiShelf)
  }
  return sciFiShelf
}
module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};