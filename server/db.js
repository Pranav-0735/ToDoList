import pg from 'pg';

const pool = new pg.Client({
    user: "postgres",
    password: "Postgrespran@25",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});


pool.connect();
export default pool;
