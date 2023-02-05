const square = document.getElementsByClassName('square');
// Gameboard Object Module
var Gameboard = (()=> {

var gameboard = [square[0].innerHTML,"O","X"
                ,"X","O","X"
                ,"X","O","X"];

 const sq=(index)=> gameboard[index];
return{
    sq,
  }

})();


//Player Object
const Player= (name)=>{
    const getName =()=>  currentPlayer;
    const getScore = ()=> score;
    let currentPlayer = name || "playerOne"
    let playerOne ="playerOne"
    let playerTwo = "playerTwo"
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
   
    const target = e.target.closest(".square"); // Or any other selector.
    if(target){
       
    
      if(currentPlayer === "playerTwo")
       {
        if(e.target.innerHTML === "")
        {
            e.target.innerHTML = "O"
            currentPlayer = Player("playerOne").getName()
        }
      }  
      elseif(currentPlayer="playerOne")
      {
          if(e.target.innerHTML === "")
          {
              e.target.innerHTML = "X"
              currentPlayer = Player("playerTwo").getName()
          };
      }

    }
  }
  
  );
