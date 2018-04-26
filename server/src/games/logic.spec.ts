import 'mocha'
import { equal } from 'assert'
import { calculateWinner, checkIfTie, rowWinCheck } from './logic'
import { Board } from './entities'

describe('checkIfTie()', () => {
  it('testing that it returns true', () => {
    const board: Board = ['o', null, null]
    equal(checkIfTie(board), true)
  })
})

describe('checkIfTie()', () => {
  it('testing that it returns false', () => {
    const board: Board = ['x', null, null]
    equal(checkIfTie(board), false)
  })
})

describe('rowWinCheck()', () => {

  it('testing that it returns "x"', () => {
    const board: Board = [null , 'o', 'x']

    equal(rowWinCheck(board), 'x')
  })
})

describe('calculateWinner()', () => {
  it('testing that it returns "null" ', () => {
    const board: Board = [null, 'o', null]
    equal(calculateWinner(board), null)
  })
})

describe('calculateWinner()', () => {
  it('testing that it returns "ERROR" ', () => {
    const board: Board = [null, 'x', null]
    equal(calculateWinner(board), 'ERROR')
  })
})


describe('calculateWinner()', () => {
  it('testing that it returns "o" ', () => {
    const board: Board = [null, 'x', 'o']
    equal(calculateWinner(board), 'o') // returns o
  })
})

describe('calculateWinner()', () => {
  it('testing that it returns "x" ', () => {
    const board: Board = ['x', null, 'o']
    equal(calculateWinner(board), 'x') // returns o
  })
})

describe('calculateWinner()', () => {
  it('testing that it returns "x" ', () => {
    const board: Board = ['x', 'o', null]
    equal(calculateWinner(board), 'o') // returns o
  })
})

describe('calculateWinner()', () => {
  it('testing that it returns "o" ', () => {
    const board: Board = ['o', null , 'x']
    equal(calculateWinner(board), 'o') // returns o
  })
})


/*
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
})*/

