var button = document.querySelector("button");
var is = false;
button.addEventListener("click", function () {

    if (is === false){
        document.body.classList.add("purple");
    }
    else {
        document.body.classList.remove("purple");
    }
    is = !is;
});
