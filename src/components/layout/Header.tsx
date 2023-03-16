import React, { useState, useEffect } from "react";
import date from "date-and-time";
import styled from "styled-components";
const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 10px);
  hight: 60px;
  position: fixed
  top: 0;
  left: 0;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const H1Header = styled.h1`
  font-family: "Montserrat", sans-serif;
  padding-left: 1rem;
  text-shadow: 5px 5px 2px #0f0f0f;
`;
const DandTwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`
const DataTag = styled.span`
  font-size: 1.5rem
`
const Header = () => {
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const formatedDate: string = date.format(today, "ddd, MMM DD YYYY");
  const pstTime: string = date.format(today, "hh:mm A");
  const central_time = date.addHours(today, +1);
  const centralTime: string = date.format(central_time, "hh:mm A");
  const est_time = date.addHours(today, +3);
  const estTime: string = date.format(est_time, "hh:mm A");

  return (
    <TopHeader id="header">
      <ImageDiv>
        <Image src="/logo.png" alt="application logo" />
        <H1Header> Todo List</H1Header>
      </ImageDiv>
      <DandTwrapper>
        <DataTag> {formatedDate} </DataTag>
        <TimeWrapper>
          <span> {pstTime} PST</span>
          {/* <span> {estTime} EST</span>
          <span> {centralTime} CST</span> */}
        </TimeWrapper>
      </DandTwrapper>
    </TopHeader>
  );
};

export default Header;
