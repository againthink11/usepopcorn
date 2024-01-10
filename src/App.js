import { useEffect, useState } from "react";
import NavBar from "./components/common/NavBar/NavBar";
import Main from "./components/pages/Dashboard/Main/Main";
import ListBox from "./components/pages/Dashboard/ListBox/ListBox";
import WatchedBox from "./components/pages/Dashboard/WatchedBox/WatchedBox";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const KEY = '8576fa62';



export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("inception");
  const [selectedId, setSelectedId] = useState(null);

  async function fetchMovies () {
    try{ 
    setIsLoading(true)
    setError("")
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
    if(!res.ok){
      throw new Error('something went wrong with fetching data!')
    }
    const data = await res.json();
    if(data.Response === 'False'){
      throw new Error('No Movie Found!')
    }
    console.log(data)
    setMovies(data.Search)
  }
  catch(err){
    setError(err.message)
  }
  finally{
      setIsLoading(false)

    }
  }
  useEffect(() => {
    if (query.length < 3 ) {
      setError('')
      setMovies('')
      
    }
    fetchMovies();
  }, [query])

  

  return (
    <>
      <NavBar movies={movies} query={query} setQuery={setQuery} setMovies={setMovies}/> 
      <Main>
        <ListBox movies={movies} isLoading={isLoading} error={error} setSelectedId={setSelectedId}/>
        <WatchedBox tempWatchedData={tempWatchedData} selectedId={selectedId} setSelectedId={setSelectedId} setIsLoading={setIsLoading} isLoading={setIsLoading} error={setIsLoading} setError={setIsLoading}/>
      </Main>
    </>
  );
}
