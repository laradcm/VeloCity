
function generateValuesReferences(length){
    const arr = [];

    for (let i = 1; i <= length; i++) {
        arr.push("$" + i);
    }

    return arr.join(",");
}

module.exports = generateValuesReferences;