import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const ErrorImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 20vh;
  width: 100%;
`;
