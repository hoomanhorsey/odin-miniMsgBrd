#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS minimsgbrd (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
    added TIMESTAMPTZ DEFAULT NOW()

);

INSERT INTO minimsgbrd (username, text) 
VALUES
  ('Ben', 'I like to poo and think about my poos'),
  ('Mr Poo', 'I feel quite self conscious about all this attention'),
  ('Andrew', 'I accept Poo as a inevitable part of life');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
