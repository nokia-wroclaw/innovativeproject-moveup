import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getEditProfile, getDataProfile } from './UserFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Profile.css';
import iron from '../images/ironman.jpg';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            age: '',
            sex: '',
            number_phone: ''
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
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            sex: this.state.sex,
            number_phone: this.state.number_phone
        }


        getEditProfile(user).then(res => {
            this.props.history.push(`/profile`)
        })
    }

    componentDidMount () {
        if (localStorage.usertoken) {
            const token = localStorage.usertoken;
            const decoded = jwt_decode(token);
            getDataProfile(decoded).then(res => {
                this.setState({
                    id: decoded.id,
                    first_name: res.first_name,
                    last_name: res.last_name,
                    email: res.email,
                    password: res.password,
                    age: res.age,
                    sex: res.sex,
                    number_phone: res.number_phone
                })
            })
        }else {
            console.log("error:  get into /profile without sign in  ")
            this.props.history.push(`/`)
        }
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="col-sm-8 mx-auto">
                            <h1 className="textCenter">PROFILE</h1>
                        </div>
                        <img src={iron} className="iron" alt="logo" align="left" />
                        <div className="form-group">
                            <TextField type="text"
                                       variant="outlined"
                                       className="textField"
                                       name="first_name"
                                       placeholder="First Name"
                                       value={this.state.first_name}
                                       onChange={this.onChange}
                                       label="FIRST NAME"
                                       margin="normal"
                            />
                        </div>
                        <div className="form-group">
                            <TextField type="text"
                                       variant="outlined"
                                       className="textField"
                                       name="last_name"
                                       placeholder="Last Name"
                                       value={this.state.last_name}
                                       onChange={this.onChange}
                                       label="LAST NAME"
                                       margin="normal"
                            />
                        </div>
                        <div className="form-group">
                            <TextField type="text"
                                       variant="outlined"
                                       className="textField"
                                       name="age"
                                       placeholder="Age"
                                       value={this.state.age}
                                       onChange={this.onChange}
                                       label="AGE"
                                       margin="normal"
                            />
                        </div>
                        <div className="form-group">
                            <TextField type="text"
                                       variant="outlined"
                                       className="textField"
                                       name="sex"
                                       placeholder="Sex"
                                       value={this.state.sex}
                                       onChange={this.onChange}
                                       label="SEX"
                                       margin="normal"
                            />
                        </div>
                        <div className="form-group">
                            <TextField type="text"
                                       variant="outlined"
                                       className="textField"
                                       name="number_phone"
                                       placeholder="Number phone"
                                       value={this.state.number_phone}
                                       onChange={this.onChange}
                                       label="NUMBER PHONE"
                                       margin="normal"
                            />
                        </div>
                        <div className="form-group">
                            <TextField type="text"
                                       variant="outlined"
                                       className="textField"
                                       name="password"
                                       placeholder="password"
                                       value={this.state.password}
                                       onChange={this.onChange}
                                       label="PASSWORD"
                                       margin="normal"
                            />
                        </div>
                        <Button className="button1" type="submit" variant="contained" color="primary" >
                            Edit our profile
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Profile