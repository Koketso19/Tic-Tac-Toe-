let board = [
    ['X','O','O'],
    ['O','O','X'],
    ['X','X','0'],
];

let playerq1 = 'X';
let player2 = 'O';


function setup(){
    createCanvas(400, 400);
}

function draw() {
    background(220);
    let w = width / 3;
    let h = height / 3;
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <3; j++){
            let x = w * i;
            let y = h * j;
            let spot = board[i][j];
            textSize(32);
            Text(spot, x, y);
        }
    }
}