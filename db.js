/** Database connection for messagely. */
//https://stackoverflow.com/questions/9736085/run-a-postgresql-sql-file-using-command-line-arguments
//psql messagely < data.sql

const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(DB_URI);

client.connect();

module.exports = client;
