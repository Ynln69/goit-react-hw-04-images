import styled from '@emotion/styled';

export const AppBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 36px;
  padding-bottom: 24px;
`;

export const TextMessege = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #2f4f4f;
  font-size: 50px;
  text-align: center;
`;
