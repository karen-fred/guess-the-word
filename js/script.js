const guessedLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessALetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const playAgainButton = document.querySelector("play-again");

const word = "magnolia";

//write placedholder function//
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }   
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);