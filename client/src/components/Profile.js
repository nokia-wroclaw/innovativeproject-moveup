import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getEditProfile } from './UserFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from '@material-ui/Card';
import './Profile.css';
import iron from './ironman.jpg';

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
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            //password: decoded.password,
            age: decoded.age,
            sex: decoded.sex,
            number_phone: decoded.number_phone
        })
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