const sortBy = require('../packages/sortBy');

describe('SortBy', () => {
    test('should check for the collection value null', () => {
        const arr = null;
        const result = sortBy(arr)
        expect(result).toEqual([]);
    });

    test('should checl for the collection value empty', () => {
        const arr = [];
        const result = sortBy(arr)
        expect(result).toEqual([]);
    })
})