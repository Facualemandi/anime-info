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
  background-color: #0a1c2c;
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;

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

const SectionInfo = styled.section`
  width: 95vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: auto;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: #0a1c2c;
  border-radius: 10px;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const SpanInfo = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 0.5px;
  margin-left: 5px;
`;

const PInfo = styled.p`
  margin: 5px;
  padding: 5px;
  background-color: #172c3f;
  border-radius: 3px;
`;

const Description = () => {
  const getLocal = localStorage.getItem("Description");
  const parseLocal = JSON.parse(getLocal);

  const {
    title,
    score,
    scored_by,
    rank,
    popularity,
    members,
    synopsis,
    type,
    episodes,
    status,
    aired,
    year,
    season,
    broadcast,
    producers,
    licensors,
    studios,
    source,
    duration,
    rating,
  } = parseLocal;

  console.log(parseLocal);

  const img = parseLocal.images.webp.large_image_url;
  const genres = parseLocal.genres.map((el) => el.name);
  const spaceGenre = genres.join(", ");
  const theme = parseLocal.themes.map((el) => el.name);
  const spaceTheme = theme.join(" - ");
  const demograpic = parseLocal.demographics.map((el) => el.name);

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
                <Score>{`${score ? score : "- - -"}`}</Score>
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

        <SectionInfo>
          <PInfo>
            Type: <SpanInfo>{`${type ? type : "- - -"}`}</SpanInfo>
          </PInfo>
          <PInfo>
            Episodes: <SpanInfo>{`${episodes ? episodes : "- - -"}`}</SpanInfo>
          </PInfo>
          <PInfo>
            Status: <SpanInfo>{`${status ? status : "- - -"}`}</SpanInfo>
          </PInfo>
          <PInfo>
            Aired: <SpanInfo>{`${aired ? aired.string : "- - -"}`}</SpanInfo>
          </PInfo>
          <PInfo>
            Premiered:{" "}
            <SpanInfo>{`${
              season && year ? season + " " + year : "- - -"
            }`}</SpanInfo>
          </PInfo>
          <PInfo>
            Broadcast:{" "}
            <SpanInfo>{`${broadcast ? broadcast.string : "- - -"}`}</SpanInfo>
          </PInfo>
          <PInfo>
            Producers:{" "}
            <SpanInfo>{`${
              producers.length === 0 ? "- - -" : producers[0].name
            }`}</SpanInfo>
          </PInfo>
          <PInfo>
            Licensors:{" "}
            <SpanInfo>{`${
              licensors.length === 0 ? "- - -" : licensors[0].name
            }`}</SpanInfo>
          </PInfo>
          <PInfo>
            Studios:{" "}
            <SpanInfo>{`${
              studios.length === 0 ? "- - -" : studios[0].name
            }`}</SpanInfo>
          </PInfo>
          <PInfo>
            Source: <SpanInfo>{`${source ? source : "- - -"}`}</SpanInfo>
          </PInfo>
          <PInfo>
            Genres: <SpanInfo>{spaceGenre}</SpanInfo>
          </PInfo>
          <PInfo>
            Themes:{" "}
            <SpanInfo>{`${
              theme.length === 0 ? "- - -" : spaceTheme
            }`}</SpanInfo>
          </PInfo>
          <PInfo>
            Demographic:{" "}
            <SpanInfo>{`${
              demograpic.length === 0 ? "- - -" : demograpic
            }`}</SpanInfo>
          </PInfo>
          <PInfo>
            Duration: <SpanInfo>{duration}</SpanInfo>
          </PInfo>
          <PInfo>
            Rating: <SpanInfo>{rating}</SpanInfo>
          </PInfo>
        </SectionInfo>

        <SectionSynopsys>
          <h3>Synopsis</h3>
          <p>{synopsis}</p>
        </SectionSynopsys>
      </Main>
    </>
  );
};

export default Description;
