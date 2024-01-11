import React, { useEffect, useState } from 'react'
import Ratings from '../../../Ratings/Ratings/Ratings';
export const MovieDetails = ({ movie, handleBacktoMovies, handleWatchedMovies, watched,selectedId }) => {
    const [rates, setRates] = useState(0);
    const [rated, setRated] = useState(false);
    const {
        Title: title,
        // Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
        
    } = movie;
    
    useEffect(() => {
        document.title=`${title}`
        
        return () => {
            document.title = "usePopcorn"
        }
    }, [title])
    
    useEffect(() => {
        setRated(watched.some(obj => obj.imdbID === selectedId))
        
    }, [selectedId])
    
    
    return (
        <>
            {
                // !isLoading && !error &&
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
                            {rated ?
                            "You already rated this movie" 
                            :
<>
                        <Ratings maxRating={10} color='orange' size={24} setRates={setRates} />
                        {rates > 0 ? 
                         <button className='btn-add' onClick={() => handleWatchedMovies(rates)}>+ Add into List</button>
                        :''}
                        </>
                            }
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>
                            Starring {actors}
                        </p>
                        <p>Directed by {director}</p>
                    </section>
                </div>
            }
            
        </>
    )
}
