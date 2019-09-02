const isEmpty = require('../../packages/array-isempty')
describe('isEmpty', () => {
  test('should work on string', () => {
    expect(isEmpty('')).toEqual(true)
    expect(isEmpty('hello')).toEqual(false)
  })

  test('should work on arrays', () => {
    expect(isEmpty([])).toEqual(true)
    expect(isEmpty([1])).toEqual(false)
    expect(isEmpty([1, 2])).toEqual(false)
  })

  test('should work on objects', () => {
    expect(isEmpty({})).toEqual(true)
    expect(isEmpty({ a: 1 })).toEqual(false)
    expect(isEmpty({ a: 1, b: 2 })).toEqual(false)
  })

  test('should validate for value other than collection', () => {
    expect(isEmpty(null)).toEqual(true)
    expect(isEmpty(undefined)).toEqual(true)
    expect(isEmpty(0)).toEqual(true)
    expect(isEmpty(100)).toEqual(true)
    expect(isEmpty(-3)).toEqual(true)
    expect(isEmpty(Infinity)).toEqual(true)
    expect(isEmpty('')).toEqual(true)
  })
})
