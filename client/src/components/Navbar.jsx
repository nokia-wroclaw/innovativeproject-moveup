import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import './Navbar.css';
import {loginRegLink} from './LoginRegLink'
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import {userLink} from "./UserLink";




class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        console.log("See ya")
        this.props.history.push(`/`)
    }



        render() {

            function HomeIcon(props) {
                return (
                    <SvgIcon {...props}>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                );
            }
            const userLink = (

                <AppBar position="static" className="AppBarContainer">
                    <ul className="AppBarContainer">
                        <div className="itemNav">
                            <Link to="/" >
                                <HomeIcon color="action" className="itemNav"/>
                            </Link>
                        </div>
                        <div className="itemNav">
                            <Link to="/profile" className="nav-link">
                                User
                            </Link>
                        </div>
                        <div>
                            <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                                Logout
                            </a>
                        </div>
                        <div>
                            <Link to="/createEvent" className="itemNav">
                                Create event
                            </Link>
                        </div>
                    </ul>
                </AppBar>

            )
        return (
            <nav className="AppBarContainer">
                    {localStorage.usertoken ? userLink : loginRegLink}
            </nav>

        )
    }
}
export default withRouter(Navbar)