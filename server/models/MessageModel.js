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
    room: {
        type: String,
        required:[true, "there must be a room"]
    }
},{
    timestamps:  true,
    expireAfterHours:30
})

module.exports = mongoose.model("Messages",MessageSchema);