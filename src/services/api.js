import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api

//fc45e0562ca750d5ca8a6f31cf72af4c