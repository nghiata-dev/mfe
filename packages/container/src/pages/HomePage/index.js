import _get from "lodash/get";
import React from "react";
import Information from "../../components/Organism/Information";
import AboutMe from "../../components/Organism/AboutMe";
import Skill from "../../components/Organism/Skill";
import Experience from "../../components/Organism/Experience";
import GetInTouch from "../../components/Organism/GetInTouch";
export const HomePage = () => {
  return (
    <>
      <Information />

      <AboutMe />

      <Skill />

      <Experience />

      <GetInTouch />
    </>
  );
};

export default HomePage;
