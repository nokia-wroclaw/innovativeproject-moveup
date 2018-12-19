import axios from 'axios'
export const registerEvent = newEvent => {
    return axios
        .post('events/addEvent', {
            id_user: newEvent.id_user,
            name_event: newEvent.name_event,
            start_point: newEvent.start_point,
            type_sport: newEvent.type_sport,
            date: newEvent.date,
            time: newEvent.time,
            pref_age: newEvent.pref_age,
            pref_sex: newEvent.pref_sex,
            advanced: newEvent.advanced,
            repetition: newEvent.repetition,
            phone_organizer: newEvent.phone_organizer
        }).then(res => {
            console.log("New event created")
        }).catch(err => {
            console.log("error  " + err)
        })
}


export const getUserEvents = user => {
    return axios
        .put('events/getAllUserEvents', {
            id_user: user.id
        }).then(res => {
            console.log("u get ur events")
            return res.data
        }).catch(err => {
            console.log("error  " + err)
        })
}

export const getEvent = id_event => {
    return axios
        .put('events/getEvent', {
            id_event: id_event,
        }).then(res => {
            return res.data
        }).catch(err => {
            console.log("error  " + err)
        })
}

export const editEvent = event => {
    return axios
        .put('events/editEvent', {
            id_event: event.id_event,
            id_user: event.id_user,
            name_event: event.name_event,
            start_point: event.start_point,
            type_sport: event.type_sport,
            date: event.date,
            time: event.time,
            pref_age: event.pref_age,
            pref_sex: event.pref_sex,
            advanced: event.advanced,
            repetition: event.repetition,
            phone_organizer: event.phone_organizer
        }).then(res => {
            console.log("Your event was changed: ")
        }).catch(err => {
            console.log("error:  " + err)
        })
}

export const deleteUserEvent = id_event => {
    return axios
        .delete('events/deleteEvent', {
            data: {
                id_event: id_event
            }

        }).then(res => {
            console.log("Your event was deleted")
            console.log(id_event)
        }).catch(err => {
            console.log("error:  " + err)
        })
}