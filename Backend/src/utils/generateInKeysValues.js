

function generateInKeysValues( inObj ){

    const keys = Object.keys( inObj );
    const size = keys.length;
    const values =  Object.values( inObj );

    return {
        keys,
        size,
        values
    };

}

module.exports = generateInKeysValues;