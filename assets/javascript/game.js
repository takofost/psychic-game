
var words = ["ODYSSEUS", "CIRCE", "PENELOPE", "TELEMACHUS", "POLYPHEMEUS", "SCYLLA", "CHARYBDIS", "TIERESIAS", "NAUSICAA", "MENELAUS", "LAERTES", "AEGISTHUS", "ARETE", "NESTOR", "ATHENA", "ZEUS", "CALYPSO", "CLYMNESTRA"];
var word;
var lives;
var correctGuesses = document.getElementById('correct');
var wrongGuesses = document.getElementById('incorrect');;
var wins = 0;
var losses = 0;
var wordElement = document.getElementById('word');
var count = document.getElementById('count');
var letters = document.getElementById('letters');
var wins = document.getElementById("win");
var losses = document.getElementById("lose");

function initializeGame() {
    word = words[Math.floor(Math.random() * words.length)];
    lives = 7;
    wrongGuesses = [];
    correctGuesses = [];


    for (var i = 0; i < word.length; i++) {
        correctGuesses.push('_');
    }

    wordElement.innerHTML = correctGuesses.join(' ');
    letterCountElement.innerHTML = allowedGuesses;
}

function updateGuesses(letter) {
    lives--;
    letterCountElement.innerHTML = allowedGuesses;

    if (word.indexOf(letter) === -1) {
        wrongGuesses.push(letter);
        letters.innerHTML = wrongGuesses.join(', ');
    } else {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                correctGuesses[i] = letter;
            }
        }

        wordElement.innerHTML = correctGuesses.join(' ');
    }
}

function checkWin() {
    if (correctGuesses.indexOf('_') === -1) {
        wins++;
    } else if (allowedGuesses === 0) {
        losses++;
    }
}

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toUppercaseCase();
    updateGuesses(letterGuessed);
    checkWin();
    win.textContent = "wins: " + wins;
    losses.textContent = "losses: " + losses;
    correctGuesses.textContent = correctGuesses;
    
};
