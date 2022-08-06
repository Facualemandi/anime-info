import React from "react";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  background-color: #0a151f;
  padding: 10px;
`;

const Section = styled.section`
  display: flex;
  width: 80vw;
  justify-content: center;
  margin: auto;
  border-radius: 5px;
  background-color: #32475b;

  @media (min-width: 780px) {
    width: 780px;
    margin: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: #32475b;
  border: none;
  border-radius: 5px;
  outline: none;
  color: white;
`;
const IconSearch = styled(GoSearch)`
  width: 35px;
  height: 35px;
  padding: 5px;
  color: grey;
`;
const NavBar = () => {
  return (
    <Main>
      <Section>
        <Input type={"text"} />
        <IconSearch />
      </Section>
    </Main>
  );
};

export default NavBar;
