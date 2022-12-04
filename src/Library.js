function createLibrary(library) {
 return library = {
  name: library,
  shelves: { 
    fantasy: [], fiction: [], nonFiction: []
 }
}
}
function addBook(library, book) {
  library.shelves[book.genre].push(book)
}
function checkoutBook(library, book, shelves) { 
  for (var i = 0; i < shelves.length; i++) {
    if (shelves[i] === book) {
    library.shelves[i].splice(i, 1)
}
}
 return `You have now checked out ${book} from the ${library}`
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};