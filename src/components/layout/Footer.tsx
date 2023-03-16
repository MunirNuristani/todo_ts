import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
display: flex;
justify-content: center;
width: 100vw;
align-items: center;
position: fixed;
bottom: 0;
left: 0;
margin: auto;
`
const Footer = () => {
  const year = new Date().getFullYear()


  return (
    <Foot id="footer">
      <> &copy; {year}</>
    </Foot>
  );
}

export default Footer