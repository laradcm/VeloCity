const db = require('./db')
const genValRef = require('../utils/generateValuesReferences');
const genKeyVal = require('../utils/generateInKeysValues');
const genSetPairs = require('../utils/generateSetPairs');

const table = "bicycles";


async function readAll(){

    const text = `SELECT * FROM ${table}`;
    const result = await db.query(text);
    const data = result.rows;
 
    return data;
}


async function create(valuesInput){

    const input = genKeyVal(valuesInput);
    const valueReferences = genValRef(input.size);

    const text = `INSERT INTO ${table}(${input.keys.join(",")})
                  VALUES(${valueReferences});`;

    const values = input.values;
    const result = await db.query(text, values);
 
    let message = `Error in updating ${table}`;//will never reach here if error occurs

    if (result.rowCount) {
      message = `${table} updated successfully`;
    }
  
    return {message};

}

async function update(valuesInput){

    const input = genSetPairs(valuesInput);
    
    const text = `UPDATE ${table}
                  SET ${input.setPairs.join(",")}
                  WHERE ${input.wherePair};`

    const values = input.values;
    const result = await db.query(text, values);

    let message = `Error in updating ${table}`;//will never reach here if error occurs

    if (result.rowCount) {
      message = `${table} updated successfully`;
    }
  
    return {message};
}

async function deleteRow(id){

    const text = `DELETE FROM ${table} WHERE id=$1;`;
    const values = [id];

    console.log("i was here");
    const result = await db.query(text, values);

    let message = `Error in updating ${table}`;//will never reach here if error occurs

    if (result.rowCount) {
      message = `${table} updated successfully`;
    }
  
    return {message};

}

module.exports = {
    readAll,
    create,
    update,
    deleteRow
}