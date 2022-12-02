function createTitle(title) {
  return `The ${title}`
  }
function buildMainCharacter(name, age, pronouns){
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
}
function saveReview(addReviews, array) {
 if (array.includes(addReviews) === false) {
    return array.push(addReviews)
  // } else {
    // return array
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}