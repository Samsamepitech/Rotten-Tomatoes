
import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link';
import axios from 'axios';

// "request_token": "209a2207e75a9bc48c0cc2dfb6142e74fd6cf46f"
// "session_id": "dfedd16c3b5fe570a502f22c70fe013203985392"

export default function Favorites() {
  const [session, loading] = useSession();

  const [authUser, setAuth] = useState({});
  const [favMovies, setFav] = useState([]);
  const [fix, setFix] = useState('');

  const API_KEY = '4d89a942554dede2811f349d8e5383e9';
  const session_id = '12375257';

  const getFav = (id) => {
    console.log("get favorits")

      var myHeaders = new Headers();
myHeaders.append("x-api-key", "");
myHeaders.append("token", "209a2207e75a9bc48c0cc2dfb6142e74fd6cf46f");
myHeaders.append("Authorization", "Bearer 209a2207e75a9bc48c0cc2dfb6142e74fd6cf46f");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

    fetch(`https://api.themoviedb.org/3/account/12375257/favorite/movies?api_key=${API_KEY}&session_id=${session_id}&language=en-US&sort_by=created_at.asc&page=1`, requestOptions)
      .then(response => response.json()) 
      .then(result => {
        setFav(result.data)
      })
      .catch(error => console.log('error', error));
  }


  const getAuth = (username) => {

    axios.get("http://localhost:3000/api/users", {headers: { "Content-Type": "application/json"}})
      .then(response => response.json())
      .then(result => {
        const res = result.data.find((user) =>
          user.username == username
        );
        getFav(res._id);
        setAuth(res)
      })
      .catch(error => console.log('error', error));
  }



  useEffect(() => {
    if (session) {
      getAuth(session.user.email);
    }

  }, [fix]);


  return <>
    {session && <>

      <div className="">
        {
          favMovies.map((movie) => {
            return (
              <div key={movie.tmdb_id} className="d-flex flex-column my-4 mx-3">
                <div className="d-flex flex-row flex-nowrap">
                  <img src={"https://image.tmdb.org/t/p/w200" + movie.poster} className="align-self-start mr-3 movie-img" alt={movie.title} />
                  <div className="d-flex flex-column">
                    <Link href={`/movie/${movie._id}`}>
                      <h5 className="font-weight-bold pointer"><a>{movie.title}</a></h5>
                    </Link>
                    <h6>{movie.overview.substring(0, 250) + "..."}</h6>
                    <h6>{new Date(movie.release_date).toUTCString().substring(0, 16)}</h6>
                    <div><button className="btn-dark" name={movie._id} onClick={deleteFav}>Retirer de la liste</button></div>
                  </div>
                </div>
              </div>
            )
          })
        }


      </div>
    </>}
  </>

}