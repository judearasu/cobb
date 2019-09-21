const head = require('../../../packages/array/head')

describe('head', () => {
  test('should not accept null values', () => {
    expect(head).toThrow(Error)
  })

  test('should return the array if the limit is not sent', () => {
    const arr = [1, 2, 3]
    expect(head(arr)).toEqual([1, 2, 3])
  })

  test('should return the array if the limit is null or not a integer', () => {
    const arr = [1, 2, 3, 4]
    expect(head(arr, null)).toEqual([1, 2, 3, 4])
  })

  test('should return the first two elements from array if the limit is 2', () => {
    const arr = [1, 2, 3, 4]
    expect(head(arr, 2)).toEqual([1, 2])
  })

  test('should return the first 7 elements from array if the limit is 7', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    expect(head(arr, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
