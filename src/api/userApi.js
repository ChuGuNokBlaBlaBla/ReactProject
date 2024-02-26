import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: { 'API-Key': '973590fd-e0bd-4cfb-b60f-d186fc59d2b1' }
});

export const apiUsers = () => {
    return {
        myLogin(){
            return (
                instance.get(`/auth/me`)
            )
        },
        getUsersAPI(page, count) {
            return(
                instance.get(`/users?page=${page}&count=${count}`)
            )
        },
        followUser(userId) {
            return (
                instance.post(`/follow/${userId}`)
            )
        },
        unfollowUser(userId) {
            return (
                instance.delete(`/follow/${userId}`)
            )
        },
        renderProfileFriend(paramsId) {
            return (
                profileApi().renderProfileFriend(paramsId)
                // instance.get(`profile/${paramsId}`)
            )
        }
    }
}

export const profileApi = () => {
    return {
        renderProfileFriend(paramsId) {
            return (
                instance.get(`/profile/${paramsId}`)
            )
        },
        getStatus() {
            return (
                instance.get(`/profile/status/30033`)
            )
        },
        statusUpdate(message) {
            return (
                instance.put(`/profile/status`, {status: message})
            )
        },
        logIn(email, password, rememberMe = false) {
            return (
                instance.post(`/auth/login`, {email, password, rememberMe})
            ) 
        },
        logOut() {
            return (
                instance.delete(`/auth/login`)
            ) 
        }
        
    }
}