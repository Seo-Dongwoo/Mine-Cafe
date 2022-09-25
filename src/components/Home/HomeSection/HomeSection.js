import React from "react";
import "../../assets/css/Home/HomeSection.css";
import SectionButton from "./SectionButton";

const HomeSection = () => {
  return (
    <div className="HomeSection">
      <p className="description">AROUND</p>
      <p className="brand">CAFE</p>
      <br />
      <p className="description">SEARCH</p>
      <SectionButton />
      <video
        src="https://storage.coverr.co/videos/02qtRx2PS01kgpytdMyas9sbWR1PYsc4ad?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU3NTIzODkxfQ.XmXraltzFfSjjWuCc1Dus00WIdH4Ob4nnwjbR75GeAk"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default HomeSection;
