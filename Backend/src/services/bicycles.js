const db = require('./db')
const genValRef = require('../utils/generateValuesReferences');

const parameters = [
    "stationID",
    "status",
    "condition"
];

const table = "bicycles";

// const table = "students";// for testing with my old table


async function readAll(){

    const text = `SELECT * FROM ${table}`;
    const result = await db.query(text);
    const data = result.rows;
 
    return data;
}

//WIP
// async function create(valuesInput){

//     const valueReferences = genValRef(parameters.length);
//     const text = `INSERT INTO ${table}(${parameters.join(",")}) VALUES(${valueReferences});`;
//     const values = [valuesInput.parameters[0], valuesInput.parameters[1], valuesInput.parameters[3]];
//     const result = await db.query(text, values);

 
//     let message = `Error in updating ${table}`;

//     if (result.affectedRows) {
//       message = `${table} updated successfully`;
//     }
  
//     return {message};

// }



module.exports = {
    readAll
}