import api from './api';

export function getMoviesByRate(){
    api.get('movie/top_rated?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US')
    .then(res => {
        console.log(res.data)
    }).catch(e => {
        console.error(e)
    })
}

export function getMovieGenres(){
    api.get('genre/movie/list?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US')
    .then(res => {
        console.log(res.data)
    }).catch(e => {
        console.error(e)
    })
}

export function getMovieDetails(movie_id){
    api.get(`movie/${movie_id}?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US`)
    .then(res => {
        console.log(res.data)
    }).catch(e => {
        console.error(e)
    })
}

export function getMovieByName(name_movie){
    api.get(`search/movie?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US&query=${name_movie}`)
    .then(res => {
        console.log(res.data)
    }).catch(e => {
        console.error(e)
    })
}