const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function insertMessage(username, message, added_date) {
    await pool.query("INSERT INTO messages (username, message, added_date) VALUES ('" + username + "', '" + message + "', '" + added_date + "')");
}

async function getMessage(id) {
    const {rows} = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    return rows;
}

module.exports = {
    getAllMessages,
    insertMessage,
    getMessage
}