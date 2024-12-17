let board = [
    ['X','O','O'],
    ['O','O','X'],
    ['X','X','0'],
];

let players = ['X', 'O'];

function setup(){
    createCanvas(1000, 1000);
}

function draw() {
    background(220);
    let w = width / 3;
    let h = height / 3;
    
    for (let i = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++){
            let x = w * i + w/2;
            let y = h * j + h/2;
            let spot = board[i][j];
            textSize(32);
            strokeMeight(4);
            if (spot == player[1]){
                noFill();
                ellipse(x,y,w/2);
            } else if (spot == player[0]) {
                let xr = w/4;
                line(x-xr, y-xr, x + xr, y + xr);
                line(x+xr, y-xr, x-xr, y + xr );
            }
            text(spot, x, y);
        }
    }
}