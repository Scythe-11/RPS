import 'mocha'
import { equal } from 'assert'
//import { rowWinCheck, checkIfTie, checkRowResult} from './logic'
import { calculateWinner, isValidTransition, finished,  } from './logic'
import { Board} from './entities'

/*describe('checkIfTie()', () => {
  it('testing that it returns true', () => {
    const row = ['o', null, null]
    equal(checkIfTie(row), true)
  })
})

describe('rowWinCheck()', () => {

  it('testing that it returns x', () => {
    const row = [null , 'o', 'x']
  
    equal(rowWinCheck(row), 'x')
  })
})

describe('checkRowResult()', () => {
  it('testing that it returns draw "d" ', () => {
    const row = [null, 'o', null]
    equal(checkRowResult(row), 'd')
  })
})



describe('checkRowResult()', () => {
  it('testing that it returns "o" ', () => {
    const row = [null, 'x', 'o']
    equal(checkRowResult(row), 'o') // returns o
  })
})

describe('checkRowResult()', () => {
  it('testing that it returns "x" ', () => {
    const row = ['x', null, 'o']
    equal(checkRowResult(row), 'x') // returns o
  })
})

describe('checkRowResult()', () => {
  it('testing that it returns "x" ', () => {
    const row = ['x', 'o', null]
    equal(checkRowResult(row), 'o') // returns o
  })
})
*/
/*
describe('checkBoardWin)', () => {
  it('testing that it returns win = x ', () => {
    const row = ['o',null , 'x'] checkBoardWin(row),
    const row = ['o',null , 'x'],checkBoardWin(row),
    const row = ['o',null , 'x'],checkBoardWin(row)
    equal(checkBoardWin(row), 'x')
  })
})

  it('testing that it returns 1', () => {
    const row = ['x',null , 'o']
    equal(checkBoardWin(row), 1)
  })

  it('testing that it returns 1', () => {
    const row = [null , 'o' , 'x']
    equal(checkBoardWin(row), 1)
  })

 it('testing that it returns 1', () => {
    const row = [null ,'x' , 'o']
    equal(checkBoardWin(row), 1)
  })

  it('testing that it returns 1', () => {
    const row = ['o','x',null]
    equal(checkBoardWin(row), 1)
  })

  it('testing that it returns "o"', () => {
    const row = ['x',null ,null]
    equal(rowWinCheck(row), 'o')
})
})



describe('rowWiadsnCheck()', () => {

  it('testing that it returns 1', () => {
    const board = [
      ['x', 'o', null],
      ['x', null, 'o'],
      [null, 'x', 'o'],
    ]
    equal(rowWinCheck(board), 1)
  })
})
*/
/*
describe('calculateWinner()', () => {

  it('should work for a horizontal winner', () => {
    const board: Board = [
      ['x', 'x', 'o'],
      ['x', 'x', 'x'],
      [null, 'o', 'o'],
    ]
    equal(calculateWinner(board), 'x')
  })

  it('should work for a vertical winner', () => {
    const board: Board = [
      ['o', 'x', 'o'],
      ['x', 'x', 'o'],
      [null, 'o', 'o'],
    ]
    equal(calculateWinner(board), 'o')
  })

  it('should work for a diagonal winner [rtl]', () => {
    const board: Board = [
      ['o', 'x', 'x'],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    equal(calculateWinner(board), 'x')
  })

  it('should work for a diagonal winner [ltr]', () => {
    const board: Board = [
      ['o', null, 'x'],
      [null, 'o', 'o'],
      ['x', 'o', 'o'],
    ]
    equal(calculateWinner(board), 'o')
  })

  it('should work when there is no winner', () => {
    const board: Board = [
      ['o', null, 'x'],
      [null, null, 'o'],
      ['x', 'o', 'o'],
    ]
    equal(calculateWinner(board), null)
  })

  it('should work when the board is empty', () => {
    const board: Board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    equal(calculateWinner(board), null)
  })
})

describe('isValidTransition()', () => {

  it('should allow for a move from x', () => {
    const from: Board = [
      ['o', null, 'x'],
      [null, null, 'o'],
      ['x', 'o', 'o'],
    ]
    const to: Board = [
      ['o', null, 'x'],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    equal(isValidTransition('x', from, to), true)
  })

  it('should allow for a move from o', () => {
    const from: Board = [
      ['o', null, null],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    const to: Board = [
      ['o', null, 'o'],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    equal(isValidTransition('o', from, to), true)
  })

  it('should not allow to overwrite', () => {
    const from: Board = [
      ['o', null, null],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    const to: Board = [
      ['o', null, null],
      [null, 'x', 'o'],
      ['x', 'o', 'x'],
    ]
    equal(isValidTransition('x', from, to), false)
  })

  it('should not allow to do more than 1 change', () => {
    const from: Board = [
      ['o', null, null],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    const to: Board = [
      ['o', 'x', 'x'],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    equal(isValidTransition('x', from, to), false)
  })

  it('should not allow to do more than 1 change even if 1 is valid', () => {
    const from: Board = [
      ['o', null, null],
      [null, 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    const to: Board = [
      ['o', null, 'o'],
      [null, 'x', 'o'],
      [null, 'o', 'o'],
    ]
    equal(isValidTransition('o', from, to), false)
  })
})

describe('finished()', () => {

  it('should finish when there are no moves left', () => {
    const board: Board = [
      ['o', 'o', 'x'],
      ['x', 'x', 'o'],
      ['x', 'o', 'o'],
    ]
    equal(finished(board), true)
  })

  it('should not finish when there are moves left', () => {
    const board: Board = [
      ['o', null, 'x'],
      [null, null, 'o'],
      ['x', 'o', 'o'],
    ]
    equal(finished(board), false)
  })
})
*/