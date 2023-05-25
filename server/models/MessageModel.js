const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    user_id : {
        type: String,
        required: [true,"ther must be a sender"]
    },
    message : {
        type: String,
        required:[true, "message can't be empty"]
    } ,
    chat: {
        type: String,
        required:[true, "message can't be empty"]
    }
},{
    timestamps:  true,
})

module.exports = mongoose.model("Messages",ContactSchema);