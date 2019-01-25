import React, { Component } from 'react'
import { login } from './UserFunctions'
import './Login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from "@material-ui/core/Typography/Typography";


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
            else
            {
                alert("Bad login or password. Try again.");
            }
        })
    }

    render () {
        return (

                        <form noValidate onSubmit={this.onSubmit}>
                                <Grid container direction="column" justify="center" alignItems="center" spacing={40}>
                                <Grid item>
                                    <Typography variant="h4" component="h4">Please sign in</Typography>
                                </Grid>
                                <Grid item>
                                <TextField type="email"
                                           name="email"
                                           placeholder="Enter Email"
                                           value={this.state.email}
                                           onChange={this.onChange}
                                           label="Email"
                                           margin="normal"
                                />
                                </Grid>
                                    <Grid item>
                                        <FormControl className={"password"}>
                                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                            <Input
                                                id="adornment-password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                value={this.state.password}
                                                onChange={this.handleChange('password')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="Toggle password visibility"
                                                            onClick={this.handleClickShowPassword}
                                                        >
                                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                        <Grid item>
                            <Button type="submit" variant="contained" color="primary" >
                                Sign in
                            </Button>
                                        </Grid>
                            </Grid>
                        </form>
        )
    }
}

export default Login