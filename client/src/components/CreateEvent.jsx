import React, { Component } from 'react'
import { registerEvent } from './EventFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import jwt_decode from "jwt-decode";
import { withStyles } from '@material-ui/core/styles';
import "./CreateEvent.css"
import Grid from "@material-ui/core/Grid/Grid";
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';




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

const genders = [
    {
        value: 'male',
    },
    {
        value: 'female',
    },
    {
        value: 'meaningless',
    },
];

const typeOfSports = [
    {
        value: 'Football',
    },
    {
        value: 'Volleyball',
    },
    {
        value: 'Basketball',
    },
    {
        value: 'Swimming',
    },
    {
        value: 'Cycling',
    },
    {
        value: 'Tennis',
    },
    {
        value: 'Running',
    },
    {
        value: 'Skis',
    },
    {
        value: 'Paintball',
    },
    {
        value: 'Board games',
    },
    {
        value: 'Mountain climbing',
    },
    {
        value: 'Rope climbing',
    },
    {
        value: 'Hockey',
    },
    {
        value: 'Skate',
    },

];

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[1-9]/, /\d/, /\d/, /\d/,'-',/\d/,/\d/,'-',/\d/,/\d/,]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}
function TextMaskCustomTime(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[1-9]/, /\d/,':',/\d/,/\d/,]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}
TextMaskCustomTime.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class CreateEvent extends Component {
    constructor() {
        super()
        this.state = {
            gender: 'meaningless',
            textmask: '',
            id_user: '',
            name_event: '',
            start_point: '',
            type_sport: 'Football',
            time: '',
            pref_age: '',
            advanced: '',
            repetition: '',
            phone_organizer: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSubmit (e) {
        e.preventDefault()

        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const event = {
            id_user: decoded.id,
            name_event: this.state.name_event,
            start_point: this.state.start_point,
            type_sport: this.state.type_sport,
            date: this.state.textmask,
            time: this.state.time,
            pref_age: this.state.pref_age,
            pref_sex:this.state.gender ,
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
        const { textmask } = this.state;
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
                                        <TextField
                                            id="filled-select-currency-native"
                                            select
                                            label="Type sport"
                                            className="textField"
                                            value={this.state.type_sport}
                                            onChange={this.handleChange('type_sport')}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            helperText="xddddddddddddddd"
                                            margin="normal"
                                            variant="filled"
                                        >
                                            {typeOfSports.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.value}
                                                </option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                        <Grid item>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="formatted-text-mask-input">Date</InputLabel>
                                                <Input
                                                    value={textmask}
                                                    onChange={this.handleChange('textmask')}
                                                    id="formatted-text-mask-input"
                                                    inputComponent={TextMaskCustom}
                                                />
                                            </FormControl>
                                        </Grid>
                                </Grid>
                                        <Grid container direction="row"
                                              justify="center" alignItems="center" spacing={24}>
                                            <Grid item>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="formatted-text-mask-input">Time</InputLabel>
                                                    <Input
                                                        value={this.state.time}
                                                        onChange={this.handleChange('time')}
                                                        id="formatted-text-mask-input"
                                                        inputComponent={TextMaskCustomTime}
                                                    />
                                                </FormControl>
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
                                                        <TextField
                                                            id="filled-select-currency-native"
                                                            select
                                                            label="preff gender"
                                                            className="textField"
                                                            value={this.state.gender}
                                                            onChange={this.handleChange('gender')}
                                                            SelectProps={{
                                                                native: true,
                                                            }}
                                                            helperText="xddddddddddddddd"
                                                            margin="normal"
                                                            variant="filled"
                                                        >
                                                            {genders.map(option => (
                                                                <option key={option.value} value={option.value}>
                                                                    {option.value}
                                                                </option>
                                                            ))}
                                                        </TextField>
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