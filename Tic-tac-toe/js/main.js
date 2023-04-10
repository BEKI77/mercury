
let playersymbol = "X";
let gameEnded = false;


for(let i = 1; i<=9; i++) {
    // whenever a player clicks on a cell
    document.getElementById(i.toString()).addEventListener("click", function(){
        // Display either "x" or "O" in the cell, and style it
     if (this.innerHTML === "" && !gameEnded){
        this.innerHTML = playersymbol;
        this.classList.add(playersymbol.toLowerCase());

        // check if a player has won
          checkWin();
        // swap the symbol to the other one for the next turn
        if (playersymbol === "X")
        playersymbol = "O"
        else
        playersymbol = "X"
     }
    });
}

let WinPos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

function checkWin() {
    for ( let i = 0; i < WinPos.length; i++) {
        if (
            document.getElementById(WinPos[i][0]).innerHTML === playersymbol &&
            document.getElementById(WinPos[i][1]).innerHTML === playersymbol &&
            document.getElementById(WinPos[i][2]).innerHTML === playersymbol
        ){
            document.getElementById(WinPos[i][0]).classList.add("win");
            document.getElementById(WinPos[i][1]).classList.add("win");
            document.getElementById(WinPos[i][2]).classList.add("win");
            gameEnded = true;
            setTimeout(function(){
                alert(document.getElementById(WinPos[i][0]).innerHTML + " wins!");
            }, 500);
        }
     
    }
}
 

window.onload = function () {

document.getElementById("reset").addEventListener("click", function (){
    for(let i = 0; i <= 9; i++){
    document.getElementById(i.toString()).classList.remove("win");
    }
} );
}