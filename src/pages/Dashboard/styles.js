import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h3 {
      color: var(--white);
    }

    .add {
      width: 100px;
      height: 50px;
      background-color: var(--darkgrey);
      color: var(--white);
      border: none;
    }
  }
  hr {
    width: 100%;
    border: 1px solid var(--darkgrey);
  }
  @media (min-width: 1010px) {
    width: 100%;
    section {
      flex-direction: row;
      justify-content: space-between;
    }
    nav {
      flex-direction: row;
      justify-content: space-around;

      .add {
        width: 100px;
        height: 40px;
        background-color: var(--darkgrey);
        color: var(--white);
        border: none;

        :hover {
          cursor: pointer;
        }
      }
      h3 {
        color: var(--white);
      }
    }
  }
  @media (min-width: 1100px) {
    width: 99%;
    nav {
      flex-direction: column;

      .add {
        width: 400px;
        height: 40px;
        background-color: var(--darkgrey);
        color: var(--white);
        border: none;

        :hover {
          cursor: pointer;
        }
      }
      h3 {
        color: var(--white);
        font-size: 30px;
      }
    }
  }
`;

export const DivMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: var(--darkgrey);
    color: var(--white);
    width: 80px;
    border: none;
    margin: 10px;
    font-family: "Inter";
    font-size: 15px;
  }
  img {
    width: 200px;
  }
`;
export const DivContact = styled.ul`
  width: 285px;
  min-height: 400px;
  max-height: 700px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--darkgrey);
  border-radius: 4px;

  @media (min-width: 1010px) {
    width: 900px;
  }
  @media (min-width: 1100px) {
    width: 980px;
  }
`;
