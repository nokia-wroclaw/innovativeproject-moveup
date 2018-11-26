import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        console.log("See ya")
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <AppBar position="static">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
            </AppBar>
        )
        const userLink = (
            <AppBar position="static">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/createEvent" className="nav-link">
                        Create event
                    </Link>
                </li>
            </ul>
            </AppBar>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center"
                     id="navbar1">
                         <AppBar position="static">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
           home
            </Link>
                        </li>
                    </ul>
            </AppBar>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>

        )
    }
}
export default withRouter(Navbar)