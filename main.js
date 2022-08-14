let computerNum = 0
let playButton = document.getElementById('play-button')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')

playButton.addEventListener('click', play)

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) +1
}

function play(){
    let userValue = userInput.value
    
    if(userValue < computerNum){
        resultArea.textContent = 'UP'
    }else if(userValue > computerNum){
        resultArea.textContent = 'DOWN'
    }else{
        resultArea.textContent = 'GOT IT!'
    }


}

pickRandomNum()