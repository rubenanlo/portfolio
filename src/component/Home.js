import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: absolute;
  text-align: justify;
  font-weight: 100;
  line-height: 1.5rem;
  width: 60vw;
  bottom: 6vh;
  margin-left: 20vw;

  @media (min-width: 1023px) {
    bottom: 20vh;
    margin-left: 60vw;
    width: 30vw;
  }

  @media (orientation: landscape) {
    margin-left: 55vw;
    width: 34vw;
    overflow: auto;
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
