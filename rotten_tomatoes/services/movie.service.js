import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import axios from 'axios'

import { fetchWrapper } from '../helpers/fetch-wrapper';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/movies`;
const movieSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('movie')));

export const movieService = {
    movie: movieSubject.asObservable(),
    get movieValue () { return movieSubject.value },
    movieadd,
    getmovies,
    getmovieId,
    update_movie,
    delete_movie
};

function movieadd(title, backdrop_path, poster_path, director, adult, overview, release_date, genre_name ) {

        axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*'
        axios.defaults.headers.put['Content-Type' ] = 'application/json'
        return axios.post('http://localhost:3040/movies', {title, backdrop_path, poster_path, director, adult, overview, release_date, genre_name })
        .then(({movie}) => {console.log({movie}) 
        alert('Movie added successfully')
        },
        (err) => alert(err))
}


// get all movies
function getmovies() {                      
    return fetchWrapper.get(baseUrl);
}

function getmovieId(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update_movie(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params)
        .then(x => {
            // update stored movie if the logged in movie updated their own record
            if (id === movieSubject.value.id) {
                // update local storage
                const movie = { ...movieSubject.value, ...params };
                localStorage.setItem('movie', JSON.stringify(movie));

                // publish updated movie to subscribers
                movieSubject.next(movie);
            }
            return x;
        });
}

function delete_movie(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}