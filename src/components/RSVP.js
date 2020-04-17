import React, { useState }  from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import showdown from 'showdown'

import Title from './ui/Titles'
import Wrapper from './Wrapper'


const converter = new showdown.Converter();

const RSVPCard  = styled.div`
    display: grid;
    margin-top: 2em;
    grid-column-gap: 1em;
`;

const RSVPContainer  = styled.div`
  background-color: #F5F4ED;
  position: relative;
  &:before {
    background: linear-gradient(45deg,#ffffff 16px,transparent 0),linear-gradient(-45deg,#ffffff 16px,transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 32px 32px;
    content: " ";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 32px;
    transform: rotate(180deg);
  }
`;

const CardContents = styled.div`
  margin-top: 2em;
  text-align: center;
`;

const RSVP_QUERY = graphql`
  query RSVP_QUERY {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "_data/(rsvp)/.*.md$/"}}
  ) {
    edges {
      node {
        frontmatter {
          RSVP {
            title
            name
          }
        }
      }
    }
  }
}
`;


const RSVP = () => {
  const [items] = React.useState([
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker"
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ]);
  
  return (
    <StaticQuery
      query={RSVP_QUERY}
      render={({ allMarkdownRemark }) => (
        <RSVPContainer>
          <Wrapper>
            <Title>RSVP</Title>
            <CardContents>
              {allMarkdownRemark.edges.map((edge) => {
                const { frontmatter } = edge.node;
                return (
                  <RSVPCard key={frontmatter.RSVP.title}>
                    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontmatter.RSVP.name) }} />
                    <form name="rsvp" netlify netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="rsvp" />
                      <input type="text" name="name" />
                      <input type="email" name="email" />
                      <select>
                        {items.map(item => (
                          <option
                            key={item.value}
                            value={item.value}
                          >
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <textarea name="message"></textarea>
                    </form>
                  </RSVPCard>
                )
              })}
            </CardContents>
          </Wrapper>
        </RSVPContainer>
      )}
    />
  )
}

export default RSVP



