import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  font-weight: 300;
  font-size: 1.3rem;

  & a {
    text-decoration: none;
    color: var(--white);
  }

  & .active {
    position: relative;
    border-bottom: 0.1rem solid;
    width: 50vw;
  }
`;

function Navbar() {
  return (
    <div>
      <Container>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
      </Container>
    </div>
  );
}

export default Navbar;
