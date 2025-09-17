const pool = require("./pool");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM minimsgbrd");
    return rows;
  } catch (err) {
    console.error("Error fetching messages:", err);
    throw err; // rethrow or handle as needed
  }
}

async function getSingleMessage(messageID) {
  const { rows } = await pool.query("SELECT * FROM minimsgbrd WHERE id = $1", [
    messageID,
  ]);
  return rows[0];
}

async function addNewMessage(messageText, messageUser) {
  await pool.query("INSERT INTO minimsgbrd (text, username) VALUES ($1, $2)", [
    messageText,
    messageUser,
  ]);
}

module.exports = {
  getAllMessages,
  getSingleMessage,
  addNewMessage,
};
