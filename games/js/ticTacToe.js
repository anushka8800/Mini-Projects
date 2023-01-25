const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


let oTurn

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')

startGame()

restartButton.addEventListener('click', startGame)

function startGame(){
    
    oTurn=false
    cellElements.forEach(ele => {
        ele.classList.remove(X_CLASS)
        ele.classList.remove(O_CLASS)
        // ele.removeEventListener('click', handleClick) ???????????????
        ele.addEventListener('click', handleClick, {once: true})
    })
    boardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e){
    const cell = e.target
    const currClass = oTurn ? O_CLASS : X_CLASS
    placeMark(cell, currClass)
    
    if(checkWin(currClass)){
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    }
    
    
    switchTurn()
    boardHoverClass()  
    
}

function checkWin(currClass) {
    return WINNING_COMBINATIONS.some(comb => {
        return comb.every(index => {
            return cellElements[index].classList.contains(currClass)
        })
    })
}

function endGame(draw) {
    if(draw) {
        winningMessageTextElement.innerText = 'Draw'
    } else {
        winningMessageTextElement.innerText = `${oTurn ? "O's Win" : "X's Win"}`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(O_CLASS) || cell.classList.contains(X_CLASS)
    })
    
}


function placeMark(cell, currClass){
    cell.classList.add(currClass)    
}

function switchTurn(){
    oTurn = !oTurn
}

function boardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    
    if (oTurn) board.classList.add(O_CLASS)
    else board.classList.add(X_CLASS)
}