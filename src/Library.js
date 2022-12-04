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
function checkoutBook(library, book, genre) { 
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i] === book) {
    library.shelves[genre].splice(library.shelves[book][i], 1)
}
}
 return `You have now checked out ${book} from the ${library}`
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};