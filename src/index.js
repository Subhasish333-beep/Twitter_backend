const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');


const app = express();

app.listen(3000, async() => {
    console.log("server started at 3000")
    await connect();
    console.log("mongo connected");
    // create tweet
    // const tweet = await Tweet.create({
    //     content: 'First tweet',
    //     userEmail: 'a@bc.com'
    // })

    // get all tweets
    // const tweet = await Tweet.find();

    // get a particular tweet and update
    // const tweet = await Tweet.findById('640ebf4143f7db107c6225cf')
    // tweet.userEmail = "subha@yopmail.com"
    // await tweet.save();
    // console.log(tweet);

    const tweetRepo = new TweetRepository();
    // tweetRepo.create({
    //     content: "Second Tweet",
    //     userEmail: "b@c.com"
    // })
    // const tweet = await tweetRepo.update('64115d3a0cc3a0a9dd8e003b', {
    //     content: 'New update'
    // })

    // const tweet = await tweetRepo.create({content: 'Tweet with comments'})
    // console.log(tweet);
    // const comment = await Comment.create({content: 'new comment'})
    // tweet.comments.push(comment);
    // tweet.save()

    // const tweet = await tweetRepo.getWithComments('64118441163d335f61b4971e');

    const tweet = await tweetRepo.getAll(0,5);
    console.log(tweet[0].contentWithhEmail);
})
