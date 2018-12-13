import React, { Component } from 'react'
import { getUserEvents} from './EventFunctions'
import jwt_decode from "jwt-decode";
import Event from './Event'

class UserEvents extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        getUserEvents(decoded)
            .then(events => this.setState({events}))
    }

    render(){
        let filteredEvents = this.state.events
        return (
            <div >
                <h1>Your events</h1>
                    <ul>
                        {filteredEvents.map(event =>
                            {
                            return(
                              <Event event={event} key={event.id_event}/>
                                )
                        }
                        )}
                    </ul>
            </div>
        )
    }
}
export default UserEvents