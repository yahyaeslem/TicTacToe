const square = document.getElementsByClassName('square');
let player1wins;
let player2wins;
let winner;
const displayBoard = document.getElementById('displayBoard');
const restartButton = document.getElementById("restartButton") 
let currentPlayer;

// Gameboard Object Module
var Gameboard = (()=> {

var gameboard = [square[0].innerHTML,square[1].innerHTML,square[2].innerHTML
                ,square[3].innerHTML,square[4].innerHTML,square[5].innerHTML
                ,square[6].innerHTML,square[7].innerHTML,square[8].innerHTML];

 const boardBox=(index)=> gameboard[index]; //reach index array gameboard
 const gameboardCheck =()=>{  if (
      (square[0].innerHTML === "X"  && square[3].innerHTML === "X" && square[6].innerHTML === "X")|| 
      (square[1].innerHTML === "X"  && square[4].innerHTML === "X" && square[7].innerHTML === "X") || 
      (square[2].innerHTML === "X"  && square[5].innerHTML === "X" && square[8].innerHTML === "X") ||
      (square[0].innerHTML === "X"  && square[4].innerHTML === "X" && square[8].innerHTML === "X") ||
      (square[2].innerHTML === "X"  && square[4].innerHTML === "X" && square[6].innerHTML === "X") ||
      (square[0].innerHTML === "X"  && square[1].innerHTML === "X" && square[2].innerHTML === "X") ||
      (square[3].innerHTML === "X"  && square[4].innerHTML === "X" && square[5].innerHTML === "X") ||
      (square[6].innerHTML === "X"  && square[7].innerHTML === "X" && square[9].innerHTML === "X"))
      {
        return player1wins = true
      }
     else if (
      (square[0].innerHTML === "O"  && square[3].innerHTML === "O" && square[6].innerHTML === "O")|| 
      (square[1].innerHTML === "O"  && square[4].innerHTML === "O" && square[7].innerHTML === "O") || 
      (square[2].innerHTML === "O"  && square[5].innerHTML === "O" && square[8].innerHTML === "O") ||
      (square[0].innerHTML === "O"  && square[4].innerHTML === "O" && square[8].innerHTML === "O") ||
      (square[2].innerHTML === "O"  && square[4].innerHTML === "O" && square[6].innerHTML === "O") ||
      (square[0].innerHTML === "O"  && square[1].innerHTML === "O" && square[2].innerHTML === "O") ||
      (square[3].innerHTML === "O"  && square[4].innerHTML === "O" && square[5].innerHTML === "O") ||
      (square[6].innerHTML === "O"  && square[7].innerHTML === "O" && square[9].innerHTML === "O")){
        return player2wins =true;
      }}
return{
    boardBox, gameboardCheck,
  }

})();


//Player Object ( returns "X" and "O")
const Player= ()=>{
    const getName =()=>  currentPlayer;
   
    const getSign = ()=> { 
       getName() 
      if(currentPlayer === "playerTwo")
      {currentPlayer ="playerOne"
      return playerTwoSign;
      
      }
      else
      {
      currentPlayer="playerTwo"
      return playerOneSign ;
      }
  }
  
    let playerOneSign = "X";
    let playerTwoSign = "O";   
    
    let playerOne = "playerOne"
    let playerTwo = "playerTwo"
return {getName, getSign};
}


//  returns string for render display
var displayController = (()=>{
const _renderDisplay= () => Player().getSign();

return{ _renderDisplay
}
})();


//Click event listener for squares 
document.addEventListener("click", function(e){
    
    const target = e.target.closest(".square"); 
    if(target)
    
    var squareID = parseInt((e.target).id)
    {
      
      if(e.target.innerHTML === "")
      
        {
          
          square[squareID].innerHTML = displayController._renderDisplay();
          score(squareID)
        }
       
    }

  });


  // Check Score
  const score = ()=>{
    Gameboard.gameboardCheck()

          if(player1wins){
           displayBoard.innerHTML= "player 1 wins" ;

                    }
          else if(player2wins){
            displayBoard.innerHTML= "player 2 wins" ;
                    }
     
                  }
    
  //Restart
  restartButton.addEventListener('click',function(e){
    for(let i=0; i<)
  })

