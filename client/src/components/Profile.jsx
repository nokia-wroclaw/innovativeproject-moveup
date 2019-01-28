import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getEditProfile, getDataProfile } from './UserFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Profile.css';
import iron from '../images/ironman.jpg';
import Typography from "@material-ui/core/Typography/Typography";
import blue from "@material-ui/core/colors/blue";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';

const genders = [
    {
        value: 'male',
    },
    {
        value: 'female',
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
        backgroundColor: '',
    },
    media: {
        height: 500,
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

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            age: '',
            number_phone: '',
            calculatedAge: '',
            gender: 'undefined',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSubmit (e) {
        e.preventDefault()

        const user = {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            sex: this.state.gender,
            number_phone: this.state.number_phone
        }

        getEditProfile(user).then(res => {
            window.location.reload();
        })
    }

    getAge() {
        let _today = new Date();
        let _dateBirthday = new Date(this.state.age);
        let _age = _today.getFullYear() - _dateBirthday.getFullYear();
        let _month = _today.getMonth() - _dateBirthday.getMonth();
        if(_month<0 || (_month === 0 && _today.getDate() < _dateBirthday.getDate()))
        {
            _age--;
        }
        this.setState({
            calculatedAge: _age
        })
    }

    componentDidMount () {
        if (localStorage.usertoken) {
            const token = localStorage.usertoken;
            const decoded = jwt_decode(token);
            getDataProfile(decoded).then(res => {
                this.setState({
                    id: decoded.id,
                    first_name: res.first_name,
                    last_name: res.last_name,
                    email: res.email,
                    password: res.password,
                    age: res.age,
                    gender: res.sex,
                    number_phone: res.number_phone
                })
                this.getAge();
            })
        }else {
            console.log("error:  get into /profile without sign in  ")
            this.props.history.push(`/`)
        }
    }
    render () {
        const { classes} = this.props;
        return (
                    <form noValidate onSubmit={this.onSubmit}>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={40}>
                            <Grid item>
                        <Card className={classes.card}>

                                <CardMedia
                                    className={classes.media}
                                    image={iron}
                                    title="Iron man"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Profile
                                    </Typography>
                                    <Grid container direction="column" justify="center" alignItems="center" spacing={0}>
                                        <Grid item>
                                            <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
                                                <Grid item>
                                    <TextField type="text"
                                               variant="outlined"
                                               className="textField"
                                               name="first_name"
                                               value={this.state.first_name}
                                               onChange={this.onChange}
                                               label="FIRST NAME"
                                               margin="normal"
                                    />
                                                </Grid>
                                                <Grid item>
                                    <TextField type="text"
                                               variant="outlined"
                                               className="textField"
                                               name="last_name"
                                               value={this.state.last_name}
                                               onChange={this.onChange}
                                               label="LAST NAME"
                                               margin="normal"
                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
                                                <Grid item>
                                        <TextField type="text"
                                               variant="outlined"
                                               className="textField"
                                               name="age"
                                               value={this.state.calculatedAge}
                                               label="AGE"
                                               margin="normal"
                                    />
                                                </Grid>
                                                    <Grid item>
                                    <TextField type="text"
                                               variant="outlined"
                                               className="textField"
                                               name="age"
                                               value={this.state.age}
                                               onChange={this.onChange}
                                               label="DATE YOUR BIRTHDAY"
                                               margin="normal"
                                    />
                                                    </Grid>
                                                </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
                                                <Grid item>
                                    <TextField type="text"
                                               variant="outlined"
                                               className="textField"
                                               name="number_phone"
                                               value={this.state.number_phone}
                                               onChange={this.onChange}
                                               label="NUMBER PHONE"
                                               margin="normal"
                                    />
                                                </Grid>
                                                    <Grid item>
                                    <TextField type="text"
                                               variant="outlined"
                                               className="textField"
                                               name="password"
                                               value={this.state.password}
                                               onChange={this.onChange}
                                               label="PASSWORD"
                                               margin="normal"
                                    />
                                                    </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                variant="outlined"
                                                select
                                                label="GENDER"
                                                className="textField"
                                                value={this.state.gender}
                                                onChange={this.handleChange('gender')}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                margin="normal"
                                            >
                                                {genders.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.value}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            <CardActions>
                                <Button type="submit"  color="primary" >
                                    Edit your profile
                                </Button>
                            </CardActions>
                        </Card>
                            </Grid>
                        </Grid>
                    </form>
        )
    }
}
export default  withStyles(styles)(Profile)
