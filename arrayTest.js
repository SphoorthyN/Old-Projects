/*
check what the user wants
compare the answer to the option you have
after each input, ask for an input again
make functions for each action. best
*/
//set the array up


//
function reverse(x) {
    var input = prompt("Do you want to reverse? Yes or no");
    if (input === "yes") {
        for (var count = x.length; count >= 0; count--) {
            console.log(x[count]);
        }
    }
}

function isUniform(x) {
    var input = prompt("Do you want to check if all the elements are the same? Yes or no");
    if (input === "yes") {
        for (var count = 0; count < x.length - 1;) {
            if (x[count] === x[count + 1]) {
                count++;
            }
            else {
                return false;
                break;
            }
        }
        if (count === (x.length - 1)) {
            return true;
        }
    }
}

function arraySum(x) {
    var sum = 0;
    x.forEach(function (t) {
        sum += t;
    });
    console.log(sum);
}

function maxArray(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > x [i + 1]) {
            x[i + 1] = x[i];
        }
    }
    console.log(x[x.length - 1]);
}

var object = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

var movies = [
    {
        name: "Unstoppable",
        rating: 5,
        haveWatched: "not watched"
    },
    {
        name: "Edge of Tomorrow",
        rating: 5,
        haveWatched: "watched"
    },
    {
        name: "The Room",
        rating: 4,
        haveWatched: "watched"
    }
];



function print() {
    for(var i = 0; i<movies.length; i++){
        console.log("You have " + movies[i].haveWatched + " "+ "\""+movies[i].name+"\"" + " - rating: "+movies[i].rating)
    }
}
