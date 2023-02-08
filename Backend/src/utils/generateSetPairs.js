
function generateSetPairs( inObj ){

    const entries = Object.entries( inObj );

    const keys = Object.keys( inObj );
    const size = keys.length;
    const values =  Object.values( inObj );

    const setPairs = [];
    let wherePair;

    let ref = 2;

    for ( const key of keys ) {
      if (key !== "id") {
        setPairs.push(key + ` = $${ref}`);
        ref++;
      } else {
        wherePair = key + ` = $1`;
      }
    }

    return {
        setPairs,
        wherePair,
        size,
        values
    }

}

module.exports = generateSetPairs;