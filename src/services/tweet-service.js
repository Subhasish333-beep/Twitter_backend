const {TweetRepository} = require('../repository')
//start from 19 mins

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
      const content = data.content; 
      const tags = content.match(/#[a-z0-9_]+/g);
      tags = tags?.map(tag => tag.substring(1))
      const tweet = await this.tweetRepository.create(data)
      return tweet;
    }
}

module.exports = TweetService;