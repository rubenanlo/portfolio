import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 15rem 0rem 0rem 5rem;
  text-align: justify;
`;

function Home() {
  return (
    <div>
      <Container>
        <p>
          Lived in multiple countries, learner by heart, and always looking for
          the next challenge. This is me, coding is my passion, coding is
          communicating with others, and I love web applications because they
          connects people. Want to know more? check my projects, and contact me.
        </p>
      </Container>
    </div>
  );
}

export default Home;
