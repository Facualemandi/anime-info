import React from "react";
import styled from "styled-components";
import DragonBall from "../../images/Dbz.jpg";
import Naruto from "../../images/naruto.jpg";
import OnePunch from "../../images/onepunch.jpg";
import Yugioh from "../../images/yigioh.jpg";
import JujutsuKaisen from "../../images/JujutsuKaisen.jpg";
import MyHero from "../../images/myHero.jpg";

const Main = styled.main`
  width: 100vw;
  height: auto;
  background-color: #0a151f;
`;

const Img = styled.img`
  width: 40vw;
  height: 350px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Container = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 90vw;
  margin: auto;
  padding-top: 30px;
`;

const SectionAnime = styled.section`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  border-radius: 15px;
  width: max-content;
  background-color: #172c3f;
  margin-top: 15px;
`;

const Name = styled.p`
  padding: 5px;
`;

const Anime = () => {
  return (
    <>
      <Main>
        <Container>
          <SectionAnime>
            <Img alt="Dragon Ball Z" src={DragonBall} />
            <Name>Dragon Ball Z</Name>
          </SectionAnime>

          <SectionAnime>
            <Img alt="Dragon Ball Z" src={Naruto} />
            <Name>Naruto</Name>
          </SectionAnime>

          <SectionAnime>
            <Img alt="Dragon Ball Z" src={OnePunch} />
            <Name>One Punch Man</Name>
          </SectionAnime>

          <SectionAnime>
            <Img alt="Dragon Ball Z" src={Yugioh} />
            <Name>Yu-Gi-Oh</Name>
          </SectionAnime>

          <SectionAnime>
            <Img alt="Dragon Ball Z" src={JujutsuKaisen} />
            <Name>Jujutsu Kaisen</Name>
          </SectionAnime>

          <SectionAnime>
            <Img alt="Dragon Ball Z" src={MyHero} />
            <Name>My Hero Academia</Name>
          </SectionAnime>
        </Container>
      </Main>
    </>
  );
};

export default Anime;
