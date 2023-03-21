const Hashtags = require('../models/hashtag');

class HashTagRepository { 
    async create(data) {
        try {
            const tag = await Hashtags.create(data);
            return tag;
        }
        catch(err) {
            console.log("error", err);
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtags.insertMany(data);
        }
        catch(err) {
            console.log("err", err);
        }
    }

    async get(id) {
        try {
            const tag = await Hashtags.findById(id);
            return tag;
        }
        catch(err) {
            console.log("error", err);
        }
    }

    async getWithComments(id) {
        try {
            const tag = await Hashtags.findById(id).populate({path: 'comments'}).lean();
            return tag;
        }
        catch(err) {
            console.log("error", err);
        }
    }

    // async update(id, data) {
    //     try {
    //         const tweet = await Tweet.findByIdAndUpdate(id, data, {new : true});
    //         return tweet;
    //     }
    //     catch(err) {
    //         console.log("error", err);
    //     }
    // }

    async destroy(id) {
        try {
            const tag = await Hashtags.findByIdAndRemove(id);
            return tag;
        }
        catch(err) {
            console.log("error", err);
        }
    }

    // async getAll(offset, limit) {
    //     try {
    //         const tag = await Hashtags.find().skip(offset).limit(limit);
    //         return tag;
    //     }
    //     catch(err) {
    //         console.log("error", err);
    //     }
    // }
}

module.exports = HashTagRepository;