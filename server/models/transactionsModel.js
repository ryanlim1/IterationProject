const { Pool } = require('pg');
// install pg dependency?

//need to set up postgreSQL db
const PG_URI = 'postgres://qnvdfcpn:E0IDs55E1KoIP0bLva8N5nw5aEJZ3olj@kashin.db.elephantsql.com/qnvdfcpn';
// const PG_URI = 'postgres://faojdvgu:rTPmS6Vk_r0HoleiSheciCMrXiQF409Y@fanny.db.elephantsql.com/faojdvgu';
const pool = new Pool ({
    connectionString: PG_URI
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}

