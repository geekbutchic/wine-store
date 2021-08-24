import styled from "styled-components";

export const ButtonContainer1 = styled.button`
  text-transform: capitalize;
  font-size: 1.7rem;
  background: transparent;
  borer: 0.05rem solid black;
  color: var(--mainDark);
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.3rem 0.6rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &: hover {
    background: var(--mainYellow);
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer2 = styled.button`
  text-transform: capitalize;
  font-size: 1.7rem;
  background: transparent;
  borer: 0.05rem solid black;
  color: var(--mainDark);
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.3rem 0.6rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &: hover {
    background: var(--lightRed);
    color: black;
  }
  &:focus {
    outline: none;
  }
`;
