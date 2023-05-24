const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
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