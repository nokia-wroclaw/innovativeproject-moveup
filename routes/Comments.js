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
            id_event: req.body.id_event,
            verification: 1 //enum toConfirm has number 1 in table enum
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
comments.put('/verificationComment',(req,res) => {
    Comment.findOne({
        where: {
            id_comment: req.body.id_comment
        }
    }).then(comment => {
        if (comment) {
            Comment.update(
                {
                    verification: req.body.verification
                },
                { where: {id_comment: req.body.id_comment}}
            )
            res.json({ status: comment.id_comment + ' comment edited' })
        } else {
            res.status(403).json({ error: "comment not exist" })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});

comments.put('/getCommentsWithVerification', (req, res) => {
    Comment.findAll({
        where: {
            id_event: req.body.id_event,
            verification: 2 //enum agree has number 2 in table enum
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