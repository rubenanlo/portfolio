import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import styled from "styled-components";

const NavbarContainer = styled.div`
  margin-top: 3vh;
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
      <NavbarContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
