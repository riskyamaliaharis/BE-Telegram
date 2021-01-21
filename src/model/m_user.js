const connection = require("../config/mysql");
module.exports = {
  userRegister: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO user SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            user_id: result.insertId,
            ...setData,
          };
          delete newResult.user_password;
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  countUserModel: (user_email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT COUNT(*) as total FROM user WHERE user_email = ?",
        user_email,
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error));
        }
      );
    });
  },
  checkEmail: (user_email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user WHERE user_email = '${user_email}'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkDataId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  countDataId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT COUNT(*) FROM user WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  updateUserModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE user SET ? WHERE user_id = ?",
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              user_id: id,
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
};