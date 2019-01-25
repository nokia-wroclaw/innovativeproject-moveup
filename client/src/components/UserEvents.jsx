import React, {Component} from 'react'
import {getUserEvents, deleteUserEvent} from './EventFunctions'
import jwt_decode from "jwt-decode"
import Comments from './Comments'
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import CardHeader from '@material-ui/core/CardHeader';
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
    card: {
        width: 600,
        marginTop: theme.spacing.unit,
        backgroundColor: '#f4fcff',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
});
class UserEvents extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            comments: []
        }

        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        getUserEvents(decoded)
            .then(events => this.setState({events}))
    }

    onSubmit(eventId) {
        localStorage.setItem('userEvent', eventId)
        this.props.history.push(`/editEvent`)
    }

    onDelete(eventId) {
        deleteUserEvent(eventId)
        window.location.reload();
    }

    render() {
        const { classes } = this.props;
        let filteredEvents = this.state.events;
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center" spacing={32}>
                    <Grid item>
                <Typography variant="h4" component="h4">Your events</Typography>
                    </Grid>
                    <Grid item>
                        <ul>
                    {filteredEvents.map(event => {
                            return (
                                <li key={event.id_event}>
                                    <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
                                        <Grid item>
                                            <Card className={classes.card}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="Recipe" className={classes.avatar}>
                                                            {event.id_event}
                                                        </Avatar>
                                                    }
                                                    title={event.type_sport}
                                                    subheader={"Start date: " + event.date}

                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {event.name_event}
                                                    </Typography>
                                                    <Typography component="p">
                                                        Start point: {event.start_point} <br/>
                                                        Advanced: {event.advanced} <br/>
                                                        Repetition: {event.repetition}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                    <Button color="primary" onClick={() => {
                                        this.onSubmit(event.id_event)
                                    }}>
                                        Edit
                                    </Button>
                                    <Button color="secondary" onClick={() => {
                                        this.onDelete(event.id_event)
                                    }}>
                                        Delete this event
                                    </Button>
                                                </CardActions>
                                            <Comments eventId={event.id_event}/>
                                            </Card>
                                        </Grid>
                                        </Grid>
                                </li>
                            )}

                    )}
                </ul>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(UserEvents);