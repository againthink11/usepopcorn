import React, { useState } from 'react'
import Star from '../Star/Star';

const Ratings = ({maxRating = 5, color = '#000', size = 30, message = [], setRates}) => {
  const [ratings , setRatings] = useState(0);
  const [tempRatings , setTempRatings] = useState(0);
  const containerStyle = {
    display:"flex",
    alignItems:"center",
    gap:"14px"
  }
  const starContainerStyle = {
    display:"flex",
  }
  const textStyle = {
    lineHeight:"1",
    margin:"0",
    color:color,
  }

  const onHandleRate = (item) => {
    setRatings (item+1); 
    setRates(item+1)
  }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRating} , (_, i) => (
          <Star color={color} size={size} key={i} onRate={() => {onHandleRate(i)}} full = {tempRatings ? tempRatings >= i+1 : ratings >= i+1} onEnter={() => setTempRatings(i+1)} onDown={()=> setTempRatings(0)}/>
        ))}
      </div>
      <p style={textStyle}>{message.length === maxRating ? message[tempRatings ? tempRatings-1 : ratings-1] : tempRatings || ratings || ''}</p>
    </div>
  )
}

export default Ratings