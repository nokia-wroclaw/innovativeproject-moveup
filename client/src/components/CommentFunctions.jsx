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

export const verificationComment = data => {
    return axios
        .put('comments/verificationComment', {
            id_comment: data.id_comment,
            verification: data.verification
        }).then(res => {
            console.log("u send ur veryfication")
        }).catch(err => {
            console.log("error  " + err)
        })
}

export const getCommentsWithVerification = eventId => {
    return axios
        .put('comments/getCommentsWithVerification', {
            id_event: eventId
        }).then(res => {
            console.log("u got all coments in allEvents")
            return res.data
        }).catch(err => {
            console.log("error  " + err)
        })
}