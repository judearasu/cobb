const compact = require('../../packages/array-compact')

describe('compact', () => {
  test('should remove null values', () => {
    const arr = [1, 2, 3, null]
    expect(compact(arr).length).toBe(3)
  })

  test('should remove undefined values', () => {
    const arr = [1, 3, 5, 7, undefined, 8]
    expect(compact(arr).length).toBe(5)
    expect(compact(arr).includes(undefined)).toBe(false)
  })

  test('should remove null values', () => {
    const arr = [1, 3, 5, 7, null, 9]
    expect(compact(arr).length).toBe(5)
    expect(compact(arr).includes(null)).toBe(false)
  })

  test('should return empty array if  array is null or undefined', () => {
    const arr = [null]
    expect(compact(arr).length).toBe(0)
    expect(compact(arr).includes(null)).toBe(false)
    expect(compact(arr)).toEqual([])
    const arr2 = [undefined]
    expect(compact(arr2).length).toBe(0)
    expect(compact(arr2).includes(null)).toBe(false)
    expect(compact(arr2)).toEqual([])
  })
})
