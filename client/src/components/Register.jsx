import React, { Component } from 'react'
import { register } from './UserFunctions'
import './Register.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid/Grid";
import AppBar from "@material-ui/core/AppBar/AppBar";


class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            age: '',
            sex: '',
            number_phone: '',
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            sex: this.state.sex,
            number_phone: this.state.number_phone
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
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
                                <TextField type="age"
                                           variant="outlined"
                                           name="age"
                                           placeholder="Enter your age"
                                           value={this.state.age}
                                           onChange={this.onChange}
                                           label="AGE"
                                           margin="normal"
                                />
                                                </Grid>
                                                    <Grid item >
                                <TextField type="sex"
                                           variant="outlined"
                                           name="sex"
                                           placeholder="Enter your sex"
                                           value={this.state.sex}
                                           onChange={this.onChange}
                                           label="SEX"
                                           margin="normal"
                                />
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