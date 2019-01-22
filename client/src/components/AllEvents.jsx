import React, { Component } from 'react'
import ViewCommentsInAllEvents from './ViewCommentsInAllEvents'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./AllEvents.css"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import blue from '@material-ui/core/colors/blue';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

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
    card: {
        width: 600,
        marginTop: theme.spacing.unit,
        backgroundColor: '#e6f2ff',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: blue[500],
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

<div>
                     <Grid container direction="column" justify="center" alignItems="center" spacing={0}>
                         <Grid item>
                             <h1>Events</h1>
                         </Grid>
                <Grid item>
              <Card className={classes.card}>
             <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
               <Grid item>
                <TextField
                    name="Search name event"
                       placeholder="Search by name event"
                           variant={"outlined"}
                       type="text"
                       value={this.state.searchNameEvent}
                       onChange={this.updateSearchNameEvent.bind(this)} />
               </Grid>
                 <Grid item>
                <TextField
                    name="Search start"
                           variant={"outlined"}
                       placeholder="Search by where events will start"
                       type="text"
                       value={this.state.searchStartPoint}
                       onChange={this.updateSearchStartPoint.bind(this)} />
                 </Grid>
                 <Grid item>
                <TextField
                    name="Search type of sport"
                       placeholder="Search by type of sports"
                       type="text"
                           variant={"outlined"}
                       value={this.state.searchTypeOfSport}
                       onChange={this.updateSearchTypeOfSport.bind(this)} />
                 </Grid>
             </Grid>
              </Card>
                </Grid>
                     </Grid>
                <ul>
                    {filteredEvents.map(event =>
                        <li key={event.id_event}>
                            <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
                                <Grid item>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                        {event.id_event}
                                    </Avatar>
                                }
                                title={event.type_sport}
                                subheader={"Start date: " + event.date}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {event.name_event}
                                </Typography>
                                <Typography component="p">
                                    Start point: {event.start_point} <br/>
                                    Advanced: {event.advanced} <br/>
                                    Repetition: {event.repetition}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button color="primary"
                                    onClick={() => {this.onSubmit(event.id_event)}}>
                                Comment
                            </Button>
                            </CardActions>
                        <ViewCommentsInAllEvents eventId={event.id_event}/>
                        </Card>
                                </Grid>
                            </Grid>
                        </li>
                    )}
                </ul>
</div>
        )

    }


}
export default withStyles(styles)(AllEvents);
