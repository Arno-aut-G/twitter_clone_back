require("dotenv").config();

const config = {
  "development": {
    "username": process.env.PGUSER,
    "password": process.env.PGPW,
    "database": process.env.PGDB,
    "host": process.env.PGHOST,
    "port": process.env.PGPORT,
    "dialect": "postgres",
    "dialectOptions": {
      "useUTC": true, // -->Add this line. for reading from database
    },
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

module.exports = config