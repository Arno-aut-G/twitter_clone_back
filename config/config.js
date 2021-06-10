require("dotenv").config();

const config = {
  "development": {
    "username": process.env.PGUSER,
    "password": process.env.PGPW,
    "database": process.env.PGDB,
    "host": process.env.PGHOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.PGUSER,
    "password": process.env.PGPW,
    "database": process.env.PGDB,
    "host": process.env.PGHOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PGUSER,
    "password": process.env.PGPW,
    "database": process.env.PGDB,
    "host": process.env.PGHOST,
    "dialect": "postgres"
  }
}

module.exports = config