import React, { Component } from 'react'
import { login } from './UserFunctions'
import './Login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid/Grid";
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

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
        })
    }

    render () {
        return (

                        <form noValidate onSubmit={this.onSubmit}>
                            <Grid container direction="column" justify="space-around" alignItems="center" spacing={8}>
                                <Grid item>
                            <h1 className="textCenter2">Please sign in</h1>
                                </Grid>
                                <Grid item>
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
                                    <Grid item>
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