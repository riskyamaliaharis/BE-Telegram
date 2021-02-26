const connection = require("../config/mysql");
module.exports = {
  addFriendModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO contacts SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              contacts_id: result.insertId,
              ...setData,
            };
            delete newResult.user_password;
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  searchEmail: (user_email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user WHERE user_email='${user_email}'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  searchMyData: (user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user WHERE user_id = ${user_id}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getFriendsModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM contacts JOIN user ON contacts.friend_id = user.user_id WHERE contacts.friend_status=1 AND contacts.user_id=?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkFriendship: (his, mine) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM contacts WHERE user_id=${his} AND friend_id=${mine}`,
        (error, result) => {
          console.log(result[0].total);
          !error ? resolve(result[0].total) : reject(new Error(error));
        }
      );
    });
  },
  changeMyFriendStatus: (his, mine) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE contacts SET friend_status=1 WHERE user_id=${his} AND friend_id=${mine}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  confirmFriendModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT contacts.*, user.user_name, user.user_email, user.user_photo FROM contacts LEFT JOIN user ON contacts.user_id = user.user_id WHERE contacts.friend_status = 0 AND contacts.friend_id=${id}`
      ),
        (error, result) => {
          console.log(result);
          !error ? resolve(result) : reject(new Error(error));
        };
    });
  },
  getFriendsWaitingModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM contacts JOIN user ON contacts.friend_id = user.user_id WHERE contacts.user_id = ${id} AND contacts.friend_status = 0`
      ),
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        };
    });
  },
  getFriendsWaitedModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM contacts JOIN user ON contacts.friend_id = user.user_id WHERE contacts.friend_id = ${id} AND contacts.friend_status = 0`
      ),
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        };
    });
  },
};
