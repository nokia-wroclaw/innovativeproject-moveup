import React, { Component } from 'react'
import {getComments,verificationComment} from "./CommentFunctions";
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
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
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: '#b3cccc',
        margin: theme.spacing.unit,
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
                                    <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
                                        <Paper className={classes.root} elevation={1}>
                                            <Typography variant="h6" component="h3">
                                                {comment.id_event}
                                            </Typography>
                                            <Typography component="p">
                                                {comment.text}
                                            </Typography>
                                    <Button color="primary" onClick={() => {
                                        this.onSubmit(comment.id_comment,"agree")
                                    }}>
                                        Agree this comment
                                    </Button>
                                    <Button color="secondary" onClick={() => {
                                        this.onSubmit(comment.id_comment,"disAgree")
                                    }}>
                                        disAgree this comment
                                    </Button>
                                        </Paper>
                                    </Grid>
                                </li>
                            )}
                        )}
                    </ul>
                </div>
            )
        }

}

export default withStyles(styles)(Comments);