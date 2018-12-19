import React, { Component } from 'react'
import { getEvent} from './EventFunctions'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import {addComment} from "./CommentFunctions";

class AddComment extends Component {
    constructor() {
        super()
        this.state = {
            name_event: '',
            start_point: '',
            type_sport: '',
            date: '',
            time: '',
            pref_age: '',
            pref_sex: '',
            advanced: '',
            repetition: '',
            phone_organizer: '',
            id_user: '',
            id_event: '',
            text: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const comment = {
            id_user: this.state.id_user,
            id_event: this.state.id_event,
            text: this.state.text,
        }
        addComment(comment).then(res => {
            this.props.history.push(`/allEvents`)
        })
    }
    componentDidMount() {
        const id_userEvent = localStorage.userEvent;
        localStorage.removeItem('userEvent')
        getEvent(id_userEvent).then(res => {
            try{
                this.setState({
                    id_user: res.id_user,
                    id_event: res.id_event,
                    name_event: res.name_event,
                    start_point: res.start_point,
                    type_sport: res.type_sport,
                    date: res.date,
                    time: res.time,
                    pref_age: res.pref_age,
                    pref_sex: res.pref_sex,
                    advanced: res.advanced,
                    repetition: res.repetition,
                    phone_organizer: res.phone_organizer
                })
            }catch(err){
                this.props.history.push('/allEvents')
            }

        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="textCenter3">Add comment</h1>
                            <li>
                                {this.state.name_event} | {this.state.start_point} | {this.state.type_sport} | {this.state.date} | {this.state.time}
                            </li>
                            <div className="form-group">
                                <TextField type="text"
                                           variant="outlined"
                                           className="textField3"
                                           name="text"
                                           placeholder="Enter  your comment"
                                           value={this.state.text}
                                           onChange={this.onChange}
                                           label="comment"
                                           margin="normal"
                                />
                            </div>
                            <Button className="button1" type="submit" variant="contained" color="primary" >
                                Send comment
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

    export default AddComment;