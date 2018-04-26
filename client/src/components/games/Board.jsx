import React from 'react'
import './Board.css'

const renderCel = (makeMove, cellIndex, symbol, hasTurn) => {
  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => makeMove(cellIndex)}
      key={`${cellIndex}`}
    >{symbol || '-'}</button>
  ) 
  debugger;
}


export default ({board, makeMove}) => board.map((symbol, cellIndex) =>
  <span key={cellIndex}> 
    {renderCel(makeMove, cellIndex, symbol,false)}
  </span>
)
