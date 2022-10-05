import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) => (props.greenSchema ? "#B6E2D3" : "#868E96")};
  color: var(--black);
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--green);
  margin-top: 16px;
  width: 100%;

  :hover {
    border: 2px solid var(--white);
  }
  @media (min-width: 1010px) {
    height: 45px;
  }
`;
