const mongooose = require('mongoose');

mongooose.connect("mongodb://localhost:27017/posts")
.then(()=>console.log('connection established'))
.catch(()=>console.log('connection error'))

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:{type:String},
    description:{type:String},
    posted_at:{type:String},
    posted_by:{type:String}
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;