import React, { Component } from 'react'
import ViewCommentsInAllEvents from './ViewCommentsInAllEvents'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./AllEvents.css"
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});
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
        const { classes } = this.props;
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
             <Grid container direction="row" justify="space-between" alignItems="center" spacing={0}>
               <Grid item>
                <TextField
                    name="Search name event"
                       className="inputSearch"
                       placeholder="Search by name event"
                           variant={"outlined"}
                       type="text"
                       value={this.state.searchNameEvent}
                       onChange={this.updateSearchNameEvent.bind(this)} />
               </Grid>
                 <Grid item>
                <TextField
                    name="Search start"
                       className="inputSearch"
                           variant={"outlined"}
                       placeholder="Search by where events will start"
                       type="text"
                       value={this.state.searchStartPoint}
                       onChange={this.updateSearchStartPoint.bind(this)} />
                 </Grid>
                 <Grid item>
                <TextField
                    name="Search type of sport"
                       className="inputSearch"
                       placeholder="Search by type of sports"
                       type="text"
                           variant={"outlined"}
                       value={this.state.searchTypeOfSport}
                       onChange={this.updateSearchTypeOfSport.bind(this)} />
                 </Grid>

                 <Grid container direction="row" justify="space-between" alignItems="center" spacing={0}>
                <h1>Events</h1>
                 </Grid>
                 <Grid container direction="row" justify="space-between" alignItems="center" spacing={0}>
                <ul>
                    {filteredEvents.map(event =>
                        <li key={event.id_event}>
                            <TextField type="text"
                                       variant="outlined"
                                       className={classes.textField}
                                       label={"NAME EVENT"}
                                       value={event.name_event}
                                       margin="normal"
                                       InputProps={{
                                           readOnly: true,
                                       }}
                            />
                            <TextField type="text"
                                       variant="outlined"
                                       className={classes.textField}
                                       label={"START POINT"}
                                       value={event.start_point}
                                       margin="normal"
                                       InputProps={{
                                           readOnly: true,
                                       }}
                            />
                            <TextField type="text"
                                       variant="outlined"
                                       className={classes.textField}
                                       label={"TYPE OF SPORT"}
                                       value={event.type_sport}
                                       margin="normal"
                                       InputProps={{
                                           readOnly: true,
                                       }}
                            />
                            <TextField type="text"
                                       variant="outlined"
                                       className={classes.textField}
                                       label={"START DATE"}
                                       value={event.date}
                                       margin="normal"
                                       InputProps={{
                                           readOnly: true,
                                       }}
                            />


                            <Button color="secondary"
                                    onClick={() => {this.onSubmit(event.id_event)}}>
                                Comment
                            </Button>
                        <ViewCommentsInAllEvents eventId={event.id_event}/>
                        </li>
                    )}
                </ul>
                 </Grid>

             </Grid>


        )
    }


}
export default withStyles(styles)(AllEvents);
