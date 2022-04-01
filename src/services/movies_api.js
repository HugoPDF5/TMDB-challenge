import api from './api';

export const callAPI = {
    getMoviesByPopularity: async () => {
        const response = await api.get('movie/popular?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US')
            .then(res => {
                console.log(res.data)
                return res.data.results.filter((item, index) => {
                    if (index < 13) {
                        return item
                    }
                })
            }).catch(e => {
                return false
            })
            return response
    },

    getMovieGenres: async () => {
        const response = await api.get('genre/movie/list?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US')
            .then(res => {
                return response
            }).catch(e => {
                console.error(e)
            })
    },

    getMovieDetails: async (movie_id) => {
        const response = await api.get(`movie/${movie_id}?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US`)
            .then(res => {
                return response
            }).catch(e => {
                console.error(e)
            })
    },

    getMovieByName: async (name_movie) => {
        const response = await api.get(`search/movie?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US&query=${name_movie}`)
            .then(res => {
                return response
            }).catch(e => {
                console.error(e)
            })
    }
}
