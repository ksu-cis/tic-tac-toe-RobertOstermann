// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner(winner) {
    turnElement.innerText = "Player " + winner + "'s wins";
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");
    //Check horizontal cells.
    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[i].innerText);
            return true;
        }
    }
    //Check vertical cells.
    for (var j = 0; j < 3; j ++) {
        if (cell[j].innerText && cells[0 + j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[j].innerText);
            return true;
        }
    }
    //Check for diagonal cells.
    return false;
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        else {
            turn = "x";
        }
        if (!checkForWin()) {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', onClick);
}

var form = documnet.getElementsById("board")
var serverCells = document.getElementsByClassName("cell");
for (var i = ; i < serverCells.length; i++) {
    serverCells[i].addEventListener(event => {
        form.submit();
    })
}

setTurn();

var squares = document.getElementsByClassName("squareCheckers");
for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener('drop', onDrop);
}

function onDrop(event) {
    console.log(event);
}