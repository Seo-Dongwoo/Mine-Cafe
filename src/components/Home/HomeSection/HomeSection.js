import React from "react";
import SectionButton from "./SectionButton";
import styled from "styled-components";

const HomeSection = () => {
  return (
    <Home>
      <HomeDescription>AROUND</HomeDescription>
      <HomeTitle>CAFE</HomeTitle>
      <br />
      <HomeDescription>SEARCH</HomeDescription>
      <SectionButton />
      <HomeVideo
        src="https://storage.coverr.co/videos/02qtRx2PS01kgpytdMyas9sbWR1PYsc4ad?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU3NTIzODkxfQ.XmXraltzFfSjjWuCc1Dus00WIdH4Ob4nnwjbR75GeAk"
        autoPlay
        loop
        muted
      />
    </Home>
  );
};

const Home = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  object-fit: contain;
  font-family: "Permanent Marker";
`;

const HomeDescription = styled.p`
  margin-bottom: 20px;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`;

const HomeTitle = styled.p`
  color: yellow;
  font-size: 2.5rem;
  font-weight: 700;
`;

const HomeVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  @media screen and (max-width: 960px) {
    height: 1200px;
  }
`;

export default HomeSection;
