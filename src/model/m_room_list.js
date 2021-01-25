const connection = require("../config/mysql");
module.exports = {
  makeRoomChatModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO room_chat SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              room_id: result.insertId,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  deleteRoomChatModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM room_chat WHERE room_id =${id}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getRoomChatModel: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM room_chat JOIN user ON room_chat.user_b = user.user_id WHERE room_chat.user_a =${id_user}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
