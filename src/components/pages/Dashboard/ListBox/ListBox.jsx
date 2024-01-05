import React, { useState } from 'react'
import MovieList from '../MovieList/MovieList';

const ListBox = ({movies, isLoading, error, setSelectedId}) => {
  const [isOpen1, setIsOpen1] = useState(true);
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && (
                <MovieList movies={movies} isLoading={isLoading} error={error} setSelectedId={setSelectedId}/>
            )}
        </div>
    )
}

export default ListBox