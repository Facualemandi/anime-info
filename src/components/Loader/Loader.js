import React from "react";
import styled from "styled-components";
import "./Loader.css";

const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Loader = () => {
  return (
    <Section>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Section>
  );
};

export default Loader;
