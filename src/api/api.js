import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '78592348-4349-480c-aa0a-1466fa01142f'}
})

export const usersAPI = {
        getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)},
        follow(userId){
            return instance.post(`follow/` + userId)},
        unfollow(userId){
            return instance.delete(`follow/` + userId)},
        setUser(userId) {
            return profileAPI.setUser(userId)
        }
}
export const profileAPI = {
    setUser(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status})
    }
}
export const authAPI = {
    me()
    {return instance.get(`auth/me`)},
    login(email, password, rememberMe)
    {return instance.post(`auth/login`, {email, password, rememberMe})},
    logout()
    {return instance.delete(`auth/login`)},
}
