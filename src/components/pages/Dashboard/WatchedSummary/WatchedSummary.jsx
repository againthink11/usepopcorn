import React from 'react'
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummary = ({watched}) => {
    console.log(watched, 'summary watched  ')
   
    const avgImdbRating = average(watched.map((movie) => 
    {
        const imdbrating = parseInt(movie.imdbRating);
    return isNaN(imdbrating) ? 0 : imdbrating;
    }));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => {
    const runtime = parseInt(movie.Runtime);
    return isNaN(runtime) ? 0 : runtime;
}));

    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{Math.trunc(avgImdbRating)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    )
}

export default WatchedSummary