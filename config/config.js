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
  "production": {
    "username": process.env.PGUSER,
    "password": process.env.PGPW,
    "database": process.env.PGDB,
    "host": process.env.PGHOST,
    "port": process.env.PGPORT,
    "dialect": "postgres",
    "dialectOptions": {
      "useUTC": true, // -->Add this line. for reading from database
    },
  }
}

module.exports = config