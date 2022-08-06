import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: #0a151f;
`;
const Img = styled.img`
  width: 50vw;
  height: 350px;
  display: flex;
  border-radius: 15px;
  max-width: 350px;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
    margin-bottom: 10px;
  }
`;

const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: white;
  margin-left: 10px;

  @media (min-width: 780px) {
    display: flex;
    justify-content: center;
    font-size: 26px;
  }
`;

const ContainerOne = styled.section`
  display: flex;
  padding: 10px;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 780px) {
    margin: auto;
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const SectionOne = styled.section`
  width: 100%;
  @media (min-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
`;

const DivOne = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #172c3f;
  border-radius: 5px;
  padding: 10px;

  @media (min-width: 780px) {
    display: flex;
    width: max-content;
  }
  @media (min-width: 1080px) {
    width: 100%;
  }
`;
const ScoreP = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
`;
const Score = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: bold;
`;
const ScoreBy = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
`;
const SpanUser = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: lighter;
`;

const SectionTwo = styled.section`
  color: white;
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 22px;

  @media (min-width: 780px) {
    display: flex;
    flex-direction: row;
    height: max-content;
  }
`;
const SpanDetails = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: lighter;
`;

const ItemDetail = styled.p`
  padding: 5px;
  margin-top: 12px;
  width: 100%;
  border-radius: 3px;
  background-color: #32475b;
  @media (min-width: 780px) {
    margin: 5px;
  }
  @media (min-width: 1080px) {
    margin: 5px;
    width: 200px;
  }
`;

const SectionDesktop = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 780px) {
    flex-direction: row;
    border-radius: 10px;
    background-color: #172c3f;
    margin-top: 15px;
    margin-left: 10px;
  }
`;

const SectionSynopsys = styled.section`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 0.5px;
  color: white;
  width: 95vw;
  display: flex;
  flex-direction: column;
  margin: auto;

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

const Description = () => {
  const getLocal = localStorage.getItem("Description");
  const parseLocal = JSON.parse(getLocal);

  const { title, score, scored_by, rank, popularity, members, synopsis } =
    parseLocal;

  console.log(parseLocal);

  const img = parseLocal.images.webp.large_image_url;

  return (
    <>
      <Main>
        <ContainerOne>
          <Img alt={title} src={img} />
          <SectionOne>
            <Title>{title}</Title>
            <SectionDesktop>
              <DivOne>
                <ScoreP>Score</ScoreP>
                <Score>{score}</Score>
                <ScoreBy>
                  {scored_by} <SpanUser>users</SpanUser>
                </ScoreBy>
              </DivOne>
              <SectionTwo>
                <ItemDetail>
                  Ranked: <SpanDetails> #{rank}</SpanDetails>
                </ItemDetail>
                <ItemDetail>
                  Popularity: <SpanDetails> #{popularity}</SpanDetails>
                </ItemDetail>
                <ItemDetail>
                  Members: <SpanDetails> #{members}</SpanDetails>
                </ItemDetail>
              </SectionTwo>
            </SectionDesktop>
          </SectionOne>
        </ContainerOne>

        <SectionSynopsys>
          <h3>Synopsis</h3>
          <p>{synopsis}</p>
        </SectionSynopsys>
      </Main>
    </>
  );
};

export default Description;
