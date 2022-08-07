import React from "react";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import { useTheContext } from "../../context/context";

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
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: #32475b;
  border: none;
  border-radius: 5px;
  outline: none;
  color: white;
  padding: 5px;
`;
const IconSearch = styled(GoSearch)`
  width: 35px;
  height: 35px;
  padding: 5px;
  color: grey;
`;
const NavBar = () => {

  const { hanldeSearch, search } = useTheContext();

  return (
    <Main>
      <Section>
        <Input
          type={"text"}
          placeholder="Ingresa tu anime"
          onChange={hanldeSearch}
          name="anime"
          value={search}
        />
        <IconSearch />
      </Section>
    </Main>
  );
};

export default NavBar;
