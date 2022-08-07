import React from "react";
import styled from "styled-components";
import DragonBall from "../../images/Dbz.jpg";
import Naruto from "../../images/naruto.jpg";
import OnePunch from "../../images/onepunch.jpg";
import Yugioh from "../../images/yigioh.jpg";
import JujutsuKaisen from "../../images/JujutsuKaisen.jpg";
import MyHero from "../../images/myHero.jpg";
import Shingeki from "../../images/ShingekinoKyojin.jpg";
import Fma from "../../images/Fmab.jpg";
import { NavLink } from "react-router-dom";

const Main = styled.main`
  width: 100vw;
  height: auto;
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

const totalAnime = [
  {
    id: 1,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
  {
    id: 2,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
  {
    id: 3,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
  {
    id: 4,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
  {
    id: 5,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
  {
    id: 6,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
  {
    id: 7,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
  {
    id: 8,
    title: "Dragon Ball Z",
    img: `${DragonBall}`,
  },
];

const Anime = () => {
  return (
    <>
      <Main>
        <Container>
          <NavL to={"/Dbz"}>
            <SectionAnime>
              <Img alt="Dragon Ball Z" src={DragonBall} />
              <Name>Dragon Ball Z</Name>
            </SectionAnime>
          </NavL>

          <NavL to={"/naruto"}>
            <SectionAnime>
              <Img alt="Naruto" src={Naruto} />
              <Name>Naruto</Name>
            </SectionAnime>
          </NavL>

          <NavL to={"/onepunch"}>
            <SectionAnime>
              <Img alt="One Punch " src={OnePunch} />
              <Name>One Punch Man</Name>
            </SectionAnime>
          </NavL>

          <NavL to={"/yugioh"}>
            <SectionAnime>
              <Img alt="Yu-Gi-Oh" src={Yugioh} />
              <Name>Yu-Gi-Oh</Name>
            </SectionAnime>
          </NavL>

          <NavL to={"/JujutsuKaisen"}>
            <SectionAnime>
              <Img alt="Dragon Ball Z" src={JujutsuKaisen} />
              <Name>Jujutsu Kaisen</Name>
            </SectionAnime>
          </NavL>

          <NavL to={"/HeroAcademi"}>
            <SectionAnime>
              <Img alt="Dragon Ball Z" src={MyHero} />
              <Name>My Hero Academia</Name>
            </SectionAnime>
          </NavL>

          <NavL to={"/shingeki"}>
            <SectionAnime>
              <Img alt="Shingeki No Kyojin" src={Shingeki} />
              <Name>Shingeki No Kyojin</Name>
            </SectionAnime>
          </NavL>
          <NavL to={"/fullmetal"}>
            <SectionAnime>
              <Img alt="Fullmetal Alchemist" src={Fma} />
              <Name>Fullmetal Alchemist</Name>
            </SectionAnime>
          </NavL>
        </Container>
      </Main>
    </>
  );
};

export default Anime;