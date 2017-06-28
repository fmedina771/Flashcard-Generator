const clozeCard = require('./ClozeCard.js')
const basicCard = require('./BasicCard.js')

// ==================== Basic Card =========================

console.log("  ")
console.log("========  Basic Flashcards ==========")
console.log("  ")

const jackBauer = new basicCard("Who is the star of 24?", "Jack Bauer");

console.log("front: " + jackBauer.front)
console.log("back: " + jackBauer.back)

const presidentpalmer = new basicCard("Which president died in the begining on season 3 of 24?", "President Palmer");

console.log("==========================================")
console.log("front: " + presidentpalmer.front)
console.log("back: " + presidentpalmer.back)

const honda = new basicCard("What is the best car ever?", "Honda, Fit");

console.log("==========================================")
console.log("front: " + honda.front)
console.log("back: " + honda.back)

const longboard = new basicCard("What is better? Longboard or Skateboard?", "Longboard");

console.log("==========================================")
console.log("front: " + longboard.front)
console.log("back: " + longboard.back)



// ==================== cloze Card =========================
console.log("  ")
console.log("========  Cloze FlashCards ==========")
console.log("  ")


const fernando = new clozeCard("Fernando Medina is my full name ", "Fernando Medina");

console.log("close: " + fernando.cloze)
// console.log("==========================================")
console.log("partial: " + fernando.partial)
// console.log("==========================================")
console.log("full text: " + fernando.fullText)
console.log("==========================================")

const rutgers = new clozeCard("Rutgers is the best school Ever?", "Rutgers");

console.log("close: " + rutgers.cloze)
// console.log("==========================================")
console.log("partial: " + rutgers.partial)
// console.log("==========================================")
console.log("full text: " + rutgers.fullText)
console.log("==========================================")


const codingBootcamp = new clozeCard("Rutgers Coding Bootcamp is the best bootcamp!", "Rutgers Coding Bootcamp");


console.log("close: " + codingBootcamp.cloze)
// console.log("==========================================")
console.log("partial: " + codingBootcamp.partial)
// console.log("==========================================")
console.log("full text: " + codingBootcamp.fullText)
console.log("==========================================")
console.log("==========================================")

