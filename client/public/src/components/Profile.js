import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getEditProfile } from './UserFunctions'

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
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text"
                                   className="form-control"
                                   name="first_name"
                                   placeholder="First Name"
                                   value={this.state.first_name}
                                   onChange={this.onChange}
                            />
                        </div>
                    <div className="form-group">
                        <label htmlFor="first_name">Last Name</label>
                        <input type="text"
                               className="form-control"
                               name="last_name"
                               placeholder="Last Name"
                               value={this.state.last_name}
                               onChange={this.onChange}
                        />
                    </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="text"
                                   className="form-control"
                                   name="age"
                                   placeholder="Age"
                                   value={this.state.age}
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sex">Sex</label>
                            <input type="text"
                                   className="form-control"
                                   name="sex"
                                   placeholder="Sex"
                                   value={this.state.sex}
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number_phone">Number phone</label>
                            <input type="text"
                                   className="form-control"
                                   name="number_phone"
                                   placeholder="Number phone"
                                   value={this.state.number_phone}
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"> new password</label>
                            <input type="text"
                                   className="form-control"
                                   name="password"
                                   placeholder="password"
                                   value={this.state.password}
                                   onChange={this.onChange}
                            />
                        </div>
                        <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                            Edit ur profile
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile