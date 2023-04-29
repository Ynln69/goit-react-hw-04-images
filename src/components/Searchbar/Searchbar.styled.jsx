import styled from '@emotion/styled';

export const Header = styled.header`
  z-index: 1100;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  color: #fff;
  background: linear-gradient(
    294deg,
    rgba(240, 241, 39, 1) 0%,
    rgba(13, 38, 250, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  position: relative;
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  outline: none;
  opacity: 0.7;

  background-color: rgb(0, 0, 0, 0);
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  &:hover {
    scale: 1.2;
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  width: 300px;
  display: inline-block;
  padding: 9px;
  font: inherit;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #555;
  outline: none;

  color: #fff;
  background-color: rgb(0, 0, 0, 0);
  &::placeholder {
    font-family: Podkova;
    font-size: 15px;
    color: #fff;
    opacity: 0.7;
  }
`;
