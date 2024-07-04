let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)

let currentPlayer = "X"
let messageElement = document.getElementById("message")
messageElement.innerText = currentPlayer + "'s turn"
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkForWinner(){
    let winnerFound = false
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if(check){
            highlightCells(combination)
            messageElement.innerText = currentPlayer + " wins!"
            winnerFound = true
        }
    })
    return winnerFound
}

function highlightCells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add("highlight")
    })
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != "" || messageElement.innerText.includes("wins")) return
        cell.innerText = currentPlayer
        if(!checkForWinner()){
            currentPlayer = currentPlayer == "X" ? "O" : "X"
            messageElement.innerText = currentPlayer + "'s turn"
          
        }
      
    })
})