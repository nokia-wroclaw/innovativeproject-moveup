import React, { Component } from 'react'
import {getComments,verificationComment} from "./CommentFunctions";


export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
        componentDidMount()
        {
            const com = this.props.eventId
            getComments(com)
                .then(comments => this.setState({comments: comments}))
        }
    onSubmit(commentId,answer) {
        const sendComment = {
            id_comment: commentId,
            verification: answer
        }
        verificationComment(sendComment);
        window.location.reload();
    }
        render()
        {
            return (
                <div>
                    <ul>
                        {this.state.comments.map(comment => {
                            return (
                                <li key={comment.id_comment}>{comment.text} | {comment.id_event}
                                    <button onClick={() => {
                                        this.onSubmit(comment.id_comment,"agree")
                                    }}>
                                        Agree this comment
                                    </button>
                                    <button onClick={() => {
                                        this.onSubmit(comment.id_comment,"disAgree")
                                    }}>
                                        disAgree this comment
                                    </button>
                                </li>
                            )}
                        )}
                    </ul>
                </div>
            )
        }

}