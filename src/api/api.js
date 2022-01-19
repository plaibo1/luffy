import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '00de5fb0-2f26-45f5-9f2e-0b9cad51155b'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    getAuthMe () {
        return instance.get(`auth/me/`)
            .then(res => res.data)
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },

    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },

    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },

    getTestUsers () {
        return instance.get('users/')
            .then(res => res.data)

        // axios.get('https://social-network.samuraijs.com/api/1.0/users')
        // .then(res => this.props.setUsersTest(res.data.items))
    }

}

