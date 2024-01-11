import React, { useEffect, useState } from 'react'
import WatchedList from '../WatchedList/WatchedList';
import WatchedSummary from '../WatchedSummary/WatchedSummary';
import { MovieDetails } from '../../MovieDetails/MovieDetails';
import Loader from '../../../common/Loader/Loader';


const WatchedBox = ({selectedId, setSelectedId}) => {
  const [watched, setWatched] = useState([]);
  const [isOpen2, setIsOpen2] = useState(true);
  const [error, setError] = useState('');
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const KEY = '8576fa62';
  const handleBacktoMovies = () => {
      setSelectedId(null)
  }
  const handleWatchedMovies = (rates) => {
      setSelectedId(null)
      setWatched(prevState => [...prevState, {...movie, userRating: rates}])
  }

  const deleteMovie = (id) => {
    console.log(watched, id)
    setWatched(watched.filter(item=> item.imdbID !== id))
  }
 
  
  useEffect(() => {
    async function GetSelectedMovie() {
        try {
            setIsLoading(true)
            setError('')
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            if(!res.ok){
                console.log('res is not ok')
                throw new Error('There is a Server error!')
            }
            const data = await res.json();
            if(data.Response === 'False'){
                throw new Error('Invalid API key you are searching!')
            }
            setMovie(data)
        }
        catch (err) {
            console.log(err)
            setError(err.message)
        }
        finally {
            setIsLoading(false)

        }
    }
    GetSelectedMovie()
}, [selectedId])

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          {selectedId ? 
          <>
           {isLoading && <Loader/>}
            {error && <div className='loader'>{error}</div>} 
            {!isLoading && !error &&
             <MovieDetails watched={watched} selectedId={selectedId} setSelectedId={setSelectedId} movie={movie} handleBacktoMovies={handleBacktoMovies} handleWatchedMovies={handleWatchedMovies}/> 
            }
          </>
          : 
          <>
          <WatchedSummary watched={watched}/>
          <WatchedList watched={watched} setSelectedId={setSelectedId} deleteMovie={deleteMovie}/>
          </>
          }
        </>
      )}
    </div>
  )
}

export default WatchedBox