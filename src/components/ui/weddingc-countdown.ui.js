import React from "react"
import styled from 'styled-components'
import Timer from "react-compound-timer";

const CountdownContainer = styled.div`
  display: grid;
  max-width: 600px;
  margin: auto;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1em;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.1em;
    grid-row-gap: 0.1em;
  }
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
    font-weight: bold;
    @media (max-width: 767px) {
      font-size: 1.5em; 
    }
  }
  .type {
    font-family: 'Noto Serif', serif;
    color: #CC5D61;
    text-transform: uppercase;
  }
  @media screen {
    background: rgba(255, 255, 255, 0.7215686274509804); 
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
