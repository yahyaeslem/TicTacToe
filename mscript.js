

const square = document.getElementsByClassName('square');  // every square
const boardDiv= document.getElementsByClassName('gameboard') // square gameboard
let winner=""; // variable for winner to display in displayboard
const displayBoard = document.getElementById('displayBoard');   // div element for displaying the winner
const restartButton = document.getElementById("restartButton") // restart button
let currentPlayer;
let firstPlayer= "PLAYER ONE"
let secondPlayer= "PLAYER TWO"
let tie = "IT'S A TIE!!"
let player1wins =  [firstPlayer]+" "+ "WINS!!"
let player2wins = [secondPlayer] +" "+"WINS!!"


// Gameboard Object Module(array for squares, checks gameboard for win conditions)
var Gameboard = (()=> {

let gameboard = ['','','','','','','','',''];
let checkCells =()=>{ allCellsFilled = gameboard.every(cell => cell !== ""); return allCellsFilled};
 const boardBox=(index,currentSign)=> gameboard[index]= currentSign; //reach index array gameboard
 const readBoard=(index)=> gameboard[index]
 const scoreCheck=()=>{
  checkCells()
  if(allCellsFilled) {
    
    winner = tie;
    } 
    gameboardCheck(0,3,6)
    gameboardCheck(1,4,7)
    gameboardCheck(2,5,8)
    gameboardCheck(0,4,8)
    gameboardCheck(2,4,6)
    gameboardCheck(0,1,2)
    gameboardCheck(3,4,5)
    gameboardCheck(6,7,8)
  
 return winner;
 }


 // Checks Board For Win
 const gameboardCheck =(a,b,c)=>{ 
 
 if(gameboard[a] !== "" && gameboard[b] !== "" && gameboard [c] !== "")
    {
             if(gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c])
             {
             
                     if(gameboard[a] === "X" ){
                                 winner =player1wins
                                
                                     } 

                    else if (gameboard[a] === "O"){
                              winner = player2wins
                              
                                     }
             }
  }  
return winner;
} 


       



//Renders  the signs in the gameboard array
const render = ()=>{ for (let i=0; i<gameboard.length ; i++){
    square[i].innerHTML = gameboard[i]
}}
return{
    boardBox, scoreCheck,render, readBoard
  }

})();


//Player Object (Algorithm for Turns. )
const Player= ()=>{
    const getName =()=>{return currentPlayer, playerOneSign() , playerTwoSign()} ;

   //Gets The sign for whos turn and returns it
    const getSign = ()=> { 
       getName() 
    
      if(currentPlayer === playerTwo)  // checking turn
      {currentPlayer = playerOne
       
      return secondSign;
      
      }
      else       // checking turn
      {
      currentPlayer=playerTwo  
      
      return firstSign ;  
      }
  }
  
    let playerOneSign = ()=> {return firstSign = "X";}
    let playerTwoSign = ()=> {return secondSign = "O";}   
    
    let playerOne = "PlayerOne"   //This can be adjusted 
    let playerTwo = "PlayerTwo"
    const getPlayer =(player)=> {return player};
return {getName, getSign, getPlayer};
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
    preventClick()
    var squareID = parseInt((e.target).id)
    {
      
      if(e.target.innerHTML === "")
      
        {         
         let currentSign= displayController._renderDisplay();
         
         Gameboard.boardBox(squareID,currentSign)
         Gameboard.render()
     
          score(squareID)
        }
       
    }

  });


  // Check Score and display the winner --- Prevent Click if there is Result
  const score = ()=>{
    
    Gameboard.scoreCheck()
           displayBoard.innerHTML= winner
           preventClick()

  }
  //Restart
  restartButton.addEventListener('click',function(e){
    for(let i=0; i<9 ; i++){
        currentSign=""
        Gameboard.boardBox(i,currentSign);
        displayBoard.innerHTML=""
        currentPlayer=""
        winner=""

    }
    Gameboard.render()
  })

//prevent click
const preventClick = ()=>{
if(winner !== ""){
 
    e.preventDefault()
  
}
}

function display(){


  displayBoard.innerHTML= playerturn
}

