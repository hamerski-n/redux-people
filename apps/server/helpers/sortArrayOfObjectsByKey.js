function sortByKey(arr, key) {
    const sortResult = arr.sort((a, b) => (a[`${key}`].toLowerCase() > b[`${key}`].toLowerCase()) ? 1 : -1)
    return sortResult
}

module.exports = sortByKey;