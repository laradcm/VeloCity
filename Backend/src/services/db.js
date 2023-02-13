const { Pool } = require("pg");
const dbConfig = require("../configs/db");

async function query(sql, params) {
  const pool = new Pool(dbConfig);

  const client = await pool.connect();

  const results = await client.query(sql, params);

  await client.end();
  
  return results;
}

module.exports = {
  query,
};
