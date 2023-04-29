import styled from '@emotion/styled';

export const BtnMore = styled.button`
  min-width: 180px;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  padding: 8px 16px;
  border: 0;
  border-radius: 2px;
  cursor: pointer;

  color: #fff;
  background-color: #3f51b5;
  font-family: Podkova;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
