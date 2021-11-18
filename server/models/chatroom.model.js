const mongoose = require('mongoose');

const ChatroomSchema = new mongoose.Schema ( {

    addMessage: {
        type:String, 
        required: [true, "Message cannot be blank"],
        min:[2, "Message must be at least 2 characters long"]
    },

    // addChatroom: {
    //     type: String, 
    //     required: [true, "A name must be given to new chatroom"],
    //     min: [2, "Chatroom must be at least 2 characters long"]
    // },
}, 
    {timestamps:true}
);
const Message = mongoose.model('Message', ChatroomSchema);

module.exports= Message;

// 

