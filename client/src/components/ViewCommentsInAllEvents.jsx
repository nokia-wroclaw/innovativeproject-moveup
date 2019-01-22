import React, { Component } from 'react'
import {getCommentsWithVerification} from "./CommentFunctions";
import {withStyles} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        getCommentsWithVerification(com)
            .then(comments => this.setState({comments: comments}))
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
                                <Paper className={classes.root} elevation={1}>
                                    <Typography variant="h6" component="h3">
                                        Comment
                                    </Typography>
                                    <Typography component="p">
                                        {comment.text}
                                    </Typography>
                                </Paper>
                            </li>
                        )}
                    )}
                </ul>
            </div>
        )
    }

}

export default withStyles(styles)(Comments);
