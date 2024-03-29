import React from 'react'

const SearchBox = ({query, setQuery}) => {
    
    return (
        <>
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        </>
    )
}

export default SearchBox