import React from "react"
import styled from 'styled-components'
import Timer from "react-compound-timer";

const CountdownContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1em;
  max-width: 600px;
  margin: auto;
`;

const CountPanel = styled.div`
  background: white;
  padding: 1em .5em;
  text-align: center;
  .time {
    font-size: 2.5em;
    line-height: 1;
    margin-bottom: .5em;
    margin-top: .7em;
    font-family: 'Ubuntu', sans-serif;
  }
  .type {
    font-family: 'Noto Serif', serif;
    color: #CC5D61;
    text-transform: uppercase;
  }
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
                <Timer.Days formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
              </div>
              <div className="type">
                days
              </div>
            </CountPanel>
            <CountPanel>
              <div className="time">
                <Timer.Hours formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/> 
              </div>
              <div className="type">
                hours
              </div>
            </CountPanel>
            <CountPanel>
              <div className="time">
                <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/> 
              </div>
              <div className="type">
                minutes
              </div>
            </CountPanel>
            <CountPanel>
              <div className="time">
                <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/> 
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
