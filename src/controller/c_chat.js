const helper = require("../helper/response");

const {
  sendChatModel,
  countChats,
  getChatsModel,
  sendLastMessage,
} = require("../model/m_chat");

module.exports = {
  sendChat: async (request, response) => {
    try {
      const {
        room_random_number,
        room_message,
        sender_id,
        receiver_id,
      } = request.body;

      const setData = {
        room_random_number,
        room_message,
        sender_id,
        receiver_id,
        created_at: new Date(),
      };

      const result = await sendChatModel(setData);
      await sendLastMessage(room_random_number, room_message);
      return helper.response(response, 200, "Success Send Message", result);
    } catch (error) {
      console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getChats: async (request, response) => {
    try {
      const { rands } = request.params;

      const check = await countChats(rands);
      if (check > 0) {
        const result = await getChatsModel(rands);

        return helper.response(response, 200, "Success Send Message", result);
      } else {
        return helper.response(response, 400, "No data");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
