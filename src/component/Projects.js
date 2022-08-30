import React, { useState } from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  font-weight: 100;
  font-size: 0.9rem;
  position: absolute;
  text-align: justify;
  bottom: 6vh;
  margin: 0 5vw 0 40vw;

  @media (min-width: 1025px) {
    bottom: 20vh;
    margin-left: 60vw;
    width: 30vw;
    & a {
      text-decoration: none;
    }
  }

  & div {
    margin-bottom: 1.5rem;
  }

  & a {
    color: var(--white);
  }

  & .hide {
    display: none;
  }

  & .container {
    display: flex;
  }
`;

function Projects() {
  const [className, setClassName] = useState({
    plan: false,
    guit: false,
    tick: false,
  });

  const toggleClass = (e) => {
    e.target.id === "plan"
      ? setClassName({ plan: !className.plan })
      : e.target.id === "guit"
      ? setClassName({ guit: !className.guit })
      : setClassName({ tick: !className.tick });
  };

  return (
    <ProjectContainer>
      {window.innerWidth < 1025 ? (
        <>
          <div>
            <a
              href="https://planthatmeal.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>PlanThatMeal</h2>
            </a>
            <p>Meal planner, recipes repository and shopping list generator.</p>
          </div>
          <div>
            <a
              href="http://guithub.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Guithub</h2>
            </a>
            <p>Community to share guitars.</p>
          </div>
          <div>
            <a
              href="https://rubenanlo.github.io/tick-tock-diaper/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Tick tock diaper</h2>
            </a>
            <p>
              Change as many diapers as you can with this collision type of
              game.
            </p>
          </div>
        </>
      ) : (
        <>
          <div id="plan" className="container" onClick={toggleClass}>
            <div id="plan" className={className.plan ? "" : "hide"}>
              <p id="plan">
                PlanThatMeal is a MERN fullstack responsive web application that
                was created based on the people's needs on planning their meals
                for the week. This web application relies on a self created REST
                API, with four models, upload image feature, and pure CSS.
              </p>
            </div>
            <div id="plan">
              <h2 id="plan">PlanThatMeal</h2>
              <p id="plan">
                Meal planner, recipes repository and shopping list generator.
              </p>
            </div>
          </div>
          <div className="container" onClick={toggleClass}>
            <div id="guit" className={className.guit ? "" : "hide"}>
              <p id="guit">
                PlanThatMeal is a MERN fullstack responsive web application that
                was created based on the people's needs on planning their meals
                for the week. This web application relies on a self created REST
                API, with four models, upload image feature, and pure CSS.
              </p>
            </div>
            <div id="guit">
              <h2 id="guit">GuitHub</h2>
              <p id="guit">Community to share guitars.</p>
            </div>
          </div>
          <div id="tick" className="container" onClick={toggleClass}>
            <div className={className.tick ? "" : "hide"}>
              <p>
                PlanThatMeal is a MERN fullstack responsive web application that
                was created based on the people's needs on planning their meals
                for the week. This web application relies on a self created REST
                API, with four models, upload image feature, and pure CSS.
              </p>
            </div>
            <div>
              <h2>Tick tock diaper</h2>
              <p>
                Change as many diapers as you can with this collision type of
                game.
              </p>
            </div>
          </div>
        </>
      )}
    </ProjectContainer>
  );
}

export default Projects;
