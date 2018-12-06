import React, { Component } from 'react'
//import { AllEvent } from './EventFunctions'
//import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';

 class AllEvents extends Component {
    state = { events : [] }

    componentDidMount(){
        fetch('/events/getAllEvents')
            .then(res => res.json())
            .then(events => this.setState({events}));
    }

    render(){
        return (
            <div className={"AllEvents"}>
                <h1>Events</h1>
                <ul>
                    {this.state.events.map(event =>
                        <li key={event.id_event}>{event.name_event} | {event.start_point} | {event.type_sport} | {event.date}</li>
                    )}
                </ul>
            </div>
        )
    }


}
export default AllEvents
