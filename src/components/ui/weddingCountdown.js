import React from "react"
import styled from 'styled-components'
import Timer from "react-compound-timer";

const CountdownContainer = styled.div`
  display: block;
`;

const CountPanel = styled.div`
  background: white;
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
            <CountPanel>
              <div className="time">
                <Timer.Days />
              </div>
              <div className="type">
                days
              </div>
            </CountPanel>
            <CountPanel>
              <div className="time">
                <Timer.Hours /> 
              </div>
              <div className="type">
                hours
              </div>
            </CountPanel>
            <CountPanel>
              <div className="time">
                <Timer.Minutes /> 
              </div>
              <div className="type">
                minutes
              </div>
            </CountPanel>
            <CountPanel>
              <div className="time">
                <Timer.Seconds /> 
              </div>
              <div className="type">
                seconds
              </div>
            </CountPanel>
          </>
        )}
      </Timer>
    </CountdownContainer>
  )  
}


export default WeddingCountdown
