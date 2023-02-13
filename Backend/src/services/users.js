const db = require("./db");

async function readSingle(table, id) {
  const text = `SELECT * FROM ${table} WHERE id=$1;`;
  const values = [Number(id)];
  console.log(text, values);
  const result = await db.query(text, values);

  const data = result.rows;

  return data;
}

module.exports = {
  readSingle,
};
