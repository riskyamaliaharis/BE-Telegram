const helper = require("../helper/response");

const {
  makeRoomChatModel,
  deleteRoomChatModel,
  getRoomChatModel,
} = require("../model/m_room_list");

module.exports = {
  makeRoomChat: async (request, response) => {
    try {
      const { user_a, user_b } = request.body;

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
      //   const setData2 = {
      //     room_random_number: result.room_random_number,
      //     user_a:result.user_b,
      //     user_b:result.user_a,
      //     created_at: result.created_at,
      //   };
      //   const result2 = await makeRoomChatModel(setData2);
      return helper.response(response, 200, "Success Add to Room List", result);
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getRoomChat: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getRoomChatModel(id);
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
};
