import React from 'react'
import Watched from '../Watched/Watched'

const WatchedList = ({watched, deleteMovie}) => {
    return (
        <ul className="list">
            <Watched watched={watched} deleteMovie={deleteMovie}/>
        </ul>
    )
}

export default WatchedList