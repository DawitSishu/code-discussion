const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, "room is required"]
    }
})

module.exports = mongoose.model("Rooms",RoomSchema)