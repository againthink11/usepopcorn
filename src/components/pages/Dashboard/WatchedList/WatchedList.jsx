import React from 'react'
import Watched from '../Watched/Watched'

const WatchedList = ({watched}) => {
    return (
        <ul className="list">
            <Watched watched={watched}/>
        </ul>
    )
}

export default WatchedList