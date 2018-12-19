import React, { Component } from 'react'
import { getUserEvents,deleteUserEvent} from './EventFunctions'
import jwt_decode from "jwt-decode";
import {getComments} from './CommentFunctions'
class UserEvents extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            comments: []
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        getUserEvents(decoded)
            .then(events => this.setState({events}))
            //.then(this.state.events.map(event => {
             //   getComments(event.id_event)
             //       .then(comments => this.setState([comments]))
             //   console.log(event.id_event)
         //   }))
    }
    onSubmit (eventId) {
        localStorage.setItem('userEvent', eventId)
            this.props.history.push(`/editEvent`)
    }
    onDelete(eventId) {
        deleteUserEvent(eventId)
        this.props.history.push(`/editEvent`)
    }

    render(){
        let filteredEvents = this.state.events;
        //console.log(this.state.comments)
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
                                    <button onClick={() => {this.onDelete(event.id_event)}} >
                                        Delete this event
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