import React from "react";
import styled from "styled-components";
import "./Loader.css";

const Section = styled.section`
  width: 100vw;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #0a151f;
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
