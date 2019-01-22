import React, { Component } from 'react'
import { register } from './UserFunctions'
import './Register.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid/Grid";
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
const genders = [
    {
        value: 'male',
    },
    {
        value: 'female',
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

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class Register extends Component {
    constructor() {
        super()
        this.state = {
            textmask: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            age: '',
            number_phone: '',
            gender: 'male',
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

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.textmask,
            sex: this.state.gender,
            number_phone: this.state.number_phone
        }
        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        const { textmask } = this.state;
        return (
                        <form noValidate onSubmit={this.onSubmit}>
                            <Grid container direction="column" justify="space-between" alignItems="center" spacing={0}>
                                <Grid item >
                            <h1 className="textCenter3">Create your account</h1>
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
                                        <Grid item >
                                <TextField type="email"
                                           variant="outlined"
                                           name="email"
                                           placeholder="Enter Email"
                                           value={this.state.email}
                                           onChange={this.onChange}
                                           label="EMAIL"
                                           margin="normal"
                                />
                                        </Grid>
                                            <Grid item >
                                <TextField type="password"
                                           variant="outlined"
                                           name="password"
                                           placeholder="Enter Password"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                           label="PASSWORD"
                                           margin="normal"
                                />
                                            </Grid>
                                                <Grid item >
                                                    <TextField
                                                        id="filled-select-currency-native"
                                                        select
                                                        label="GENDER"
                                                        className="textField"
                                                        value={this.state.gender}
                                                        onChange={this.handleChange('gender')}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        helperText="xddddddddddddd"
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
                                                    <Grid item >
                                                        <FormControl className={"formControl"}>
                                                            <InputLabel htmlFor="formatted-text-mask-input">Date of your birthday</InputLabel>
                                                            <Input
                                                                value={textmask}
                                                                onChange={this.handleChange('textmask')}
                                                                id="formatted-text-mask-input"
                                                                inputComponent={TextMaskCustom}
                                                            />
                                                        </FormControl>
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
                                                            <Grid item >
                            <Button type="submit" variant="contained" color="primary" >
                                Register
                            </Button>
                                                            </Grid>
                                                        </Grid>
                        </form>

        )
    }
}

export default Register