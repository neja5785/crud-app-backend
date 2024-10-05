// db.js

const { Pool } = require('pg');

// Create a new pool for managing connections
const pool = new Pool({
    user: 'postgres',        // PostgreSQL username
    host: 'crud.postgres.database.azure.com',            // PostgreSQL server address
    database: 'postgres',    // Your database name
    password: 'Universitetas.456',    // PostgreSQL password
    port: 5432,                   // PostgreSQL port (default is 5432)
    ssl: { rejectUnauthorized: false }  
});

// Export a query function that can be used to interact with the database
module.exports = {
    query: (text, params) => pool.query(text, params),
};
