function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function factorial(num) {
    var x = Number(num);
    if(x === 0) {
        return 1;
    }
    var y = x;
    while (x > 2){
        y = y*(x-1);
        x--;
    }
    return y;
}

function kebabToSnake(str) {
    for (var count = 0; count < str.length; count++){
        var hyphen = str.indexOf("-");
        str[hyphen] = "_";
    }
    return str;
}
