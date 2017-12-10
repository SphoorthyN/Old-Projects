var numb = prompt("How many letters do you want the word to be?");
number = Number(numb);
    if (number === 1) {
        alert("You can't have a one-letter word. Refresh the page and choose either 2, 3, 4 or 5.");
    }
    else if (number === 2){
        var word = "so";
}

    else if (number === 3){
        var word = "lie";
    }

    else if (number === 4){
        var word = "flat";
    }

    else if (number === 5){
        var word = "faust";
    }

    else if (number < 5) {
        alert("Refresh the page and choose either 2, 3, 4 or 5.");
    }
    // word = "asdad";
console.log(word);
// String(word);
do {
    var input = prompt("Enter your word");
    console.log(typeof input);
    console.log(input);
    console.log(typeof word);
    console.log(word);
    console.log(input.length);
    console.log(word.length);
    if (input === word) {
        alert("You've guessed the correct word! The word is " + input);
    }
    else {
        if (word.length !== input.length) {
            alert("Your word isn't the correct length. Enter a " + number + "-letter word.");
        }
        else {
            var bull = 0;
            var cows = 0;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === input[i]){
                    bull++;
                }
            }
            for (var i = 0; i < word.length; i++) {
                for (var j = 0; j < word.length; j++) {
                    if (j !== i){
                        if (word[j] === input[i]){
                            cows++;
                        }
                    }
                }
            }
            alert("Your word has "+bull+" bulls and " + cows + " cows.");
        }
    }
} while (word !== input);

/*
* hale ----------- word
* aleh ----------- input
*  0 bulls
*  h is compared to the rest of the letters other than it's own position.
* */
