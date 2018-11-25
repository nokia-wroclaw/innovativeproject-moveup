import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            age: newUser.age,
            sex: newUser.sex,
            number_phone: newUser.number_phone
        }).then(res => {
            console.log("Registered")
        }).catch(err => {
            console.log("error  " + err)
        })
}

export const user_data = user => {
    return axios
        .put('users/data', {
            email: user.email,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age,
            sex: user.sex,
            number_phone: user.number_phone
        }).then(res => {
            console.log("data download")
            return res.data
        }).catch(err => {
            console.log("error  " + err)
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err =>{
            console.log(err)
        })
}

export const getEditProfile = user => {
    return axios
        .post('users/edit', {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            age: user.age,
            sex: user.sex,
            number_phone: user.number_phone
        }).then(res => {
            console.log("Your profile was changed")
        }).catch(err => {
            console.log("error:  " + err)
        })
}
