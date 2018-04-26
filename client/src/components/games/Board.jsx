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
}

export default ({board, makeMove}) => board.map((cells, cellIndex) =>
  <div key={cellIndex}>  
    {board.map((symbol, cellIndex) => renderCel(makeMove, cellIndex, symbol,false))}
  </div>
)
