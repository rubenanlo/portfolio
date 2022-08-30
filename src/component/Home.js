import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  margin: 0rem 1rem 2.5rem 5rem;
  text-align: justify;
  font-weight: 100;
  position: absolute;
  bottom: 0;
  line-height: 1.5rem;
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
