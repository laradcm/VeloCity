const db = require("./db");

async function readSingle(table, email) {
  const text = `SELECT * FROM ${table} WHERE email=$1;`;
  const values = [email];
  const result = await db.query(text, values);

  const data = result.rows;

  return data;
}

module.exports = {
  readSingle,
};
