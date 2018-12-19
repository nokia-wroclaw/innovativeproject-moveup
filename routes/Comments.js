const express = require("express");
const comments = express.Router();
const cors = require('cors');

const Comment = require("../models/Comment");
comments.use(cors())

comments.post('/addComment', (req, res) => {
    const commentData = {
        id_user: req.body.id_user,
        id_event: req.body.id_event,
        text: req.body.text
    };
    Comment.create(commentData)
    res.json({ status: commentData.text + ' created' })
});
comments.put('/getComments', (req, res) => {
    Comment.findAll({
        where: {
            id_event: req.body.id_event
        }
    }).then(comment => {
        if (comment) {
            res.send(comment)
        } else {
            res.status(403).json({ error: "comments not exist" })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});


module.exports = comments;