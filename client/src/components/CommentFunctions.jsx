import axios from 'axios'
export const addComment = newComment => {
    return axios
        .post('comments/addComment', {
            id_event: newComment.id_event,
            id_user: newComment.id_user,
            text: newComment.text,
        }).then(res => {
            console.log("New comment created")
        }).catch(err => {
            console.log("error  " + err)
        })
}

export const getComments = eventId => {
    return axios
        .put('comments/getComments', {
            id_event: eventId
        }).then(res => {
            console.log("u got smth comments in your events")
            return res.data
        }).catch(err => {
            console.log("error  " + err)
        })
}