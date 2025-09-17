require("dotenv").config();

const { Pool } = require("pg");

// module.exports = new Pool({
//   connectionString: "postgresql://hermshy@localhost:5432/minimsgbrd",
// });

// For hosted db
module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});
