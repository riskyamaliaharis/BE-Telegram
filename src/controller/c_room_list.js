const helper = require("../helper/response");

const {
  makeRoomChatModel,
  deleteRoomChatModel,
  getRoomChatModel,
  checkThisRoomModel,
  checkChatModelByRandomNumber,
  checkListModelByRandomNumber,
  deleteAllChatModel,
} = require("../model/m_room_list");

module.exports = {
  makeRoomChat: async (request, response) => {
    try {
      const { user_a, user_b } = request.body;

      const checkThisRoom = await checkThisRoomModel(user_a, user_b);

      if (checkThisRoom > 0) {
        return helper.response(
          response,
          400,
          "Sorry, This Room has been listed"
        );
      } else {
        const maximum = 4;
        const minimum = 1;
        const randomnumber = Math.floor(
          Math.random() * 10000 - minimum / (maximum - minimum)
        );

        console.log(randomnumber);

        const setData = {
          room_random_number: randomnumber,
          user_a,
          user_b,
          created_at: new Date(),
        };

        const result = await makeRoomChatModel(setData);
        console.log(result);
        return helper.response(
          response,
          200,
          "Success Add to Room List",
          result
        );
      }
      //   const setData2 = {
      //     room_random_number: result.room_random_number,
      //     user_a:result.user_b,
      //     user_b:result.user_a,
      //     created_at: result.created_at,
      //   };
      //   const result2 = await makeRoomChatModel(setData2);
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  makeRoomChatForFriend: async (request, response) => {
    try {
      const { user_a, user_b, room_random_number } = request.body;

      const checkThisRoom = await checkThisRoomModel(user_a, user_b);

      if (checkThisRoom > 0) {
        return helper.response(
          response,
          200,
          "Sorry, This Room has been listed"
        );
      } else {
        const setData = {
          room_random_number,
          user_a,
          user_b,
          created_at: new Date(),
        };

        const result = await makeRoomChatModel(setData);
        console.log(result);
        return helper.response(
          response,
          200,
          "Success Add to Room List",
          result
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getRoomChat: async (request, response) => {
    try {
      const { id } = request.params;
      const { search } = request.query;
      const result = await getRoomChatModel(id, search);
      return helper.response(
        response,
        200,
        `Success get Room Chat list`,
        result
      );
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  deleteChat: async (request, response) => {
    try {
      const { rand } = request.params;
      const check1 = await checkListModelByRandomNumber(rand);
      const check2 = await checkChatModelByRandomNumber(rand);
      if (check1 > 0) {
        const result = deleteRoomChatModel(rand);
        return helper.response(
          response,
          200,
          `Success delete Room Chat list`,
          result
        );
      }
      if (check2 > 0) {
        const result2 = deleteAllChatModel(rand);
        console.log(result2);
      }
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
