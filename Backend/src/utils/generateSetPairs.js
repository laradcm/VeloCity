
function generateSetPairs( inObj ){

    const entries = Object.entries( inObj );

    const keys = Object.keys( inObj );
    const size = keys.length;
    const values =  Object.values( inObj );

    const setPairs = [];
 

    let ref = 2;

    for ( const key of keys ) {
 
        setPairs.push(key + ` = $${ref}`);
        ref++;
    }

    

    return {
        setPairs,
        size,
        values
    }

}

module.exports = generateSetPairs;