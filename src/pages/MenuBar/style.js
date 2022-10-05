import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  img {
    width: 150px;
  }
  button {
    background-color: var(--darkgrey);
    color: var(--white);
    width: 80px;
    border: none;
    margin: 10px;
    font-family: "Inter";
    font-size: 15px;
  }
`;
