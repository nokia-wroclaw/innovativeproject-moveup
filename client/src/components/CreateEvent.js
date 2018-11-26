import React, { Component } from 'react'
import { registerEvent } from './EventFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import jwt_decode from "jwt-decode";

class CreateEvent extends Component {
    constructor() {
        super()
        this.state = {
            id_user: '',
            name_event: '',
            start_point: '',
            type_sport: '',
            date: '',
            time: '',
            pref_age: undefined,
            pref_sex: undefined,
            advanced: undefined,
            repetition: undefined,
            phone_organizer: undefined
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const event = {
            id_user: decoded.id,
            name_event: this.state.name_event,
            start_point: this.state.start_point,
            type_sport: this.state.type_sport,
            date: this.state.date,
            time: this.state.time,
            pref_age: this.state.pref_age,
            pref_sex:this.state.pref_sex ,
            advanced: this.state.advanced,
            repetition: this.state.repetition,
            phone_organizer: this.state.phone_organizer
        }

        registerEvent(event).then(res => {
            this.props.history.push(`/`) // narazie nie ma zakladki "twoje ogloszenia np"
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="textCenter3">Create your account</h1>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="name_event"
                                           placeholder="Enter name of event"
                                           value={this.state.name_event}
                                           onChange={this.onChange}
                                           label="NAME EVENT"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="start_point"
                                           placeholder="Enter start point"
                                           value={this.state.start_point}
                                           onChange={this.onChange}
                                           label="START_POINT"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="type_sport"
                                           placeholder="Enter type of sport"
                                           value={this.state.type_sport}
                                           onChange={this.onChange}
                                           label="TYPE OF SPORT"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="date"
                                           placeholder="Enter date"
                                           value={this.state.date}
                                           onChange={this.onChange}
                                           label="DATE"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="time"
                                           placeholder="Enter time"
                                           value={this.state.time}
                                           onChange={this.onChange}
                                           label="TIME"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="pref_age"
                                           placeholder="Enter optional age if u must"
                                           value={this.state.pref_age}
                                           onChange={this.onChange}
                                           label="OPTIONAL AGE"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="pref_sex"
                                           placeholder="Enter optional sex if u must"
                                           value={this.state.pref_sex}
                                           onChange={this.onChange}
                                           label="OPTIONAL SEX"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="advanced"
                                           placeholder="Enter advanced if u must"
                                           value={this.state.advanced}
                                           onChange={this.onChange}
                                           label="ADVANCED"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="repetition"
                                           placeholder="Enter repetition if this event is repeatable"
                                           value={this.state.repetition}
                                           onChange={this.onChange}
                                           label="REPETITION"
                                           margin="normal"
                                />
                            </div>
                            <div className="form-group">
                                <TextField type="number_phone"
                                           variant="outlined"
                                           className="textField3"
                                           name="phone_organizer"
                                           placeholder="Enter  number phone to organizer if u have"
                                           value={this.state.phone_organizer}
                                           onChange={this.onChange}
                                           label="NUMBER PHONE TO ORGANIZER"
                                           margin="normal"
                                />
                            </div>
                            <Button className="button3" type="submit" variant="contained" color="primary" >
                                Create new event
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEvent