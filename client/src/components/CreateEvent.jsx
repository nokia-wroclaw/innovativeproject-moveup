import React, { Component } from 'react'
import { registerEvent } from './EventFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import jwt_decode from "jwt-decode";
import { withStyles } from '@material-ui/core/styles';
import "./CreateEvent.css"
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

class CreateEvent extends Component {
    constructor() {
        super()
        this.state = {
            id_user: '',
            name_event: '',
            start_point: '',
            type_sport: '',
            date: '',
            time: '',
            pref_age: '',
            pref_sex: '',
            advanced: '',
            repetition: '',
            phone_organizer: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const event = {
            id_user: decoded.id,
            name_event: this.state.name_event,
            start_point: this.state.start_point,
            type_sport: this.state.type_sport,
            date: this.state.date,
            time: this.state.time,
            pref_age: this.state.pref_age,
            pref_sex:this.state.pref_sex ,
            advanced: this.state.advanced,
            repetition: this.state.repetition,
            phone_organizer: this.state.phone_organizer
        }

        registerEvent(event).then(res => {
            this.props.history.push(`/`)
        })
    }
    render () {
        const { classes } = this.props;
        return (
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit}>
                            <h1 className="width100">Create your account</h1>
                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="name_event"
                                           placeholder="Enter name of event"
                                           value={this.state.name_event}
                                           onChange={this.onChange}
                                           label="NAME EVENT"
                                           margin="normal"
                                />


                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="start_point"
                                           placeholder="Enter start point"
                                           value={this.state.start_point}
                                           onChange={this.onChange}
                                           label="START_POINT"
                                           margin="normal"
                                />


                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="type_sport"
                                           placeholder="Enter type of sport"
                                           value={this.state.type_sport}
                                           onChange={this.onChange}
                                           label="TYPE OF SPORT"
                                           margin="normal"
                                />


                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="date"
                                           placeholder="Enter date"
                                           value={this.state.date}
                                           onChange={this.onChange}
                                           label="DATE"
                                           margin="normal"
                                />

                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="time"
                                           placeholder="Enter time"
                                           value={this.state.time}
                                           onChange={this.onChange}
                                           label="TIME"
                                           margin="normal"
                                />

                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="pref_age"
                                           placeholder="Enter optional age if u must"
                                           value={this.state.pref_age}
                                           onChange={this.onChange}
                                           label="OPTIONAL AGE"
                                           margin="normal"
                                />

                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="pref_sex"
                                           placeholder="Enter optional sex if u must"
                                           value={this.state.pref_sex}
                                           onChange={this.onChange}
                                           label="OPTIONAL SEX"
                                           margin="normal"
                                />

                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="advanced"
                                           placeholder="Enter advanced if u must"
                                           value={this.state.advanced}
                                           onChange={this.onChange}
                                           label="ADVANCED"
                                           margin="normal"
                                />

                                <TextField type="text"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="repetition"
                                           placeholder="Enter repetition if this event is repeatable"
                                           value={this.state.repetition}
                                           onChange={this.onChange}
                                           label="REPETITION"
                                           margin="normal"
                                />

                                <TextField type="number_phone"
                                           variant="outlined"
                                           className={classes.textField}
                                           name="phone_organizer"
                                           placeholder="Enter  number phone to organizer if u have"
                                           value={this.state.phone_organizer}
                                           onChange={this.onChange}
                                           label="NUMBER PHONE TO ORGANIZER"
                                           margin="normal"
                                />

                            <Button className="width100" type="submit" variant="contained" color="primary" >
                                Create new event
                            </Button>
                        </form>
        )
    }
}

export default withStyles(styles)(CreateEvent);