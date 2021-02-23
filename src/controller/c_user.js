const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helper = require("../helper/response");
const {
  userRegister,
  checkEmail,
  checkDataId,
  countDataId,
  updateUserModel,
  countUserModel,
  autoUpdateLocation,
  deletePhoto,
} = require("../model/m_user");
const fs = require("fs");

module.exports = {
  userRegister: async (request, response) => {
    try {
      let { user_name, user_email, user_password } = request.body;

      if (user_name === "" || user_email === "" || user_password === "") {
        return helper.response(
          response,
          400,
          "There is data that has not been filled"
        );
      } else {
        const countUser = await countUserModel(user_email);
        const checkUser = await checkEmail(user_email);

        if (countUser > 0) {
          return helper.response(response, 400, "Email has been registered");
        } else {
          const salt = bcrypt.genSaltSync(10);
          const encryptPassword = bcrypt.hashSync(user_password, salt);
          const setData = {
            user_name,
            user_email,
            user_password: encryptPassword,
            user_created_at: new Date(),
          };

          const result = await userRegister(setData);
          return helper.response(response, 200, "Success Register", result);
        }
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body;
      const countUser = await countUserModel(user_email);
      const checkDataUser = await checkEmail(user_email);
      if (countUser > 0) {
        const checkPassword = bcrypt.compareSync(
          user_password,
          checkDataUser[0].user_password
        );
        if (checkPassword) {
          const { user_id, user_name, user_email } = checkDataUser[0];
          const payload = { user_id, user_name, user_email };
          const token = jwt.sign(payload, "privacy", { expiresIn: "3h" });
          const result = { ...payload, token };
          return helper.response(
            response,
            200,
            `Welcome, ${checkDataUser[0].user_name}`,
            result
          );
        } else {
          return helper.response(response, 400, "Wrong Password");
        }
      } else {
        return helper.response(response, 400, "Email/Account not registered");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getUser: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await checkDataId(id);
      return helper.response(response, 200, "Success show your data", result);
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  updateUser: async (request, response) => {
    try {
      const { id } = request.params;
      let { user_name, user_email, user_photo, user_location } = request.body;
      const countDataUser = await countDataId(id);
      const userData = await checkDataId(id);
      if (countDataUser > 0) {
        if (user_name === "") user_name = userData[0].user_name;
        if (user_email === "") user_email = userData[0].user_email;
        if (request.file === undefined) {
          user_photo = userData[0].user_photo;
        } else {
          if (userData[0].user_photo !== "") {
            fs.unlink(
              `uploads/users/${userData[0].user_photo}`,
              function (err) {
                if (err) {
                  throw err;
                } else console.log("File has been changed!");
              }
            );
            user_photo = request.file.filename;
          } else {
            user_photo = request.file.filename;
          }
        }
        if (user_location === "") user_location = userData[0].user_location;

        const setData = {
          user_name,
          user_email,
          user_photo,
          user_location,
          user_updated_at: new Date(),
        };
        const result = await updateUserModel(setData, id);
        return helper.response(
          response,
          200,
          "Success update your data",
          result
        );
      } else {
        fs.unlink(`uploads/users/${request.file.filename}`, function (err) {
          if (err) {
            throw err;
          } else console.log("Uploading image is canceled");
        });
        return helper.response(response, 400, "Data is not found");
      }
    } catch {
      fs.unlink(`uploads/users/${request.file.filename}`, function (err) {
        if (err) {
          throw err;
        } else console.log("Uploading image is canceled");
      });
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  autoUpdateLocation: async (request, response) => {
    try {
      const { user_location, user_id } = request.body;

      const data = await checkDataId(user_id);
      console.log(data[0]);
      if (user_location === "" || user_location === null) {
        user_location = data[0].user_location;
      }
      result = await autoUpdateLocation(user_location, user_id);
      return helper.response(response, 200, "Location Updated");
    } catch {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  deletePhoto: async (request, response) => {
    try {
      const { user_id } = request.params;
      const data = await checkDataId(user_id);
      fs.unlink(`uploads/users/${data[0].user_photo}`, async function (err) {
        if (err) {
          throw err;
        } else {
          result = await deletePhoto(user_id);
          return helper.response(response, 200, "Photo has been deleted");
        }
      });
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
