import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Board, Symbol } from './entities'

@ValidatorConstraint()
export class IsBoard implements ValidatorConstraintInterface {

  validate(board: Board) {
    const symbols = [ 'x', 'o', null ]
    return board.length === 3 &&
      board.every(symbol => symbols.includes(symbol))
      
  }
}
/*
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
let winRow
switch(findNull(board)){
  case 0:
    winRow = board[2]
    break;
  case 1:
    winRow = board[0]
    break;
  case 2:
    winRow = board[1]
    break;

  default:
    winRow = null
}
return winRow
}

export const calculateWinner = (board: Board): Symbol | null => {
  debugger;
  let result
  if (checkIfTie(board) === true) result = null
  else result = rowWinCheck(board)
  if (!result && checkIfTie(board) === false) result = "ERROR"
  return result
  
}
