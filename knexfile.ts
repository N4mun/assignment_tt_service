import type { Knex } from 'knex';

const config: Knex.Config = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'tt_db',
        port: 3307,
    },
    migrations: {
        directory: './migrations',
    },
};

export default config;
