const connection = require("../config/mysql");
module.exports = {
  sendChatModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO chat SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            chat_id: result.insertId,
            ...setData,
          };
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  countChats: (rands) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM chat WHERE room_random_number=${rands}`,
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error));
        }
      );
    });
  },
  getChatsModel: (rands) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM chat WHERE room_random_number=${rands}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  sendLastMessage: (rands, msg) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE room_chat SET last_message='${msg}', updated_at=NOW() WHERE room_random_number=${rands}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
