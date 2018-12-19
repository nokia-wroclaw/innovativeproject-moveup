import React, { Component } from 'react'

 class AllEvents extends Component {
     constructor() {
         super();
         this.state = {
             searchNameEvent: '',
             searchStartPoint: '',
             searchTypeOfSport: '',
             events: []
         }
     }

    componentDidMount(){
        fetch('/events/getAllEvents')
            .then(res => res.json())
            .then(events => this.setState({events}));
    }

     updateSearchNameEvent(event) {
         this.setState({searchNameEvent: event.target.value.substr(0,20)})
     }
     updateSearchStartPoint(event) {
         this.setState({searchStartPoint: event.target.value.substr(0,20)})
     }
     updateSearchTypeOfSport(event) {
         this.setState({searchTypeOfSport: event.target.value.substr(0,20)})
     }


     onSubmit (eventId) {
         localStorage.setItem('userEvent', eventId)
         this.props.history.push(`/addComment`)
     }

    render(){
            let filteredEvents = this.state.events.filter(
                (event) => {
                     if(event.name_event.toLowerCase().indexOf(this.state.searchNameEvent.toLowerCase()) !== -1 && event.start_point.toLowerCase().indexOf(this.state.searchStartPoint.toLowerCase()) !== -1 && event.type_sport.toLowerCase().indexOf(this.state.searchTypeOfSport.toLowerCase()) !== -1)
                     {
                         return event;
                     }
                    return 0;
                }
            )
         return (
            <div >
                <input name="Search name event"
                       type="text"
                       value={this.state.searchNameEvent}
                       onChange={this.updateSearchNameEvent.bind(this)} />
                <h1>Events</h1>
                <div>
                <ul>
                    {filteredEvents.map(event =>
                        <li key={event.id_event}>{event.name_event} | {event.start_point} | {event.type_sport} | {event.date} |||||
                            <button onClick={() => {this.onSubmit(event.id_event)}}>
                                Comment
                            </button></li> //TUTAJ LADNIEJ TRZEBA TO ZROBIC
                    )}
                </ul>
                </div>
                <input name="Search start"
                       type="text"
                       value={this.state.searchStartPoint}
                       onChange={this.updateSearchStartPoint.bind(this)} />

                <input name="Search start"
                       type="text"
                       value={this.state.searchTypeOfSport}
                       onChange={this.updateSearchTypeOfSport.bind(this)} />

            </div>
        )
    }


}
export default AllEvents
