import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import CreateEvent from './components/CreateEvent'
import AllEvents from './components/AllEvents'
import UserEvents from './components/UserEvents'
import EditEvent from './components/EditEvent'
import Event from './components/Event'

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/createEvent" component={CreateEvent} />
                        <Route exact path="/allEvents" component={AllEvents} />
                        <Route exact path="/events" component={UserEvents} />
                        <Route exact path="/events/:id" render={(props) => <Event {...props} />} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;