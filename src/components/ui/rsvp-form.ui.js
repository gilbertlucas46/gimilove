import React from 'react'
import styled from 'styled-components'
import Button from '../ui/button.ui'

const RSVPFormContainer  = styled.form`
    margin-top: 2em;
    @media (min-width: 992px) {
      max-width: 928px;
      margin: 2em auto auto auto;
    }
`;
const FormFields = styled.div`
  display: grid;
  grid-column-gap: 1em;
  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 766px) {
    grid-template-columns: 1fr;
  }
  label, input, select {
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
  }
  label {
    font-size: 16px;
    font-weight: normal;
    color: #707070;
  }
  input, select {
    height: 50px;
    padding: 0;
    line-height: 50px;
    border-radius: 4px;
    border: 1px solid #CACACA;
    text-indent: 10px;
    margin: .8em 0;
  }
  
`;

const RSVPForm = ({forms}) => {
  console.log(forms)
  return (
    <RSVPFormContainer name="rsvp" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">
      <input type="hidden" name="form-name" value="rsvp" />
      <FormFields>
        <p>
          <label htmlFor={forms.title}>{forms.title}</label>
          <input type="text" name="name"/>
        </p>
        <p>
          <label htmlFor="guest">NUMBER OF GUESTS</label>
            <select id="guest" name="number of guest">
              {forms.guest.map((item) => (
                <option
                  key={item.title}
                  value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
        </p>
        <p>
          <label htmlFor="attend">WILL YOU ATTEND?</label>
            <select id="attend" name="will attend">
            {forms.attending.map((item) => (
              <option
                key={item.title}
                value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </p>
      </FormFields>
      <Button>
        <button>Send</button>
      </Button>
    </RSVPFormContainer>
  )
}

export default RSVPForm
