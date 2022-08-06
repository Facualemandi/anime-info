import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import Loader from "../components/Loader/Loader";
import { NavLink } from "react-router-dom";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #172c3f;
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 10px;
  border-radius: 10px;
  background-color: #32475bbd;
`;
const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: white;
  padding: 5px;
`;
const DragonBallZ = () => {
  const getDbz = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=Dragon%20Ball%20z&sfw"
    );

    return response.json();
  };

  const { data, status } = useQuery(["Dbz"], getDbz);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  const localDescription = (el) => {
    localStorage.setItem("Description", JSON.stringify(el));
  };

  return (
    <>
      <Main>
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
      </Main>
    </>
  );
};

export default DragonBallZ;
