const { response, request } = require("express");
//const { deleteOne } = require('../models/chatroom.model');
const Message = require("../models/chatroom.model");

// CRUD commands
module.exports = {
  createMessage: (request, response) => {
    Message.create(request.body)
      .then((newMessage) => {
        console.log("success");
        response.json(newMessage);
      })
      .catch((err) => {
        console.log("failed");
        response.status(400).json(err);
      });
  },

  // createChatroom: (request, response) => {
  //     Message.create(request.body)
  //     .then((newChatroom) => {
  //         response.json(newChatroom)
  //     })
  //     .catch((err)=> {
  //         console.log(err);
  //         response.status(400).json(err);
  //     });
  // },

  getOneChatroom: (request, response) => {
    Message.findById({ _id: request.params.id })
      .then((oneChatroom) => {
        response.json(oneChatroom);
      })
      .catch((err) => {
        console.log(err);
        response.status(400).json(err);
      });
  },

  getAllChatrooms: (request, response) => {
    Message.find({})
      .collation({ locale: "en", strength: 2 })
      .sort({ chatroomName: 1 })
      .then((allChatrooms) => {
        response.json(allChatrooms);
      })
      .catch((err) => {
        console.log(err);
        response.status(400).json(err);
      });
  },

  getAllMessages: (request, response) => {
    Message.find({})
      .collation({ locale: "en", strength: 2 })
      .sort({ userMessage: 1 })
      .then((allMessages) => {
        response.json(allMessages);
      })
      .catch((err) => {
        console.log(err);
        response.status(400).json(err);
      });
  },

  getOneMessage: (request, response) => {
    Message.findOne({ _id: request.params._id })
      .then((oneMessage) => {
        response.json(oneMessage);
      })
      .catch((err) => {
        console.log(err);
        response.status(400).json(err);
      });
  },

  deleteMessage: (request, response) => {
    Message.deleteOne({ _id: request.params.id })
      .then((deletedMessage) => {
        console.log("Message deleted");
        response.json(deletedMessage);
      })
      .catch((err) => {
        console.log(err);
        response.json(deletedMessage);
      });
  },

  // deleteChatroom: (request, response)=> {
  //     Message.deleteOne({ _id:request.params.id })
  //         .then((deletedChatroom)=> {
  //             console.log("Chatroom deleted");
  //             response.json(deletedChatroom);
  //             })
  //             .catch((err)=> {
  //                 console.log(err);
  //                 response.json(deletedChatroom);
  //             });
  // },

  editMessage: (request, response) => {
    console.log(request.body);
    console.log(request.params);
    Message.findOneAndUpdate({ _id: request.params._id }, request.body, {
      new: true,
      runValidators: true,
    })
      .then((updateMessage) => {
        console.log("Success");
        console.log(updateMessage);
        response.json(updateMessage);
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
        response.status(400).json(err);
      });
  },

  // editChatroom: (request, response) => {
  //     console.log(request.body);
  //     console.log(request.params);
  //     Message.findByIdAndUpdate({ _id: request.params.id }, request.body, {
  //         new: true,
  //         runValidators:false,
  //     })
  //         .then((updateChatroom)=> {
  //             console.log("Success");
  //             console.log(updatedChatroom);
  //             response.json(updatedChatroom);
  //         })
  //         .catch((err)=> {
  //             console.log("Error");
  //             console.log(err);
  //             response.status(400).json(err);
  //         })
  // }
};

//
