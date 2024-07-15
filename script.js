let boxes = document.querySelectorAll(".box");
let turnO = true; //to determine the turn of player O or player X
let msgBox = document.querySelector(".msg_box");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new_btn");
let resetBtn = document.querySelector(".reset_btn");
let fullBox = document.querySelector(".full_box");
let count = 0;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

resetBtn.classList.remove("hide");

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        if(turnO) {
            box.style.color="#AD8350";
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.style.color="#397F7F";
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        if(count === 9) {
            showDraw();
        }
        checkWinner();
    })
})

const checkWinner = () => {
    for(pattern of winPatterns) {
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBoxes();
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgBox.classList.remove("hide");
    resetBtn.classList.add("hide");
}

const showDraw = () => {
    msg.innerText = "Game was a DRAW!";
    msgBox.classList.remove("hide");
    resetBtn.classList.add("hide");
}

const resetGame = () => {
    for(box of boxes) {
        box.innerHTML = "";
    }
    turnO = true;
    count = 0;
    enableBoxes();
    msgBox.classList.add("hide");
    resetBtn.classList.remove("hide");
}

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
    }
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);