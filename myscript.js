let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]


let turn = "O";
function press(x, y) {

    // Do stuff
    if (turn == "O") {
        turn = "X"
    }else {turn = "O"}
    // console.log(x,y)
    board[x][y] = turn;
    let cell = document.getElementById(`${x}${y}`);
    cell.innerText = turn;

    if(board[0][0] == turn && board[0][1] == turn && board[0][2] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    } 
    if(board[1][0] == turn && board[1][1] == turn && board[1][2] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    }
    if(board[2][0] == turn && board[2][1] == turn && board[2][2] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    }
    if(board[0][0] == turn && board[1][0] == turn && board[2][0] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    }
    if(board[0][1] == turn && board[1][1] == turn && board[2][1] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    }
    if(board[0][2]== turn && board[1][2] == turn && board[2][2] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    }
    if(board[0][0] == turn && board[1][1] == turn && board[2][2] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    }
    if(board[0][2] == turn && board[1][1] == turn && board[2][0] == turn){
        document.getElementById("B").innerText = `Bravooo ${turn}`
    }


     
    
    
}

function myButton(){
    location.reload();
}