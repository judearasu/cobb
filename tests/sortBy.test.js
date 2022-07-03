const sortBy = require('../packages/sortBy');

describe('SortBy', () => {
    test('should check for the collection value null', () => {
        const arr = null;
        const result = sortBy(arr)
        expect(result).toEqual([]);
    });

    test('should check for the collection value empty', () => {
        const arr = [];
        const result = sortBy(arr)
        expect(result).toEqual([]);
    })

    test('should check for the collection value', () => {
        const users = [
            { 'user': 'fred', 'age': 48 },
            { 'user': 'barney', 'age': 36 },
            { 'user': 'fred', 'age': 40 },
            { 'user': 'barney', 'age': 34 }
        ];
        const result = sortBy(users);
        expect(result).toEqual([
            { 'user': 'fred', 'age': 48 },
            { 'user': 'barney', 'age': 36 },
            { 'user': 'fred', 'age': 40 },
            { 'user': 'barney', 'age': 34 }
        ]);
    })

    // test('should check for the collection and sort per user via func', () => {
    //     const users = [
    //         { 'user': 'fred', 'age': 48 },
    //         { 'user': 'barney', 'age': 36 },
    //         { 'user': 'fred', 'age': 40 },
    //         { 'user': 'barney', 'age': 34 }
    //     ];
    //     const result = sortBy(users, [function (o) { return o.user; }]);
    //     expect(result).toEqual([
    //         { 'user': 'barney', 'age': 36 },
    //         { 'user': 'barney', 'age': 34 },
    //         { 'user': 'fred', 'age': 48 },
    //         { 'user': 'fred', 'age': 40 }
    //     ]);
    // })

    test('should check for the collection and sort per user, age', () => {
        const users = [
            { 'user': 'fred', 'age': 48 },
            { 'user': 'barney', 'age': 36 },
            { 'user': 'fred', 'age': 40 },
            { 'user': 'barney', 'age': 34 }
        ];
        const result = sortBy(users, ['user', 'age']);
        expect(result).toEqual([
            { 'user': 'barney', 'age': 34 },
            { 'user': 'barney', 'age': 36 },
            { 'user': 'fred', 'age': 40 },
            { 'user': 'fred', 'age': 48 }
        ]);
    })
})