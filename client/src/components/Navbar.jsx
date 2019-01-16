import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import './Navbar.css';
import {loginRegLink} from './LoginRegLink'
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

    handlePageChangeToYourEvents(e) {
        e.preventDefault()
        window.location = "/userEvents";
    }

    handlePageChangeToHome(e) {
        e.preventDefault()
        window.location = "/";
    }

    handlePageChangeToProfile(e) {
        e.preventDefault()
        window.location = "/profile";
    }

    handlePageChangeToYourEvents(e) {
        e.preventDefault()
        window.location = "/userEvents";
    }

    handlePageChangeToYourEvents(e) {
        e.preventDefault()
        window.location = "/userEvents";
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
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={16}>
                    <Grid item >
                        <Link to="/" >
                            <HomeIcon color="action" className="itemNav" />
                        </Link>
                    </Grid>
                    <Grid item >
                        <Link to="/profile" className="nav-link">
                            <Button variant="outlined" color="default"> User </Button>
                        </Link>
                    </Grid>
                    <Grid item >
                            <Button variant="outlined" color="default"
                                    onClick={this.logOut.bind(this)}>
                                    Logout
                                    </Button>
                    </Grid>
                    <Grid item >
                        <Link to="/createEvent" className="itemNav">
                            <Button variant="outlined" color="default">Create event</Button>
                        </Link>
                    </Grid>
                    <Grid item >
                        <Link to="/allEvents" className="itemNav">
                            <Button variant="outlined" color="default">all events</Button>
                        </Link>
                    </Grid>
                    <Grid item >
                            <Button variant="outlined" color="default"
                                    onClick={this.handlePageChangeToYourEvents.bind(this)}>
                                Your Events
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