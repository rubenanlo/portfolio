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

  & .line {
    border-bottom: 0.1rem solid;
    width: 20%;
    margin: auto;
  }
`;

function Projects() {
  return (
    <div>
      <Container>
        <div>
          <h2>PlanThatMeal</h2>
          <p>Meal planner, recipes repository and shopping list generator.</p>
        </div>
        <div className="line"></div>
        <div>
          <h2>Guithub</h2>
          <p>Community to share guitars.</p>
        </div>
        <div className="line"></div>
        <div>
          <h2>Tick tock diaper</h2>
          <p>
            Change as many diapers as you can with this collision type of game
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
