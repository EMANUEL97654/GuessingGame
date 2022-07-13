const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
let tries = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses +=1;
    
    if(guess == answer) {
        alert(`${answer} is the number. It took you ${guesses} guesses` );
    }
    else if(guess < answer){
        alert("Too small");
        tries++;
    }else{
        alert("Too large!");
        tries++;
    }
    if(tries == 3){
        document.getElementById("guessField").disabled = true;
        alert("Has perdido :(");
    }

}