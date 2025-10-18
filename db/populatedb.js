const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    message TEXT,
    added_date TEXT
);

INSERT INTO messages (username, message, added_date) VALUES
('Amando', 'Hi there!', 'Sat Oct 18 2025 10:59:21 GMT+0530 (India Standard Time)'),
('Charles', 'Hello World!!', 'Sat Oct 18 2025 10:59:21 GMT+0530 (India Standard Time)');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: 'postgresql://postgres:rxrMNnXYIsEQWtYqcBRXkStUGMHjnQoq@switchyard.proxy.rlwy.net:24982/railway'
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Done');
}

main();