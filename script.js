// Gameboard Object Module
const moduleGameboard = (() => {

var Gameboard = function (){
  boardRow1=  ["X","O","X"] 
  boardRow2=   ["X","O","X"]
  boardRow3=   ["X","O","X"]
return {
    boardRow1,
    boardRow2,
    boardRow3,
}
};
function _displayBoard(){
    console.log(Gameboard());
}
return{
publicBoard: function(){
    _displayBoard()
}
}

})();


//Player Object
var Players= (playerName,level)=>{
    const getSign =() => sign
    const evaulate=() => evaluate
    const getScore = () => score
return {playerName,sign,evaluate,score};
}
    

const square = document.getElementsByClassName('square');
// function to reach Gameboard object
const moduleGame =  moduleGameboard.publicBoard();

for(let i=0 ; i<9; i++){
    square[i].innerHTML= 
}
  
// Event listerer for click and render "X" "O" 
  document.addEventListener("click", function(e){
    const target = e.target.closest(".square"); // Or any other selector.
  
    if(target){
        if(e.target.innerHTML === ""){
            e.target.innerHTML = "b"
             }
        
    }
  });
// function to reach Gameboard object
 const module=  moduleGameboard.publicBoard();