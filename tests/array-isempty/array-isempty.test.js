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
})
