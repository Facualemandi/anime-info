import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100vw;
  height: 400px;
`;
const Description = () => {
  const getLocal = localStorage.getItem("Description");
  const parseLocal = JSON.parse(getLocal);

  const { title } = parseLocal;

  const img = parseLocal.images.webp.large_image_url;

  return (
    <>
      <Img alt={title} src={img} />
      <p>{title}</p>
    </>
  );
};

export default Description;
