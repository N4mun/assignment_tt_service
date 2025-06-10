import mysql from "mysql2/promise";

const DB_NAME = "tt_db";

async function run() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "12345678",
        port: 3307,
    });

    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
    console.log(`Database '${DB_NAME}' ensured.`);

    await connection.changeUser({ database: DB_NAME });

    await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
        user_id int NOT NULL AUTO_INCREMENT,
        user_firstname varchar(100) NOT NULL,
        user_lastname varchar(100) NOT NULL,
        user_phone varchar(255) NOT NULL,
        user_email varchar(255) NOT NULL,
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id),
        UNIQUE KEY users_user_email_unique (user_email)
    ) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);

    console.log('Table "users" ensured.');

    await connection.end();
}

run().catch(console.error);