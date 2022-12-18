const mapArrayToString = (arr) => {
    return arr.filter(el => Number.isInteger(el)).map(el => el.toString())
}

module.exports = mapArrayToString