const mongoose = require("mongoose");
const requiredError = "This is a required Field.";

const FriendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, requiredError],
        // validate: {
        //     validator: function(v) {
        //         return typeof v === 'Number';
        //     }
        // }
    },
    age: {
        type: Number,
        required: [true, requiredError]
    },
    isDeveloper: {
        type: Boolean,
        required: [true, requiredError]
    },
    currentLocation: {
        type: String,
        required: [true, requiredError]
    }
});

const Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;