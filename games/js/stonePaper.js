const selectionButtons = document.querySelectorAll('[data-selection]')
const lastCell = document.querySelector('[data-last-cell]')
const yourScore = document.querySelector('[data-your-score]')
const computerScore = document.querySelector('[data-computer-score]')

const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },

    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', () => {
        const selectionName = selectionButton.dataset.selection
        const yourSelection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(yourSelection)
        
    })
})

function isWinner(selection, oppSelection) {
    return selection.beats === oppSelection.name
}

function makeSelection(yourSelection) {
    const computerSelection = randomSelection()
    const youWon = isWinner(yourSelection, computerSelection)
    const computerWon = isWinner(computerSelection, yourSelection)

    addSelectionResult(computerSelection, computerWon)
    addSelectionResult(yourSelection, youWon)
    incrementScore(youWon?yourScore:computerScore)
    incrementScore(youWon?yourScore:computerScore)


}

function addSelectionResult(selection, winner) {
    console.log(selection, winner)
    const div = document.createElement('div')
    div.innerHTML = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')

    lastCell.after(div)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}


function randomSelection() {
    const index = Math.floor(Math.random() * 3)
    return SELECTIONS[index]
}