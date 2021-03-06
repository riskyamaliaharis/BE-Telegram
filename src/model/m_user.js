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
        "SELECT COUNT(*) as total FROM user WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error));
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
  autoUpdateLocation: (loc, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE user SET user_location='${loc}' WHERE user_id =${id}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  deletePhoto: (user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE user SET user_photo='' WHERE user_id =${user_id}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  allMyRoom: (myid) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT  room_random_number FROM room_chat WHERE user_b =${myid}`,
        (error, result) => {
          console.log(error);
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
