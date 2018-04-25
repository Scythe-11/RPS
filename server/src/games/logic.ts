//import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Board, Symbol } from './entities'
/*
@ValidatorConstraint()
export class IsBoard implements ValidatorConstraintInterface {

  validate(board: Board) {
    const symbols = [ 'x', 'o', null ]
    return board.length === 3 &&
      board.every(row =>
        row.length === 3 &&
        row.every(symbol => symbols.includes(symbol))
      )
  }
}

export const isValidTransition = (playerSymbol: Symbol, from: Board, to: Board) => {
  const changes = from
    .map(
      (row, rowIndex) => row.map((symbol, columnIndex) => ({
        from: symbol, 
        to: to[rowIndex][columnIndex]
      }))
    )
    .reduce((a,b) => a.concat(b))
    .filter(change => change.from !== change.to)

  return changes.length === 1 && 
    changes[0].to === playerSymbol && 
    changes[0].from === null
}
*/

export const checkIfTie = (board) => {
  if (!board.includes('x')) return true
  else return false
}

export const rowWinCheck = (board) => {
const findNull = (board) => {
    return (3 - board.indexOf('x') - board.indexOf('o'))
}
let winner
switch(findNull(board)){
  case 0:
    winner = board[2]
    break;
  case 1:
    winner = board[0]
    break;
  case 2:
    winner = board[1]
    break;
}
return winner
}

export const calculateWinner = (board: Board): Symbol | null => {
let result
  if (checkIfTie(board) === true) result = null
  else result = rowWinCheck(board)
  return result
}
