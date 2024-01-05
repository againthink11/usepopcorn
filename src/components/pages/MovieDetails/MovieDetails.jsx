import React, { useEffect, useState } from 'react'
import Ratings from '../../../Ratings/Ratings/Ratings';
export const MovieDetails = ({selectedId, setSelectedId}) => {
    const [movies, setMovies] = useState({});
    const [rates, setRates] = useState(0);
    const KEY = '8576fa62';
    const handleBacktoMovies = () => {
        setSelectedId(null)
    }
    const {
        Title: title,
        Year:year,
        Poster:poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors:actors,
        Director: director,
        Genre: genre,

    } = movies;

    useEffect(() => {
      async function GetSelectedMovie () {
        try{
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setMovies(data)
        }
        catch{

        }
      } 
      GetSelectedMovie()
    }, [selectedId])
    
  return (
    <div className='details'>
    <header>
        <button className='btn-back' onClick={handleBacktoMovies}>&larr;</button>
        <img src={poster} alt={`poster of movie`} />
        <div className='details-overview'>
            <h2>{title}</h2>
            <p>{released} &bull; {runtime}</p>
            <p>{genre}</p>
            <p>
                <span>⭐</span>
                <span>{imdbRating} imdb Rating</span>
            </p>
        </div>
    </header>  
    <section>
        <div className='rating'>
        <Ratings maxRating={10} color='orange' size={24} setRates={setRates}/>
        </div>
        <p>
            <em>{plot}</em>    
        </p>    
        <p>
            Starring {actors}
        </p>
        <p>Directed by {director}</p>
    </section>  
        {selectedId}
    </div>
  )
}
