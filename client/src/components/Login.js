import React, { Component } from 'react'
import { login } from './UserFunctions'
import './Login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="textCenter2">Please sign in</h1>
                            <div className="form-group">
                                <TextField type="email"
                                         variant="outlined"
                                        className="textField2"
                                       name="email"
                                       placeholder="Enter Email"
                                       value={this.state.email}
                                       onChange={this.onChange}
                                        label="EMAIL"
                                        margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="password"
                                        variant="outlined"
                                        className="textField2"
                                       name="password"
                                       placeholder="Enter Password"
                                       value={this.state.password}
                                       onChange={this.onChange}
                                        label="PASSWORD"
                                        margin="normal"
                                />
                            </div>
                                <Button className="button2" type="submit" variant="contained" color="primary" >
                            Sign in
                                </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login