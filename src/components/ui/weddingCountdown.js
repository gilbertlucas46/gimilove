import React from "react"
import styled from 'styled-components'
import Timer from "react-compound-timer";

const CountdownContainer = styled.div`
  display: block;
`;

const WeddingCountdown = ({ date }) => {
  const weddingDate = new Date(date);
  const present_date = new Date(); 
  const Result = Math.round(weddingDate.getTime() - present_date.getTime()); 
  return (
    <CountdownContainer>
      <Timer
      initialTime={Result}
      direction="backward"
      >
        {() => (
          <>
            <Timer.Days /> days
            <Timer.Hours /> hours
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
          </>
        )}
      </Timer>
    </CountdownContainer>
  )  
}


export default WeddingCountdown
