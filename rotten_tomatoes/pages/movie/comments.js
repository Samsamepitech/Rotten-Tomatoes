import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";

function Comments() {
  const router = useRouter();

  const API_KEY = '4d89a942554dede2811f349d8e5383e9';
  const { movie_id } = router.query;
  console.log(router.query)
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getComments = async () => {
        var data = '';
        const result = await axios (`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`, {
             headers: {
                'x-api-key': '', 
                'token': '209a2207e75a9bc48c0cc2dfb6142e74fd6cf46f',
                'Authorization': `Bearer ${token}`
            }, data : data 
        });
        setComments(result.data.results);
        setIsLoading(true);
    }

    getComments();
  }, []);

  return isLoading ? (
    <>
      <div>wait</div>
    </>
  ) : (
    <>
      /* component comments */
    </>
  );
}

export default Comments;
