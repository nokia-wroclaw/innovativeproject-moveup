import React, { Component } from 'react'
import {getComments,verificationComment} from "./CommentFunctions";
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Comments extends Component {
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
            const { classes } = this.props;
            return (
                <div>
                    <ul>
                        {this.state.comments.map(comment => {
                            return (
                                <li key={comment.id_comment}>
                                    <TextField
                                        error
                                        type="text"
                                        variant="outlined"
                                        className={classes.textField}
                                        label={"NAME EVENT"}
                                        value={comment.text}
                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        error
                                        type="text"
                                        variant="outlined"
                                        className={classes.textField}
                                        label={"ID EVENT"}
                                        value={comment.id_event}
                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <Button onClick={() => {
                                        this.onSubmit(comment.id_comment,"agree")
                                    }}>
                                        Agree this comment
                                    </Button>
                                    <Button onClick={() => {
                                        this.onSubmit(comment.id_comment,"disAgree")
                                    }}>
                                        disAgree this comment
                                    </Button>
                                </li>
                            )}
                        )}
                    </ul>
                </div>
            )
        }

}

export default withStyles(styles)(Comments);