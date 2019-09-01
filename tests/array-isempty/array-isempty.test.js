const isEmpty = require('../../packages/array-isempty')
describe('isEmpty', () => {
  test('should work on string', () => {
    expect(isEmpty('')).toEqual(true)
    expect(isEmpty('hello')).toEqual(false)
  })

  it('should work on arrays', function () {
    expect(isEmpty([])).toEqual(true)
    expect(isEmpty([1])).toEqual(false)
    expect(isEmpty([1, 2])).toEqual(false)
  })
})
