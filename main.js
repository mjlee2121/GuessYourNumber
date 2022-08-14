let computerNum = 0

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) +1
    console.log(`mj- ${computerNum}`)
}

pickRandomNum()