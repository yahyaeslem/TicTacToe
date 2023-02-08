const square = document.getElementsByClassName('square');
// Gameboard Object Module
var Gameboard = (()=> {

var gameboard = [square[0].innerHTML,square[1].innerHTML,square[2].innerHTML
                ,square[3].innerHTML,square[4].innerHTML,square[5].innerHTML
                ,square[6].innerHTML,square[7].innerHTML,square[8].innerHTML];

 const boardBox=(index)=> gameboard[index]; //reach index array gameboard
return{
    boardBox,
  }

})();

let currentPlayer;
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

  
// Event listerer for click and render "X" "O" 
  // document.addEventListener("click", function(e){
   
  //   const target = e.target.closest(".square"); 
  //   if(target){
       
    
  //     if(currentPlayer === "playerTwo")
  //      {
  //       if(e.target.innerHTML === "")
  //       {
  //           e.target.innerHTML = "O"
            
  //       }
  //       currentPlayer="playerOne"
  //     }  
  //     else
  //     {
  //         if(e.target.innerHTML === "")
  //         {
  //             e.target.innerHTML = "X"
  //             currentPlayer = "playerTwo"
  //         };
  //     }

  //   }
  // }
  
  // );

  document.addEventListener("click", function(e){
    const target = e.target.closest(".square"); 
    if(target)
    var squareID = parseInt((e.target).id)
    {
      if(e.target.innerHTML === "")
      
        {
          
          square[squareID].innerHTML = displayController._renderDisplay();
        }
  
    }
  });


  // Game Logic & Score
  const getScore = ()=> 
  var score= ()=>{
    if(
(square[0].innerHTML ===square[3].innerHTML&&square[0].innerHTML === square[6].innerHTML) || 
(square[1].innerHTML ===square[4].innerHTML&&square[4].innerHTML === square[7].innerHTML) || 
(square[2].innerHTML ===square[5].innerHTML&&square[5].innerHTML === square[8].innerHTML) ||
(square[0].innerHTML ===square[4].innerHTML&&square[4].innerHTML === square[8].innerHTML) ||
(square[2].innerHTML ===square[4].innerHTML&&square[4].innerHTML === square[6].innerHTML) ||
(square[0].innerHTML ===square[1].innerHTML&&square[1].innerHTML === square[2].innerHTML) ||
(square[3].innerHTML ===square[4].innerHTML&&square[4].innerHTML === square[5].innerHTML) ||
(square[6].innerHTML ===square[7].innerHTML&&square[7].innerHTML === square[8].innerHTML)){
    if(square.innerHTML === "X"){
        player1wins ++
    }
    elseif(square.innerHTML === "O"){
        player2wins ++
    }
}
return score
  }