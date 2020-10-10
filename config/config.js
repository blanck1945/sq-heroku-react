require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_POSTGRES,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_POSTGRES,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    },
  }
}

/*
postgres://jbenkzdymtbpxg:31739cc6894108d333a63b42c0075e10763bcad7ff200bd0d1829c710a65e9ff@ec2-23-23-36-227.compute-1.amazonaws.com:5432/dfpc9kacdruocj*/
