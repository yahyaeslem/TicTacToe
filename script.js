const square = document.getElementsByClassName('square');
// Gameboard Object Module
var Gameboard = (()=> {

var gameboard = [square[0].innerHTML,square[0].innerHTML,square[0].innerHTML
                ,square[0].innerHTML,square[0].innerHTML,square[0].innerHTML
                ,square[0].innerHTML,square[0].innerHTML,square[0].innerHTML];

 const boardBox=(index)=> gameboard[index];
return{
    boardBox,
  }

})();

let currentPlayer;
//Player Object
const Player= ()=>{
    const getName =()=>  currentPlayer;
    const getScore = ()=> score;
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
// let currentPlayer = Player("playerOne").getName()



// function to reach Gameboard object
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
