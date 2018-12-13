import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export default class Event extends Component {
    constructor(props) {
        super(props);
        //this.props = props
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit (eventId){
       console.log(eventId)
        this.props.history.push(`/events/${eventId}`)
    }
    render () {
        return (
            <li >{this.props.event.name_event} | {this.props.event.start_point} | {this.props.event.type_sport} | {this.props.event.date}
                <Link to="/events/" >
                    <HomeIcon color="action" className="itemNav"/>
                </Link>


                {/*<button  onClick={() => {this.onSubmit(this.props.event.id_event)}} >*/}
                    {/*Edit*/}
                {/*</button>*/}
            </li>
        )
    }
}