import React from 'react'
import Movies from '../Movies/Movies'

const MovieList = ({movies}) => {
    return (
        <ul className="list">
            <Movies movies={movies}/>
        </ul>
    )
}

export default MovieList