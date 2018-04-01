const wordToGuess = ['bananas','tractor','alpaca']
let random = wordToGuess[Math.floor(Math.random()*wordToGuess.length)]
const wordState = [];
let guessesLeft = 10;
const prevGuesses = [];

function displayWordState(state){
	let output = '';

	for(i = 0; i < state.length; i++){
		const char = state[i];
		if(char != undefined){
			output = output + char;
		} else {
			output = output + '_';
		}
		output = output + ' ';
	}

	const wordStateContainer = document.getElementById('word');
	wordStateContainer.innerHTML = output;

}

function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}

function displayPreviousGuesses(guessesArray){
	const list = document.getElementById('past-guesses');
	//to clear list before adding gueses
	list.innerHTML = '';
	//for each guess append li child
	for(let i = 0; i < guessesArray.length; i++){
		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess)
	}
}

//takes in word to guess
function guess(random, wordState, currGuess){
	for(let i = 0; i < random.length; i++){
		if(random[i] == currGuess){
			wordState[i] = currGuess;
		}
	}
	displayWordState(wordState);

	
}

function checkWon(wordState){
	let hasBlanks = false;
	for(let i = 0; i < wordState.length; i++){
		if(wordState[i] == '_'){
			hasBlanks = true;
		}
	}
	return !hasBlanks;
}
function setup(){
	for(let i =0; i < random.length; i++){
		wordState.push('_')
	}
	displayGuessesLeft(guessesLeft);
	displayWordState(wordState);
	displayPreviousGuesses(prevGuesses);
}


function setupForm(){
	const form = document.getElementById('player-input')
	const input = document.getElementById('player-guess')

	form.onsubmit = function(event){
		event.preventDefault();
		const currentInput = input.value.toLowerCase();
		if(!validateInput(currentInput, prevGuesses)){
			window.alert('Please enter a single character from a-z')
			return;
		}
		input.value = '';
		prevGuesses.push(currentInput);
				guessesLeft = guessesLeft -1
		displayGuessesLeft(guessesLeft)

		guess(random, wordState, currentInput);

		const won = checkWon(wordState);
		if(won){
			window.alert('You won!')
		} else if(guessesLeft == 0){
			window.alert('You lost!')
		}	
		displayPreviousGuesses(prevGuesses);
	}	
}

function validateInput(guess, prevGuesses){
	if(guess.length == 1 && prevGuesses.indexOf(guess) ==-1){
		return true;
	}
	return false
}



setup();
setupForm();