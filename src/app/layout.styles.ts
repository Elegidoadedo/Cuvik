import styled from "styled-components";

export const GridLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100%;
`;

export const NavBar = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;
  height: 100%;
  border-right: 1px solid #000;
`;
