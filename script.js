const square = document.getElementsByClassName('square');
// Gameboard Object Module
var Gameboard = (()=> {

var gameboard = [square[0].innerHTML,square[0].innerHTML,square[0].innerHTML
                ,square[0].innerHTML,square[0].innerHTML,square[0].innerHTML
                ,square[0].innerHTML,square[0].innerHTML,square[0].innerHTML];

 const sq=(index)=> gameboard[index];
return{
    sq,
  }

})();


//Player Object
const Player= (name)=>{
    const getName =()=>  currentPlayer;
    const getScore = ()=> score;
    // let currentPlayer = name || "playerOne"
   
return {getName, getScore};
}
// let currentPlayer = Player("playerOne").getName()

let currentPlayer;
// function to reach Gameboard object

for(let i=0 ; i<9; i++){
    
    
    square[i].innerHTML = (Gameboard.sq(i))
}
  
// Event listerer for click and render "X" "O" 
  document.addEventListener("click", function(e){
   
    const target = e.target.closest(".square"); 
    if(target){
       
    
      if(currentPlayer === "playerTwo")
       {
        if(e.target.innerHTML === "")
        {
            e.target.innerHTML = "O"
            
        }
        currentPlayer="playerOne"
      }  
      else
      {
          if(e.target.innerHTML === "")
          {
              e.target.innerHTML = "X"
              currentPlayer = "playerTwo"
          };
      }

    }
  }
  
  );
