const {Schema, model, Types} = require('mongoose');
const moment = require('moment');
const commentController = require('../controllers/comment-controller');


const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy : {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('mmm dd,yyyy [at] hh:mm a')
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings:[],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]

},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);
// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
  });


//create using the preceading schema
const Pizza = model('Pizza', PizzaSchema);

//export model
module.exports = Pizza;