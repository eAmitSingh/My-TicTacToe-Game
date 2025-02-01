// console.log("Welcome to Tic Tac Toe")
// let music = new Audio("music.mp3")
// let audioTurn = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")
// let turn = "X"
// let isgameover = false;

// // Function to change the turn
// const changeTurn = ()=>{
//     return turn === "X"? "0": "X"
// }

// // Function to check for a win
// const checkWin = ()=>{
//     let boxtext = document.getElementsByClassName('boxtext');
//     let wins = [
//         [0, 1, 2, 5, 5, 0],
//         [3, 4, 5, 5, 15, 0],
//         [6, 7, 8, 5, 25, 0],
//         [0, 3, 6, -5, 15, 90],
//         [1, 4, 7, 5, 15, 90],
//         [2, 5, 8, 15, 15, 90],
//         [0, 4, 8, 5, 15, 45],
//         [2, 4, 6, 5, 15, 135],
//     ]
//     wins.forEach(e =>{
//         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
//             document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
//             isgameover = true
//             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
//             document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
//             document.querySelector(".line").style.width = "20vw";
//         }
//     })
// }

// // Game Logic
// // music.play()
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>{
//         if(boxtext.innerText === ''){
//             boxtext.innerText = turn;
//             turn = changeTurn();
//             audioTurn.play();
//             checkWin();
//             if (!isgameover){
//                 document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
//             } 
//         }
//     })
// })

// // Add onclick listener to reset button
// reset.addEventListener('click', ()=>{
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = ""
//     });
//     turn = "X"; 
//     isgameover = false
//     document.querySelector(".line").style.width = "0vw";
//     document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
// })







console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
let themeToggleBtn = document.getElementById('themeToggle');
let themeText = document.getElementById('themeText');
let winPopup = document.getElementById('winPopup');
let winnerMessage = document.getElementById('winnerMessage');
let newGameButton = document.getElementById('newGameButton');

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";

            // Show win popup
            winnerMessage.innerText = "Congratualions " + boxtext[e[0]].innerText + " Won!"
            winPopup.style.display = "flex";
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    winPopup.style.display = "none";  // Hide popup when reset
})

// Dark Mode Toggle
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update the text of the theme toggle
    if (document.body.classList.contains('dark-mode')) {
        themeText.innerText = "Light Mode";
    } else {
        themeText.innerText = "Dark Mode";
    }
})

// New Game button inside the popup
newGameButton.addEventListener('click', () => {
    // Reset game state when new game is clicked
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    winPopup.style.display = "none";  // Close popup
})
