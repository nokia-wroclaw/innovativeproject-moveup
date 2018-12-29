import React, { Component } from 'react'
import {getCommentsWithVerification} from "./CommentFunctions";


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
        getCommentsWithVerification(com)
            .then(comments => this.setState({comments: comments}))
    }
    render()
    {
        return (
            <div>
                <ul>
                    {this.state.comments.map(comment => {
                        return (
                            <li key={comment.id_comment}>{comment.text} | {comment.id_event}
                            </li>
                        )}
                    )}
                </ul>
            </div>
        )
    }

}