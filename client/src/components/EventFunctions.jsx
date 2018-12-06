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

export const AllEvent = allEvents => {
    return axios
        .get('events/getAllEvents', {
        }).then(res => {
            console.log("gotcha json with all events")
            return res.data
        }).catch(err => {
            console.log("error  " + err)
        })
}