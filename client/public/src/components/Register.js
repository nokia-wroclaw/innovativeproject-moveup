import React, { Component } from 'react'
import { register } from './UserFunctions'

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
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                       className="form-control"
                                       name="first_name"
                                       placeholder="Enter First Name"
                                       value={this.state.first_name}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                       className="form-control"
                                       name="last_name"
                                       placeholder="Enter Last Name"
                                       value={this.state.last_name}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                       className="form-control"
                                       name="email"
                                       placeholder="Enter Email"
                                       value={this.state.email}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                       className="form-control"
                                       name="password"
                                       placeholder="Enter Password"
                                       value={this.state.password}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="age"
                                       className="form-control"
                                       name="age"
                                       placeholder="Enter your age"
                                       value={this.state.age}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sex">Sex</label>
                                <input type="sex"
                                       className="form-control"
                                       name="sex"
                                       placeholder="Enter your sex"
                                       value={this.state.sex}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number_phone">Number phone</label>
                                <input type="number_phone"
                                       className="form-control"
                                       name="number_phone"
                                       placeholder="Enter your number of phone"
                                       value={this.state.number_phone}
                                       onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                                    className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register