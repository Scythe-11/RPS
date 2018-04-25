//import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Board, Symbol, Row } from './entities'
/*
export const checkIfTie = (row) => {
  if (!row.includes('x')) return true
  else return false
}

export const rowWinCheck = (row) => {
const findNull = (row) => {
    return (3 - row.indexOf('x') - row.indexOf('o'))
}
let winner 
switch(findNull(row)){
  case 0: 
    winner = row[2]
    break;
  case 1: 
    winner = row[0]
    break;
  case 2: 
    winner = row[1]
    break;
}
console.log(winner)    
return winner
}

export const checkRowResult = (row) => {
let result
  if (checkIfTie(row) === true) result = 'd'
  else result = rowWinCheck(row) 
  return result
}

/*
export const row = ['o', null , null]

export const checkBoardWin = (board) => {
  if (winCount > 0) {return 'x'}
  else if (winCount < 0) {return 'o'}
}*/

/*
@ValidatorConstraint()
export class IsBoard implements ValidatorConstraintInterface {

  validate(board: Board) {
    const symbols = [ 'x', 'o', 'null' ]
    return board.length === 3 &&
      board.every(row =>
        row.length === 3 &&
      row.every(symbol => symbols.includes(symbol))
      )
  }
}
*/

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

  return changes.length === 1 
/*
    changes[0].to === playerSymbol && 
    changes[0].from === null */
}

export const calculateWinner = (board: Board): Symbol | null =>
  board
   .concat(
      // vertical winner
      [0, 1, 2].map(n => board.map(row => row[n])) as Row[]
    )
    .concat(
      [
        // diagonal winner ltr
        [0, 1, 2].map(n => board[n][n]),
        // diagonal winner rtl
        [0, 1, 2].map(n => board[2-n][n])
      ] as Row[]
    ) 
    .filter(row => row[0] && row.every(symbol => symbol === row[0]))
    .map(row => row[0])[0] || null 
    

export const finished = (board: Board): boolean =>
  board
    .reduce((a,b) => a.concat(b) as Row)
    .every(symbol => symbol !== null)

      