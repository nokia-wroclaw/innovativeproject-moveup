import React, { Component } from 'react'
import { register } from './UserFunctions'
import './Register.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="textCenter3">Create your account</h1>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="first_name"
                                           placeholder="Enter First Name"
                                           value={this.state.first_name}
                                           onChange={this.onChange}
                                           label="FIRST NAME"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="last_name"
                                           placeholder="Enter Last Name"
                                           value={this.state.last_name}
                                           onChange={this.onChange}
                                           label="LAST NAME"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="email"
                                           variant="outlined"
                                           className="textField3"
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
                                           className="textField3"
                                           name="password"
                                           placeholder="Enter Password"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                           label="PASSWORD"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="age"
                                           variant="outlined"
                                           className="textField3"
                                           name="age"
                                           placeholder="Enter your age"
                                           value={this.state.age}
                                           onChange={this.onChange}
                                           label="AGE"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="sex"
                                           variant="outlined"
                                           className="textField3"
                                           name="sex"
                                           placeholder="Enter your sex"
                                           value={this.state.sex}
                                           onChange={this.onChange}
                                           label="SEX"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="number_phone"
                                           variant="outlined"
                                           className="textField3"
                                           name="number_phone"
                                           placeholder="Enter your number of phone"
                                           value={this.state.number_phone}
                                           onChange={this.onChange}
                                           label="NUMBER PHONE"
                                           margin="normal"
                                />
                            </div>
                            <Button className="button3" type="submit" variant="contained" color="primary" >
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register