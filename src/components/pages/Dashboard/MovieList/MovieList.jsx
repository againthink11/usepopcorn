import React from 'react'
import Movies from '../Movies/Movies'
import Loader from '../../../common/Loader/Loader'

const MovieList = ({movies, isLoading, error}) => {
    return (
        <ul className="list">
            {isLoading && <Loader /> }
            { !isLoading && !error &&
            <Movies movies={movies}/>
             }
             {error && <span className='error'>{error}</span>}
        </ul>
    )
}

export default MovieList