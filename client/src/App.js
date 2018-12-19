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
import AddComment from './components/AddComment'
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
                        <Route exact path="/userEvents" component={UserEvents} />
                        <Route exact path="/editEvent" component={EditEvent}/>
                        <Route exact path="/addComment" component={AddComment}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;