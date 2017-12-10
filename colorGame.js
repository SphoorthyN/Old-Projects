var colors = generateRandomColors(6); //the list of colors we want to choose from, which are randomized

var squares = document.querySelectorAll(".square"); //selecting the class "square"
var random = getRandomInt(1, 6); //generating a random number from the function getRandomInt between 1 and 6
var pickedColor = String(colors[random]); //assigning a random color from the colors string

var goal = document.getElementById("goal"); //selecting the "goal" tag, which displays the "color goal"
var heading = document.querySelector("h1"); //selecting the heading area of the game
var resetButton = document.querySelector("#reset"); //selecting the 'reset' button which allows us to change colors.
// var tryAgain = document.querySelector("#try"); //selecting the "try again" text

goal.textContent = pickedColor.slice(3, 18); /*slices the rgb string to return the text excluding the 'rgb', to separate
                                              out the 'rgb' to style it.
                                              */


resetButton.addEventListener("click", function () {
    //basically, need to do the whole randomize, assign random colors again.
    colors = generateRandomColors(6); //the list of colors we want to choose from, which are randomized
    pickedColor = String(colors[random]); //assigning a random color from the colors string
    goal.textContent = pickedColor.slice(3, 18); /*slices the rgb string to return the text excluding the 'rgb', to separate
                                              out the 'rgb' to style it.
                                              */
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        opaque(); /* makes the transparent boxes opaque again. This caused a problem as the class stayed on after being
                     reset. Thus, I had to make another function to remove all the 'opaque' classes in the for loop
                     below called 'removeOpaque'. Messy, I know.
                    */
        squares[i].classList.remove("backGround");
        squares[i].style.transition = "ease 0.5s"; //makes the transition smooth
        removeBackgroundTransparency();
        resetButton.textContent = "New Colors?";//changes the button to "new color's if the button was "play again
                                                // before
    }
});

//the part where the colors of the "squares" change
for (var i = 0; i < squares.length; i++) {
    //adding initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //adding clickListeners to the "squares"
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        removeOpaque(); //problem occurred after the opaque class stayed on after clicking reset. This removes the opaque class.
        if (clickedColor === pickedColor) {
            changeColors(clickedColor); //changes the colors of all the "squares" AND the "heading" to the correct color once the correct color is clicked
            opaque(); //brings back the wrong colored "squares" back to 100% opacity as I made them transparent if they're wrong
            removeBackgroundTransparency(); //makes the squares opaque again
            removeOpaque();
            resetButton.textContent = "Play again?";
            resetButton.style.transition = "ease 0.5s";
            // tryAgain.textContent = "Correct!";
            // tryAgain.style.transition = "ease 0.5s"
        }
        else {
            this.classList.add("backGround"); //if the clicked "square" is wrong, this makes them transparent
        }

    });
}



//changes the colors of all the "squares" AND the "heading" to the parameter "color" once the correct color is clicked
function changeColors(color) {
    //loop through all the squares in the game, 4 or 3 or 6 or...
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color; //changes the color of the ith "square" to "color"
        squares[i].style.transition = "ease 0.5s"; //makes the transition smooth
        heading.style.backgroundColor = color; //changes the color of the 'header' to 'color'
        heading.style.textShadow = "0 0 10px black"; //maybe I should add a shadow to the text in the header
        heading.style.transition = "ease 0.5s"; //makes the transition smooth
    }
}

//This makes the transparent squares opaque
function opaque() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add("opaque");
    }
}
function removeOpaque() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.remove("opaque");
    }
}

function removeBackgroundTransparency() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.remove("backGround");
    }
}

//copied it from MDN. This gives a random integer between min and max, max exclusive.
function getRandomInt(min, max) {
    min = Math.ceil(min); //returns the smallest number greater than or equal to the number
    max = Math.floor(max); //returns the greatest number lesser than or equal to the number
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//returns an array with values equal to the output of the 'randomColor' function, which are random rgb color strings
function generateRandomColors(num) {
    //make an array
    // add 'num' random numbers
    var arr = [];
    for (var i = 0; i < num; i++) {
        //get random color
        arr[i] = [randomColor()]
    }
    return arr;
}

//generates an rgb string of the correct format, spaces and all, which are random r,g and b values.
function randomColor() {
    //generate red, blue and green random between 0 and 255
    var red = getRandomInt(0, 256); //uses the 'getRandomInt function to get a random 'integer' between 0 and 266 inclusive
    var green = getRandomInt(0, 256);
    var blue = getRandomInt(0, 256);

     //convoluted way to get a string of the form "rgb(xxx, xxx, xxx). The spaces are important)
    return "rgb(" + red + ", " + green + ", " + blue + ")"; //returns this string, which is added as a value to the array.
}





