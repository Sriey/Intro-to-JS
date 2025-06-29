// Generate a random number between 1 and 100 for the guessing game
let randoomNumber = parseInt(Math.random() * 100 + 1)

// Get references to DOM elements used in the game
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.ressultParas')

// Initialize variables to track guesses and game state
let prevGuess = []
let numGuess = 1
let playGame = true

// If the game is active, set up the event listener for the submit button
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

// Validate the user's guess
function validateGuess(guess) {
    // Check if the input is a valid number
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    // Check if the guess is less than 1
    else if (guess < 1) {
        alert('please enter a valid number more than one')
    }
    // Check if the guess is greater than or equal to 100
    else if (guess >= 100) {
        alert('please enter a valid number less than 100')
    }
    else {
        // Add the guess to the previous guesses array
        prevGuess.push(guess)
        // If the user has made 11 guesses, end the game
        if (numGuess === 11) {
            dispalyGues(guess)
            displayMessage(`game over. random number was ${randoomNumber}`)
            endGame()
        }
        else {
            // Display the guess and check if it's correct
            dispalyGues(guess)
            checkGuess(guess)
        }
    }
}

// Check if the guess is correct, too low, or too high
function checkGuess(guess) {
    if (guess === randoomNumber) {
        displayMessage(`you guessed it right`)
    }
    else if (guess < randoomNumber) {
        displayMessage(`number is too low`)
    }
    else if (guess > randoomNumber) {
        displayMessage(`num is too high`)
    }
}

// Display a message to the user
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// Display the user's guess and update the number of remaining guesses
function dispalyGues(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

// Start a new game when the user clicks the new game button
function newGame() {
    const newGame = document.querySelector('newGame')
    newGame.addEventListener('click', function(e) {
        let randoomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

// End the current game and show the option to start a new game
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTM = `<h2 id="newGame"> Start Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}