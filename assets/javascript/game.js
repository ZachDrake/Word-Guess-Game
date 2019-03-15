//  create word bank
var wordBank = ["athlead", "sprinkles", "comstock", "belschnickel",
    "scranton", "stamford", "hank"];
// randomize wordBank
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// create empty underScores array
var underScores = [];
// empty array for correct guesses
var correctGuesses = [];
// empty array for wrong guesses
var wrongGuesses = [];
// testing
console.log(randWord);
// generate underscores based on word length
function genUnderScores(x) {
    for (var i = 0; i < randWord.length; i++) {
        underScores.push('_');
    }
    return underScores;
}
// display underScores on HTML page PROBLEM!!! keeps adding underscores to page. WHY!!!
// document.getElementById("underscores").innerHTML = genUnderScores().join(" ");
// recieve guesses from user
document.addEventListener("keypress", function (event) {
    var userGuess = event.key;
    if (randWord.indexOf(userGuess) > -1) {
        // push to correctGuesses
        correctGuesses.push(userGuess);
        // replace underScores PROBLEM!!! only replaces one.
        underScores[randWord.indexOf(userGuess)] = userGuess;

        document.getElementById("underscores").innerHTML = genUnderScores().join(" ");



        // testing
        console.log(underScores)
    }
    else {
        // push to wrongGuesses
        wrongGuesses.push(userGuess);
        // display wrong letter
        document.getElementById("wrongGuesses").textContent = wrongGuesses;



        console.log(wrongGuesses);
    }

});



//////////////NEEDS TO BE IMPLEMENTED//////////////
// display correct letter
// ensure same userChoice can not be selected twice
// display wins if user guesses word correctly
// display remaining guesses



