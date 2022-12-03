function createTitle(title) {
  return `The ${title}`
  }
function buildMainCharacter(name, age, pronouns){
  var bookCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return bookCharacter
}
function saveReview(reviews, array) {
 if (array.includes(reviews) === false) {
    return array.push(reviews)
  // } else {
    // return array
  }
}
function calculatePageCount(title) {
  var bookPageCount = title.length * 20
  return bookPageCount
}
function writeBook(createTitle, bookCharacter, genre) {
  var book = {
    title: createTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(createTitle),
    genre: genre
  }
  
 return book
}
function editBook(writeBook) {
  return writeBook.pageCount = writeBook.pageCount * 0.75

}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}