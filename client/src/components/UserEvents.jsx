import React, { Component } from 'react'
import { getUserEvents} from './EventFunctions'
import jwt_decode from "jwt-decode";

class UserEvents extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        getUserEvents(decoded)
            .then(events => this.setState({events}))
    }


    onSubmit (eventId) {
        localStorage.setItem('userEvent', eventId)
            this.props.history.push(`/editEvent`)
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
                                <li key={event.id_event}>{event.name_event} | {event.start_point} | {event.type_sport} | {event.date}
                                        <button onClick={() => {this.onSubmit(event.id_event)}} >
                                        Edit
                                    </button>
                                </li>
                                )
                        }
                        )}
                    </ul>

            </div>

        )
    }


}
export default UserEvents