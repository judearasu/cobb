const append = require('../../../packages/array/append')

describe('append', () => {
  test('should append the second array to the end of first array', () => {
    const arr = [1, 2, 3]
    const arr2 = [3, 4, 5]
    const result = append(arr, arr2)
    expect(result).toEqual([1, 2, 3, 3, 4, 5])
  })

  test('should not accept null values', () => {
    const arr = [1, 2, 3]
    const arr2 = [3, null, 5]
    const result = append(arr, arr2)
    expect(result).toEqual([1, 2, 3, 3, 5])
  })

  test('should not accept undefined values', () => {
    const arr = [1, 2, 4, undefined]
    const arr2 = [3, undefined, 5]
    const result = append(arr, arr2)
    expect(result.length).toEqual(5)
    expect(result).toEqual([1, 2, 4, 3, 5])
  })

  test('should not accept null object as second array', () => {
    const arr = [1, 2]
    const result = append(arr, null)
    expect(result).toEqual([1, 2])
  })

  test('should not accept undefined object as second array', () => {
    const arr = [1, 2, 4, 9]
    const result = append(arr, undefined)
    expect(result).toEqual([1, 2, 4, 9])
  })
})
