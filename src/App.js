import { useEffect, useState } from "react";
import NavBar from "./components/common/NavBar/NavBar";
import Main from "./components/pages/Dashboard/Main/Main";
import ListBox from "./components/pages/Dashboard/ListBox/ListBox";
import WatchedBox from "./components/pages/Dashboard/WatchedBox/WatchedBox";

const KEY = '8576fa62';



export default function App() {
  const controller =  new AbortController();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchMovies () {
      try{ 
      setIsLoading(true)
      setError("")
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal: controller.signal});
      if(!res.ok){
        throw new Error('something went wrong with fetching data!')
      }
      const data = await res.json();
      if(data.Response === 'False'){
        throw new Error('No Movie Found!')
      }
      setMovies(data?.Search)
      setError("")
    }
    catch(err){
      if(err.name !== 'AbortError'){
        setError(err.message)
      }
    }
    finally{
        setIsLoading(false)
  
      }
    }
    if (query.length < 3 ) { 
      setError('')
      setMovies([])
      
    }
    else{

      fetchMovies();
    }
    return function () {
      controller.abort();
    }
  }, [query])

  

  return (
    <>
      <NavBar movies={movies} query={query} setQuery={setQuery} setMovies={setMovies}/> 
      <Main>
        <ListBox movies={movies} isLoading={isLoading} error={error} setSelectedId={setSelectedId}/>
        <WatchedBox selectedId={selectedId} setSelectedId={setSelectedId} setIsLoading={setIsLoading} isLoading={setIsLoading} error={setIsLoading} setError={setIsLoading}/>
      </Main>
    </>
  );
}
