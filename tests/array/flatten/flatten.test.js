const flatten = require('../../../packages/array/flatten')

describe('flatten', () => {
  test('should not accept null values', () => {
    const arr = null
    expect(() => {
      flatten(arr)
    }).toThrow()
    expect(flatten).toThrow(Error)
  })

  test('multi arrays are flattened - 1 ', () => {
    const arr = [1, 2, [3, 6], [9, 10, [11, 12]]]
    const result = flatten(arr)
    expect(result).toEqual([1, 2, 3, 6, 9, 10, 11, 12])
  })

  test('multi arrays are flattened - 2 ', () => {
    const arr = [1, [2, 3], [4, [5, 6], 7], 8]
    const result = flatten(arr)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  test('multi arrays with words are flattened ', () => {
    const arr = ['a', ['b', 'c'], ['d', ['e', 6], 7], 8]
    const result = flatten(arr)
    expect(result).toEqual(['a', 'b', 'c', 'd', 'e', 6, 7, 8])
  })

  test('unflattened arrays are flattened ', () => {
    const arr = [{ a: 4 }, [{ b: 5 }, { c: false }], { d: 'd' }]
    const result = flatten(arr)
    expect(result).toEqual([{ a: 4 }, { b: 5 }, { c: false }, { d: 'd' }])
  })

  test('empty arrays are flattened ', () => {
    const arr = [[], [], { d: 'd' }]
    const result = flatten(arr)
    expect(result).toEqual([{ d: 'd' }])
    const arr1 = [[], [], []]
    const result1 = flatten(arr1)
    expect(result1).toEqual([])
  })
})
