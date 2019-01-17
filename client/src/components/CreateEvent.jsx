import React, { Component } from 'react'
import { registerEvent } from './EventFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import jwt_decode from "jwt-decode";
import { withStyles } from '@material-ui/core/styles';
import "./CreateEvent.css"
import Grid from "@material-ui/core/Grid/Grid";
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
                                <Grid container direction="column"
                                      justify="center" alignItems="center" spacing={8}>
                           <Grid item>
                            <h1 className="width100">Create your event</h1>
                            </Grid>
                                </Grid>
                                <Grid container direction="row"
                                      justify="center" alignItems="center" spacing={24}>
                                    <Grid item>
                            <TextField type="text"
                                           variant="outlined"
                                           name="name_event"
                                           placeholder="Enter name of event"
                                           value={this.state.name_event}
                                           onChange={this.onChange}
                                           label="NAME EVENT"
                                           margin="normal"
                                />
                                    </Grid>
                                    <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="start_point"
                                           placeholder="Enter start point"
                                           value={this.state.start_point}
                                           onChange={this.onChange}
                                           label="START POINT"
                                           margin="normal"
                                />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row"
                                      justify="center" alignItems="center" spacing={24}>
                                    <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="type_sport"
                                           placeholder="Enter type of sport"
                                           value={this.state.type_sport}
                                           onChange={this.onChange}
                                           label="TYPE OF SPORT"
                                           margin="normal"
                                />
                                    </Grid>
                                        <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="date"
                                           placeholder="Enter date"
                                           value={this.state.date}
                                           onChange={this.onChange}
                                           label="DATE"
                                           margin="normal"
                                />
                                        </Grid>
                                </Grid>
                                        <Grid container direction="row"
                                              justify="center" alignItems="center" spacing={24}>
                                            <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="time"
                                           placeholder="Enter time"
                                           value={this.state.time}
                                           onChange={this.onChange}
                                           label="TIME"
                                           margin="normal"
                                />
                                            </Grid>
                                                <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="pref_age"
                                           placeholder="Enter optional age if u must"
                                           value={this.state.pref_age}
                                           onChange={this.onChange}
                                           label="OPTIONAL AGE"
                                           margin="normal"
                                />
                                                </Grid>
                                        </Grid>
                                                <Grid container direction="row"
                                                      justify="center" alignItems="center" spacing={24}>
                                                    <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="pref_sex"
                                           placeholder="Enter optional sex if u must"
                                           value={this.state.pref_sex}
                                           onChange={this.onChange}
                                           label="OPTIONAL SEX"
                                           margin="normal"
                                />
                                                    </Grid>
                                                        <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="advanced"
                                           placeholder="Enter advanced if u must"
                                           value={this.state.advanced}
                                           onChange={this.onChange}
                                           label="ADVANCED"
                                           margin="normal"
                                />
                                                        </Grid>
                                                </Grid>
                                                        <Grid container direction="row"
                                                              justify="center" alignItems="center" spacing={24}>
                                                            <Grid item>
                                <TextField type="text"
                                           variant="outlined"
                                           name="repetition"
                                           placeholder="Enter repetition if this event is repeatable"
                                           value={this.state.repetition}
                                           onChange={this.onChange}
                                           label="REPETITION"
                                           margin="normal"
                                />
                                                            </Grid>
<Grid item>
                                <TextField type="number_phone"
                                           variant="outlined"
                                           name="phone_organizer"
                                           placeholder="Enter  number phone to organizer if u have"
                                           value={this.state.phone_organizer}
                                           onChange={this.onChange}
                                           label="NUMBER PHONE TO ORGANIZER"
                                           margin="normal"
                                />
                                                            </Grid>
                                                        </Grid>
                                                                <Grid container direction="column"
                                                                      justify="space-around" alignItems="center" spacing={24}>
                                                                    <Grid item>
                            <Button type="submit" variant="contained" color="primary" >
                                Create new event
                            </Button>
                                                                    </Grid>
                                                                </Grid>
                        </form>
        )
    }
}

export default withStyles(styles)(CreateEvent);