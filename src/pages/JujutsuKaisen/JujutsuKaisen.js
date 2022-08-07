import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Main = styled.main`
  width: 100vw;
  background-color: #0a151f;
`;
const SectionOne = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;

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
const Img = styled.img`
  width: 100%;
  height: 230px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 10px;
  border-radius: 15px;
  background-color: #172c3f;
`;
const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: white;
  padding: 5px;
  background-color: #172c3f;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const JujutsuKaisen = () => {
  const getKaisen = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=Jujutsu%20Kaisen&sfw"
    );
    return response.json();
  };

  const { data, status } = useQuery(["kaisen"], getKaisen);

  const localDescription = (el) => {
    localStorage.setItem("Description", JSON.stringify(el));
  };

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <>
      <Main>
        <SectionOne>
          {data.data.map((el) => (
            <NavL
              to={`/Description/${el.title}`}
              key={el.mal_id}
              onClick={() => localDescription(el)}
            >
              <Img alt={el.title} src={el.images.jpg.image_url} />
              <Title>{el.title}</Title>
            </NavL>
          ))}
        </SectionOne>
      </Main>
    </>
  );
};

export default JujutsuKaisen;
