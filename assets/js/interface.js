document.addEventListener('DOMContentLoaded', () => {
  
    let squares = document.querySelectorAll('.square');

    squares.forEach ((square) => {
        square.addEventListener('click', handleClick);
    })

})


function handleClick (event) {

    let square = event.target;
    let postion = square.id;


    if (handleMove(postion)){

        setTimeout(() => {
            alert('O jogo acabou! -  O vencedor foi o Jogador ' + (playerTime + 1) + ' ' + icon);
        },100)

    }
    updateSquare(postion);
}


function updateSquare (postion) {

    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`;
        
}


function updateSquares () {
    let squares =  document.querySelectorAll('.square');

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol == '') {
            square.innerHTML = `<div class=''></div>`;
        }
    })
}




function restartGame () {
    board = ['', '', '', '', '', '', '', '', '']
    playerTime = 0;
    symbols = ['o', 'x'];
    gameOver = false;

    updateSquares();

}

