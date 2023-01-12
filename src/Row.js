import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from "./axios"


function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url= "https://image.tmdb.org/t/p/original/";

    useEffect(() => {

        async function fetchData() {
    
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
        }
        fetchData();
      }, [fetchUrl]);

      console.log(movies);

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className ="row_posters">
        {movies.map(
            (movie) =>
        ((            /*the following will prevent any form of deadlink coming in:*/
            isLargeRow && movie.poster_path)||/*if its a large movie and if the poster path exists. So only render if this exists */
            (!isLargeRow && movie.backdrop_path)) && ( /*or if it is not a large row and if the back drop path is present*/

                <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            
            />

            )
            
        )}



        </div>

        

    </div>
  )
}

export default Row