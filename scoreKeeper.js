var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");

var input = document.querySelector("#input");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScore = document.querySelector("#maxScore");


var p1Score = 0;
var p2Score = 0;
var limit = 0;
var gameOver = false;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === limit) {
            gameOver = true;
            p1Display.classList.add("winner");
            p1Button.classList.add("winner-button");
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if(p2Score === limit){
            gameOver = true;
            p2Display.classList.add("winner");
            p2Button.classList.add("winner-button");
        }
        p2Display.textContent = p2Score;
    }

});
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Button.classList.remove("winner-button");
    p2Button.classList.remove("winner-button");
    gameOver = false;
}
resetButton.addEventListener("click", function () {
   reset();
});

input.addEventListener("change", function () {
    limit = Number(input.value);
    maxScore.textContent = input.value;
    reset();
});

p1Button.addEventListener("mouseenter", function () {
    this.style.textDecoration = "underline";
});
