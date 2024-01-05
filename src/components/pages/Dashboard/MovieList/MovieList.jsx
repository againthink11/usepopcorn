import React from 'react'
import Movies from '../Movies/Movies'
import Loader from '../../../common/Loader/Loader'

const MovieList = ({movies, isLoading, error, setSelectedId}) => {
    return (
        <ul className="list list-movies">
            {isLoading && <Loader /> }
            { !isLoading && !error &&
            <Movies movies={movies} setSelectedId={setSelectedId}/>
             }
             {error && <span className='error'>{error}</span>}
        </ul>
    )
}

export default MovieList