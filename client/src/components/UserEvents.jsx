import React, {Component} from 'react'
import {getUserEvents, deleteUserEvent} from './EventFunctions'
import jwt_decode from "jwt-decode"
import Comments from './Comments'
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
        this.props.history.push(`/editEvent`)
    }

    render() {
        const { classes } = this.props;
        let filteredEvents = this.state.events;
        return (
            <div>
                <h1>Your events</h1>
                <ul>
                    {filteredEvents.map(event => {
                            return (
                                <li key={event.id_event}>
                                    <TextField type="text"
                                               variant="outlined"
                                               className={classes.textField}
                                               label={"NAME EVENT"}
                                               value={event.name_event}
                                               margin="normal"
                                               InputProps={{
                                                   readOnly: true,
                                               }}
                                    />
                                    <TextField type="text"
                                               variant="outlined"
                                               className={classes.textField}
                                               label={"START POINT"}
                                               value={event.start_point}
                                               margin="normal"
                                               InputProps={{
                                                   readOnly: true,
                                               }}
                                    />
                                    <TextField type="text"
                                               variant="outlined"
                                               className={classes.textField}
                                               label={"TYPE OF SPORT"}
                                               value={event.type_sport}
                                               margin="normal"
                                               InputProps={{
                                                   readOnly: true,
                                               }}
                                    />
                                    <TextField type="text"
                                               variant="outlined"
                                               className={classes.textField}
                                               label={"START DATE"}
                                               value={event.date}
                                               margin="normal"
                                               InputProps={{
                                                   readOnly: true,
                                               }}
                                    />
                                    <Button variant="contained" onClick={() => {
                                        this.onSubmit(event.id_event)
                                    }}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" onClick={() => {
                                        this.onDelete(event.id_event)
                                    }}>
                                        Delete this event
                                    </Button>
                                    <Comments eventId={event.id_event}/>
                                </li>
                            )}
                    )}
                </ul>
            </div>
        )
    }
}
export default withStyles(styles)(UserEvents);