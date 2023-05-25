const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    uid:{
        type:String,
        required:[true,"there must be a uid to enter a room"]
    },
    username:{
        type:String,
        required:[true,"there must be a user to enter a room"]
    },
    roomname:{
         type:String,
        required:[true,"there must be a room name"]
    }
})

module.exports = mongoose.model("Room",RoomSchema)