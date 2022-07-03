/**
 * sortBy(collection, [iteratees=[_.identity]])
 * Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee
 */

function sortBy(collection, iteratees) {
    if (collection === null || !collection.length) {
        return []
    }
}
module.exports = sortBy;
