import React from 'react'
import date from "date-and-time"
import styled from 'styled-components'
const Header = () => {
  const today:Date = new Date()
  const formatedDate:string = date.format(today, "MMM DD YYYY")

  const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 10px);
    hight: 60px;
    position: fixed
    top: 0;
    left: 0;
  `
  const Image = styled.img`
    width: 50px;
    height: 50px;
  `
  const ImageDiv= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `
  const H1Header = styled.h1`
    font-family: "Montserrat", sans-serif;
    padding-left: 1rem;
    text-shadow: 5px 5px 2px #0f0f0f;
  `;
  return (
    <TopHeader>
      <ImageDiv>
        <Image src="/logo.png" alt="application logo" />
        <H1Header> Todo List</H1Header>
      </ImageDiv>
      <div>{formatedDate}</div>
    </TopHeader>
  );
}

export default Header