import React, { Component } from 'react'
import { register } from './UserFunctions'
import './Register.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import {DatePicker, MuiPickersUtilsProvider} from "material-ui-pickers";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { FormErrors } from './FormErrors';
const genders = [
    {
        value: 'male',
    },
    {
        value: 'female',
    },
];

class Register extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            age: '',
            number_phone: '',
            gender: 'male',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    handleDateChange = date => {
        this.setState({ date: date });

    };

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.date.getFullYear() + '-' + (this.state.date.getMonth()+1) + '-' + this.state.date.getDate(),
            sex: this.state.gender,
            number_phone: this.state.number_phone
        }
        register(user).then(res => {
            if(res)
            {
                alert("u crated account")
                this.props.history.push(`/login`)
            }
            else
            {
                alert("Taki email juz istnieje")
            }
        })
    }

    render () {
        return (
                        <form noValidate onSubmit={this.onSubmit}>
                            <Grid container direction="column" justify="space-between" alignItems="center" spacing={8}>
                                <Grid item >
                                    <Typography variant="h4" component="h4">Create your account</Typography>
                                </Grid>

                                <Grid item>
                                    <div className="panel panel-default">
                                        <FormErrors formErrors={this.state.formErrors} />
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                        <TextField
                                            type="email"
                                            variant="outlined"
                                            required className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            label="EMAIL"
                                            margin="normal"
                                            value={this.state.email}
                                            onChange={this.handleUserInput}  />
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                        <TextField
                                            type="password"
                                            variant="outlined"
                                            className="form-control"
                                            name="password"
                                            label="PASSWORD"
                                            margin="normal"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleUserInput}  />
                                    </div>
                                </Grid>

                                <Grid item >
                                <TextField type="text"
                                           variant="outlined"
                                           name="first_name"
                                           placeholder="Enter First Name"
                                           value={this.state.first_name}
                                           onChange={this.onChange}
                                           label="FIRST NAME"
                                           margin="normal"
                                />
                                </Grid>
                                    <Grid item >
                                <TextField type="text"
                                           variant="outlined"
                                           name="last_name"
                                           placeholder="Enter Last Name"
                                           value={this.state.last_name}
                                           onChange={this.onChange}
                                           label="LAST NAME"
                                           margin="normal"
                                />
                                    </Grid>
                                <Grid item>
                                    <TextField
                                        select
                                        label="GENDER"
                                        value={this.state.gender}
                                        onChange={this.handleChange('gender')}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                    >
                                        {genders.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.value}
                                                </option>
                                        ))}
                                        </TextField>
                                </Grid>
                                <Grid item >
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container direction="row" justify="enter" alignItems="center" spacing={24}>
                                            <Grid item>
                                                <DatePicker
                                                    margin="normal"
                                                    label="Date picker"
                                                    value={this.state.date}
                                                    onChange={this.handleDateChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item >
                                <TextField type="number_phone"
                                           variant="outlined"
                                           name="number_phone"
                                           placeholder="Enter your number of phone"
                                           value={this.state.number_phone}
                                           onChange={this.onChange}
                                           label="NUMBER PHONE"
                                           margin="normal"
                                />
                                </Grid>
                                <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                                <Grid item >
                                    <Button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</Button>
                                </Grid>
                            </Grid>
                        </form>

        )
    }
}

export default Register