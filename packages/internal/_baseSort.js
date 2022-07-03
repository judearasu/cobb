/**
 * Internal Sort function use for the utility methods
 */

var baseSort = function (collection, identity) {
    let result = [];
    if (!collection.length || !collection) {
        return result;
    }
    if (typeof identity === 'function') {
        // result = collection.forEach(identity).sort();
    } else {
        result = collection.sort((a, b) => a[identity] - b[identity]);
    }
    return result;
}
module.exports = baseSort;