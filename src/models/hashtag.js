const mongoose = require('mongoose');

const hashTagchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true})

// tweetSchema.virtual('contentWithhEmail').get(function process() {
//     return this.content + "\n" + "Created by:" + this.userEmail
// })

const Hashtag = mongoose.model('Hashtag', hashTagchema);
module.exports = Hashtag;