import React from 'react'
import styled from 'styled-components'

const RSVPFormContainer  = styled.form`
    display: grid;
    margin-top: 2em;
    grid-column-gap: 1em;
    @media (min-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 766px) {
      grid-template-columns: 1fr;
    }
`;

const RSVPForm = ({forms}) => {
  console.log(forms)
  return (
    <RSVPFormContainer name="rsvp" netlify netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="rsvp" />
      <input type="text" name="name" />
      <input type="email" name="email" />
        <select>
          NUMBER OF GUESTS
          {forms.guest.map((item) => (
            <option
              key={item.title}
              value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
        <select>
          YOU WILL ATTEND..
          {forms.attending.map((item) => (
            <option
              key={item.title}
              value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      <textarea name="message"></textarea>
    </RSVPFormContainer>
  )
}

export default RSVPForm
