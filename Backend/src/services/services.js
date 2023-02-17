const db = require("./db");
const genValRef = require("../utils/generateValuesReferences");
const genKeyVal = require("../utils/generateInKeysValues");
const genSetPairs = require("../utils/generateSetPairs");

async function readAll(table) {
  const text = `SELECT * FROM ${table}`;
  const result = await db.query(text);
  const data = result.rows;

  return data;
}

async function create(table, valuesInput) {
  let message = "";

  if (!valuesInput.id) {
    const input = genKeyVal(valuesInput);
    const valueReferences = genValRef(input.size);

    const text = `INSERT INTO ${table}(${input.keys.join(",")})
                  VALUES(${valueReferences});`;

    const values = input.values;
    const result = await db.query(text, values);

    if (result.rowCount) {
      message = `${table} updated successfully`;
    } else {
      message = `Error in updating ${table}`;
    }
  } else {
    message = `Error in updating ${table}, id should not be provided`;
  }

  return { message };
}

async function update(table, id, valuesInput) {
  let message = "";
  const input = genSetPairs(valuesInput);

  const text = `UPDATE ${table}
                  SET ${input.setPairs.join(",")}
                  WHERE id=$1
                  RETURNING *;`;

  const values = [id, ...input.values];
  const result = await db.query(text, values);

  if (result.rowCount) {
    message = `${table} updated successfully`;
    return { message, "updated_row": result.rows[0] }
  } else {
    message = `Error in updating ${table}`;
    return { message }
  }
}

async function deleteRow(table, id) {
  const text = `DELETE FROM ${table} WHERE id=$1;`;
  const values = [id];

  const result = await db.query(text, values);

  let message = `Error in updating ${table}`;

  if (result.rowCount) {
    message = `${table} updated successfully`;
  }

  return { message };
}

module.exports = {
  readAll,
  create,
  update,
  deleteRow,
};
