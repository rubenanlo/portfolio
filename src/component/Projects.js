import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-weight: 100;
  font-size: 0.9rem;
  position: absolute;
  bottom: 0;
  margin: 0 1rem 0 6rem;
  text-align: justify;

  & div {
    margin-bottom: 2.5rem;
  }

  & a {
    color: RGB(191, 191, 191);
  }
`;

function Projects() {
  return (
    <div>
      <Container>
        <div>
          <a href="https://planthatmeal.netlify.app/">
            <h2>PlanThatMeal</h2>
          </a>
          <p>Meal planner, recipes repository and shopping list generator.</p>
        </div>
        <div>
          <a href="http://guithub.herokuapp.com/">
            <h2>Guithub</h2>
          </a>
          <p>Community to share guitars.</p>
        </div>
        <div>
          <a href="https://rubenanlo.github.io/tick-tock-diaper/">
            <h2>Tick tock diaper</h2>
          </a>
          <p>
            Change as many diapers as you can with this collision type of game
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
