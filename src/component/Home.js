import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: absolute;
  text-align: justify;
  font-weight: 100;
  line-height: 1.5rem;
  bottom: 50vh;
  margin-left: 2rem;
  right: 10vw;
`;

function Home() {
  return (
    <div>
      <HomeContainer>
        <p>
          Lived in multiple countries, learner by heart, and always looking for
          the next challenge. This is me, coding is my passion, coding is
          communicating with others, and I love web applications because they
          connects people. Want to know more? check my projects, and contact me.
        </p>
      </HomeContainer>
    </div>
  );
}

export default Home;
