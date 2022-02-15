const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
    },
    answer: [{ text: { type: String}, correct: {type: Boolean}}]
});

const FriendModel = mongoose.model("questions", QuestionSchema);
module.exports = FriendModel;
