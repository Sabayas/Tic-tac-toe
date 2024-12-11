import React, { useState } from "react";
import useTictacToe from '../Components/hooks/use-tic-tac-toe.jsx'
import '../App.css';



function Tictactoe(){

 const {board,handleClick, calculateWinner, resetGame, getStatusMessage} = useTictacToe();
 

 return (
 <div className="game">
  <div className="status">
   {getStatusMessage()}
    <button className="reset-button" onClick={resetGame}>Reset Game</button>
  </div>
  
  <div className="board">
    {board.map((b, index)=>{
      return <button className="cell" 
      key= {index} 
      onClick={() => handleClick(index)} 
      disabled={b !==null}>
       {b}
        </button>
    })}
  </div>
 </div>
 );
}

export default Tictactoe;