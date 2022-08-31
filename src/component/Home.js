import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  height: 55vh;
  display: flex;
  text-align: justify;
  font-weight: 100;
  line-height: 1.5rem;
  width: 60vw;
  bottom: 6vh;
  margin-left: 20vw;

  @media (min-width: 1023px) {
    margin-top: 20vh;
    margin-left: 49.95vw;
    max-width: 30vw;
    padding: 1rem;
  }

  @media (max-width: 1023px) and (orientation: landscape) {
    display: block;
    position: absolute;
    top: 20%;
    overflow: scroll;
    margin-left: 55vw;
    height: 100%;
    width: 34vw;
  }

  @media (min-width: 1500px) {
    width: 20vw;
    margin-left: 30vw;
  }
`;

function Home() {
  return (
    <div>
      <HomeContainer>
        <p>
          Lived in multiple countries, learner by heart, and always looking for
          the next challenge. Coding is my passion, and an efficient way to
          communicate with others. I love web development because it boosts
          users' productivity while connecting with them. Want to know more?
          check my projects, and contact me.
        </p>
      </HomeContainer>
    </div>
  );
}

export default Home;
