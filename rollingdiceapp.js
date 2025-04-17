var dice, dices, stopped, t;

function f2() {
    dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
    stopped = true;
    dice = document.getElementById("dice");
    f1();
}

function f1() {
    if (stopped) {
        stopped = false;
        t = setInterval(change, 100);
    } else {
        clearInterval(t);
        stopped = true;
    }
}

function change() {
    var x = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[x];
}