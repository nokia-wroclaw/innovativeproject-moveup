import React, { Component } from 'react'
import { registerEvent } from './EventFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import jwt_decode from "jwt-decode";
import { withStyles } from '@material-ui/core/styles';
import "./CreateEvent.css"
import Grid from "@material-ui/core/Grid/Grid";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import 'date-fns';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    grid: {
        width: '60%',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
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
const ranges = [
    {
        value: '9-14',
        label: '9 to 14',
    },
    {
        value: '12-16',
        label: '12 to 16',
    },
    {
        value: '15-19',
        label: '15 to 19',
    },
    {
        value: '17-22',
        label: '17 to 22',
    },
    {
        value: '18+',
        label: '18+',
    },
    {
        value: '16+',
        label: '16+',
    },
    {
        value: 'None',
        label: 'None',
    },
];

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

class CreateEvent extends Component {
    constructor() {
        super()
        this.state = {
            gender: 'meaningless',
            date: new Date(),
            id_user: '',
            name_event: '',
            start_point: '',
            type_sport: 'Football',
            time: '',
            pref_age: 'None',
            advanced: '',
            repetitionDay: '',
            repetition: '',
            phone_organizer: '',
            open: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleDateChange = date => {
        this.setState({ date: date });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
            date: this.state.date.getFullYear() + '-' + this.state.date.getMonth()+1 + '-' + this.state.date.getDate(),
            time: this.state.date.getHours() + ':' + this.state.date.getMinutes() + ':00',
            pref_age: this.state.pref_age,
            pref_sex:this.state.gender ,
            advanced: this.state.advanced,
            repetition: this.state.repetitionDay + ' ' +this.state.repetition,
            phone_organizer: this.state.phone_organizer
        }

        registerEvent(event).then(res => {
            this.props.history.push(`/`)
        })
    }
    render () {
        const { classes } = this.props;
        console.log(this.state.date.getFullYear())
        console.log(this.state.date.getMonth()+1)
        console.log(this.state.date.getDate());
        console.log(this.state.date.getHours());
        console.log(this.state.date.getMinutes())
        console.log(this.state.date.getSeconds())
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
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container className={classes.grid} justify="space-around">
                                <DatePicker
                                    margin="normal"
                                    label="Date picker"
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                />
                                <TimePicker
                                    margin="normal"
                                    label="Time picker"
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid container direction="row"
                      justify="center" alignItems="center" spacing={24}>
                    <Grid item>
                        <TextField
                            select
                            label="Pref Age"
                            className={classNames(classes.margin, classes.textField)}
                            value={this.state.pref_age}
                            onChange={this.handleChange('pref_age')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Age</InputAdornment>,
                            }}
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
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
                        <div>
                            <Button onClick={this.handleClickOpen}>Open select dialog</Button>
                            <Dialog
                                disableBackdropClick
                                disableEscapeKeyDown
                                open={this.state.open}
                                onClose={this.handleClose}
                            >
                                <DialogTitle>Fill the form</DialogTitle>
                                <DialogContent>
                                    <form className={classes.container}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Frequency</InputLabel>
                                            <Select
                                                native
                                                value={this.state.repetitionDay}
                                                onChange={this.handleChange('repetitionDay')}
                                                input={<Input id="age-native-simple" />}
                                            >
                                                <option value="" />
                                                <option value={1}>Once</option>
                                                <option value={2}>Twice</option>
                                                <option value={3}>Three</option>
                                                <option value={4}>Four</option>
                                                <option value={5}>Five</option>
                                                <option value={6}>Six</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-simple">Repetition</InputLabel>
                                            <Select
                                                value={this.state.repetition}
                                                onChange={this.handleChange('repetition')}
                                                input={<Input id="age-simple" />}
                                            >
                                                <MenuItem value={"Week"}>Week</MenuItem>
                                                <MenuItem value={"Month"}>Month</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleClose} color="primary">
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
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
CreateEvent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateEvent);