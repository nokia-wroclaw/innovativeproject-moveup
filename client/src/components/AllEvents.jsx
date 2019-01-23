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
import blue from '@material-ui/core/colors/blue';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import PropTypes from 'prop-types';




const tutorialSteps = [
    {
        label: 'Football',
        imgPath:
            'https://cdn.pixabay.com/photo/2015/03/30/12/39/soccer-698553_960_720.jpg',
    },
    {
        label: 'Volleyball',
        imgPath:
            'https://cdn.pixabay.com/photo/2014/10/23/16/57/volleyball-499983_960_720.jpg',
    },
    {
        label: 'Basketball',
        imgPath:
            'https://cdn.pixabay.com/photo/2016/11/18/22/10/ball-1837119_960_720.jpg',
    },
    {
        label: 'Swimming',
        imgPath:
            'https://cdn.pixabay.com/photo/2018/02/23/23/21/pool-3176973_960_720.jpg',
    },
    {
        label: 'Cycling',
        imgPath:
            'https://cdn.pixabay.com/photo/2016/02/19/11/23/bicycle-1209682_960_720.jpg',
    },
    {
        label: 'Tennis',
        imgPath:
            'https://cdn.pixabay.com/photo/2016/09/15/15/27/tennis-court-1671852_960_720.jpg',
    },
    {
        label: 'Running',
        imgPath:
            'https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_960_720.jpg',
    },
    {
        label: 'Skis',
        imgPath:
            'https://cdn.pixabay.com/photo/2016/10/31/10/50/skis-1785285_960_720.jpg',
    },
    {
        label: 'Paintball',
        imgPath:
            'https://cdn.pixabay.com/photo/2016/03/25/14/19/paintball-1278898_960_720.jpg',
    },
    {
        label: 'Board games',
        imgPath:
            'https://cdn.pixabay.com/photo/2018/01/04/19/57/competition-3061509_960_720.jpg',
    },
    {
        label: 'Mountain climbing',
        imgPath:
            'https://cdn.pixabay.com/photo/2016/02/19/10/18/summit-1209168_960_720.jpg',
    },
    {
        label: 'Rope climbing',
        imgPath:
            'https://cdn.pixabay.com/photo/2015/10/03/20/52/cliff-970348_960_720.jpg',
    },
    {
        label: 'Hockey',
        imgPath:
            'https://cdn.pixabay.com/photo/2015/12/09/04/36/ice-hockey-1084197_960_720.jpg',
    },
    {
        label: 'Skate',
        imgPath:
            'https://cdn.pixabay.com/photo/2017/01/23/08/52/skates-2001797_960_720.jpg',
    },
];

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
         root: {
            maxWidth: 400,
            flexGrow: 1,
         },
         header: {
             display: 'flex',
             alignItems: 'center',
             height: 50,
             paddingLeft: theme.spacing.unit * 4,
             backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
});


 class AllEvents extends Component {
     constructor() {
         super();
         this.state = {
             searchNameEvent: '',
             searchStartPoint: '',
             searchTypeOfSport: '',
             events: [],
             activeStep: 0
         }
     }


     handleNext = () => {
         this.setState(prevState => ({
             activeStep: prevState.activeStep + 1,
         }));
     };

     handleBack = () => {
         this.setState(prevState => ({
             activeStep: prevState.activeStep - 1,
         }));
     };

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
         this.setState({searchTypeOfSport: event})
     }


     onSubmit (eventId) {
         if(localStorage.getItem('usertoken'))
         {
             localStorage.setItem('userEvent', eventId)
             this.props.history.push(`/addComment`)
         }
         else
         {
             alert("U must be log in")
         }
     }

    render(){
        const { classes, theme } = this.props;
         let filteredEvents = this.state.events.filter(
                (event) => {
                     if(event.name_event.toLowerCase().indexOf(this.state.searchNameEvent.toLowerCase()) !== -1 && event.start_point.toLowerCase().indexOf(this.state.searchStartPoint.toLowerCase()) !== -1 && event.type_sport.toLowerCase().indexOf(this.state.searchTypeOfSport.toLowerCase()) !== -1)
                     {
                         return event;
                     }
                    return 0;
                }
            )
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;
         return (

<div>
                     <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
                         <Grid item>
                             <h1>Events</h1>
                         </Grid>
                     </Grid>
             <Grid container direction="column" justify="space-around" alignItems="center" spacing={8}>
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
                 <div className={classes.root}>
                     <Paper square elevation={0} className={classes.header}>
                         <Grid container direction="row" justify="space-between" alignItems="center" spacing={40}>
                         <Grid item>
                             <Typography>{tutorialSteps[activeStep].label}</Typography>
                         </Grid>
                             <Grid item>
                             <Button color="primary" size="small" onClick={()=> this.updateSearchTypeOfSport(tutorialSteps[activeStep].label)}>
                             Search
                             </Button>
                             </Grid>
                         </Grid>
                     </Paper>
                     <img
                         className={classes.img}
                         src={tutorialSteps[activeStep].imgPath}
                         alt={tutorialSteps[activeStep].label}
                     />
                     <MobileStepper
                         steps={maxSteps}
                         position="static"
                         activeStep={activeStep}
                         className={classes.mobileStepper}
                         nextButton={
                             <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                 Next
                                 {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                             </Button>
                         }
                         backButton={
                             <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                 {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                 Back
                             </Button>
                         }
                     />
                 </div>
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
AllEvents.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AllEvents);