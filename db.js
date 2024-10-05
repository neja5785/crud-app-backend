// db.js

const { Pool } = require('pg');

// Create a new pool for managing connections
const pool = new Pool({
    user: 'postgres',        // PostgreSQL username
    host: 'localhost',            // PostgreSQL server address
    database: 'crud',    // Your database name
    password: 'root',    // PostgreSQL password
    port: 5432,                   // PostgreSQL port (default is 5432)
});

// Export a query function that can be used to interact with the database
module.exports = {
    query: (text, params) => pool.query(text, params),
};
