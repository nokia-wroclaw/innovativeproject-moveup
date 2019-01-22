import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import './Navbar.css';
//import {loginRegLink} from './LoginRegLink'
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';




class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        console.log("See ya")
        this.props.history.push(`/`)
    }

    handlePageChangeToYourEvents() {
        window.location = "/userEvents";
    }

    handlePageChangeToHome() {
        window.location = "/";
    }

    handlePageChangeToProfile() {
        window.location = "/profile";
    }

    handlePageChangeToCreateEvent() {
        window.location = "/createEvent";
    }

    handlePageChangeToAllEvents() {
        window.location = "/allEvents";
    }

    handlePageChangeToLogin() {
        window.location = "/login";
    }

    handlePageChangeToRegister() {
        window.location = "/register";
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
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={0}>
                    <Grid item >
                        <Link to="/allEvents" >
                            <HomeIcon color="action" className="itemNav" />
                        </Link>
                    </Grid>
                    <Grid item >
                           <Button color="default"
                                   onClick={this.handlePageChangeToProfile}>
                               User
                           </Button>
                    </Grid>
                    <Grid item >
                            <Button color="default"
                                    onClick={this.logOut.bind(this)}>
                                    Logout
                                    </Button>
                    </Grid>
                    <Grid item >
                            <Button color="default"
                                    onClick={this.handlePageChangeToCreateEvent}>
                                Create event
                            </Button>
                    </Grid>
                    <Grid item >
                            <Button color="default"
                                    onClick={this.handlePageChangeToAllEvents}>
                                All events
                            </Button>
                    </Grid>
                    <Grid item >
                            <Button color="default"
                                    onClick={this.handlePageChangeToYourEvents}>
                                Your Events
                            </Button>
                    </Grid>
                </Grid>
            </AppBar>)

                const loginRegLink = (
                    <AppBar position="static" className="AppBarContainer">
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={8}>
                            <Grid item >
                                <Link to="/allEvents" >
                                    <HomeIcon color="action" className="itemNav" />
                                </Link>
                            </Grid>
                            <Grid item >
                                <Button color="default"
                                        onClick={this.handlePageChangeToLogin}>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button color="default"
                                        onClick={this.handlePageChangeToRegister}>
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
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