let computerNum = 0
let playButton = document.getElementById('play-button')
let resetButton = document.getElementById('reset-button')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
let chanceArea = document.getElementById('chance-area')
let gameOver = false
let chances = 5

playButton.addEventListener('click', play)
resetButton.addEventListener('click', reset)

console.log('chance area : ', chanceArea)
console.log('result area : ', resultArea)

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) +1
}

function reset(){

    console.log('RESET')
}

function play(){
    let userValue = userInput.value
    
    chances --
    chanceArea.textContent = `How many left? : ${chances}`
    console.log('chance : ', chances)
    if(userValue < computerNum){
        resultArea.textContent = 'UP'
    }else if(userValue > computerNum){
        resultArea.textContent = 'DOWN'
    }else{
        resultArea.textContent = 'GOT IT!'
    }

    if(chances == 0){
        gameOver = true
    }
    if(gameOver == true){
        playButton.disabled=true
    }

}

pickRandomNum()