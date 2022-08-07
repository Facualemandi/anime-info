import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTheContext } from "../../context/context";

const Main = styled.main`
  width: 100vw;
  height: max-content;
  background-color: #0a151f;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media (min-width: 780px) {
    width: 100%;
  }
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  padding-top: 10px;

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
    width: 780px;
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    width: 1080px;
  }
  @media (min-width: 1380px) {
    grid-template-columns: repeat(5, 1fr);
    width: 1380px;
  }
`;

const SectionAnime = styled.section`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  border-radius: 15px;
  background-color: #172c3f;
  margin-top: 15px;
  margin: 10px;
`;

const Name = styled.p`
  padding: 5px;
`;

const NavL = styled(NavLink)`
  text-decoration: none;
`;

const Anime = () => {
  const { newTotalAnime } = useTheContext();
  console.log(newTotalAnime);

  return (
    <>
      <Main>
        <Container>
          {newTotalAnime.map((el) => (
            <NavL to={`/${el.abb}`} key={el.id}>
              <SectionAnime>
                <Img alt="" src={el.img} />
                <Name>{el.title}</Name>
              </SectionAnime>
            </NavL>
          ))}
        </Container>
      </Main>
    </>
  );
};

export default Anime;
