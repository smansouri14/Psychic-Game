var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userChoice = [];



//letter computer can pick
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(letters);


//computer picking random letter
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log("computer choice" , computerChoice);


// takes in users choice and keeps a log 
document.addEventListener('keypress', (event) => {
    var userChoice = event.key;
    console.log(userChoice);
    lettersGuessed.push(userChoice);
    compare(userChoice , computerChoice);
    var userChoice = lettersGuessed;

})

//changes wins and losses 
function compare(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        console.log("You won");
        wins++;
        document.getElementById('wins').innerHTML = 'Wins: ' + wins;
        guessesLeft = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9","10");
        lettersGuessed = [];
        guessesLeft = 10;
       

    }else if ((guessesLeft === 0) || (lettersGuessed.lenngth === 10)){
        losses++;
        console.log("You lost")
        document.getElementById('losses').innerHTML = 'losses: ' + losses;
        guessesLeft = 10;
        lettersGuessed = [];
       
        
    }else if (userChoice !== computerChoice) {
        console.log("lost a letter");
        guessesLeft--;
            if (guessesLeft === 0){
                guessesLeft = 10;
                lettersGuessed = [];
            }
        document.getElementById('guessesLeft').innerHTML = 'Guesses Left: ' + guessesLeft;   
        document.getElementById('lettersGuessed').innerHTML = 'Letters Guessed: ' + lettersGuessed;
        
    }
}
