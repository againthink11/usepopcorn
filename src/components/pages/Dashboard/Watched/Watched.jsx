import React from 'react'

const Watched = ({ watched,deleteMovie }) => {
    return (
        <>
            {
                watched.map((movie) => (
                    <li key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} poster`} />
                        <h3>{movie.Title}</h3>
                        <div>
                            <p>
                                <span>⭐️</span>
                                <span>{movie.imdbRating}</span>
                            </p>
                            <p>
                                <span>🌟</span>
                                <span>{movie.userRating}</span>
                            </p>
                            <p>
                                <span>⏳</span>
                                <span>{movie.Runtime}</span>
                            </p>
                            <button className='btn-delete' onClick={() => deleteMovie(movie.imdbID)}>X</button>
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default Watched