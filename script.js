console.log("Welcome to Tic Tac Toe")
let turn = "X";
let gameover = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X"? "0" : "X"
}

// function for check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector(".debu").innerText = boxtext[e[0]].innerText + " " + "won";
            gameover = true;
            document.querySelector(".image").getElementsByTagName("img")[0].style.width = "250px";
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("debu")[0].innerText = "Turn for" + " " + turn;
            }
        }
    })
})

// reset
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach((element) => {
        element.innerText = ""
    })
    turn = "X";
    gameover = false;
    document.getElementsByClassName("debu")[0].innerText = "Turn for" + " " + turn;
    document.querySelector(".image").getElementsByTagName("img")[0].style.width = "0px";
})