/**
 * sortBy(collection, [iteratees=[_.identity]])
 * Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee
 */
const baseSort = require('./internal/_baseSort');

var sortBy = function (collection, iteratees) {
    if (collection === null || !collection.length) {
        return [];
    }
    if (Array.isArray(iteratees)) {
        iteratees.forEach(iterator => {
            collection = baseSort(collection, iterator);
        });
    }
    return collection;
}
module.exports = sortBy;
