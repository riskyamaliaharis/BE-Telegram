const helper = require("../helper/response");
const {
  searchEmail,
  addFriendModel,
  searchMyData,
  getFriendsModel,
  checkFriendship,
  changeMyFriendStatus,
  getFriendsWaitingModel,
  getFriendsWaitedModel,
} = require("../model/m_friends");
const { countUserModel } = require("../model/m_user");
const fs = require("fs");

module.exports = {
  addFriend: async (request, response) => {
    try {
      let { user_id, user_email } = request.body;

      if (user_email === "") {
        return helper.response(response, 400, "Email has not been filled");
      } else {
        const countUser = await countUserModel(user_email);
        const searchUser = await searchEmail(user_email);
        const checkMyData = await searchMyData(user_id);

        if (countUser === 0) {
          return helper.response(
            response,
            400,
            `User with email ${user_email} is not found`
          );
        } else {
          if (user_email === checkMyData[0].user_email) {
            return helper.response(
              response,
              400,
              "Sorry, you can not add your own self"
            );
          } else {
            const checkInvitation = await checkFriendship(
              searchUser[0].user_id,
              user_id
            );
            console.log("checkFriendship " + checkFriendship);
            const setData = {
              user_id,
              friend_id: searchUser[0].user_id,
              friend_status: checkInvitation === 0 ? 0 : 1,
              created_at: new Date(),
            };
            const result = await addFriendModel(setData);
            console.log(result);
            changeMyFriendStatus(result.friend_id, result.user_id);
            const message =
              result.friend_status === 0
                ? `Success add ${searchUser[0].user_name} in your friend list. Wait for her/his confirm`
                : `You and ${searchUser[0].user_name} are friend now`;
            return helper.response(response, 200, message, result);
          }
        }
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getFriends: async (request, response) => {
    try {
      const { id } = request.params;

      const result = await getFriendsModel(id);
      return helper.response(
        response,
        200,
        `Success get your friend list`,
        result
      );
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getFriendsWaiting: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getFriendsWaitingModel(id);
      if (result.length > 0) {
        return helper.response(
          response,
          200,
          `Success get your friend list`,
          result
        );
      } else {
        return helper.response(
          response,
          400,
          `No invitation waiting to confirmed`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getFriendsWaited: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getFriendsWaitedModel(id);
      if (result.length > 0) {
        return helper.response(
          response,
          200,
          `Success get your friend list`,
          result
        );
      } else {
        return helper.response(
          response,
          400,
          `No invitation waited to confirmed`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
