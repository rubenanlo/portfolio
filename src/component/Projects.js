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
    cursor: pointer;
  }

  & a {
    color: var(--white);
  }
`;

const DescriptionProject = styled.div`
  & .hide {
    display: none;
  }

  & .show {
    position: absolute;
    bottom: 32vh;
    margin-left: 2rem;
    right: 45vw;
  }

  & .show a {
    color: var(--white);
    margin-right: 1rem;
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
    <>
      {window.innerWidth < 1025 ? (
        <ProjectContainer>
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
        </ProjectContainer>
      ) : (
        <>
          <DescriptionProject>
            <div className={className.plan ? "show" : "hide"}>
              <p>
                PlanThatMeal is a MERN fullstack responsive web application that
                was created based on the people's needs on planning their meals
                for the week. This web application relies on a self-created REST
                API, with CRUD functionality among four different models,
                authentication, tailored content per type of user, and upload
                image feature.
              </p>
              <a
                href="https://planthatmeal.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                href="https://github.com/rubenanlo/plan-that-meal-client"
                target="_blank"
                rel="noreferrer"
              >
                Github (front end)
              </a>
              <a
                href="https://github.com/rubenanlo/plan-that-meal-server"
                target="_blank"
                rel="noreferrer"
              >
                Github (back end)
              </a>
            </div>
            <div className={className.guit ? "show" : "hide"}>
              <p>
                GuitHub is a fullstack responsive web application that was
                created to provide a platform where guitarists could share their
                passion: guitars. This application was created based on express,
                node.js, mongoDB, and handlebars, and included a self-created
                REST API with CRUD functionality for 2 models (i.e., users,
                guitars), authentication and tailored content per type of user.
              </p>
              <a
                href="http://guithub.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                href="https://github.com/rubenanlo/guithub"
                target="_blank"
                rel="noreferrer"
              >
                Github (full stack)
              </a>
            </div>
            <div className={className.tick ? "show" : "hide"}>
              <p>
                Tick tock diaper is a responsive collision type of game that was
                created with JavaScript(ES6), HTML5, and CSS3. This game relies
                on classes, addEventListeners, DOM manipulation, and so much
                more.
              </p>
              <a
                href="https://rubenanlo.github.io/tick-tock-diaper/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                href="https://github.com/rubenanlo/tick-tock-diaper"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </DescriptionProject>

          <ProjectContainer>
            <div id="plan" onClick={toggleClass}>
              <h2 id="plan">PlanThatMeal</h2>
              <p id="plan">
                Meal planner, recipes repository and shopping list generator.
              </p>
            </div>

            <div id="guit" onClick={toggleClass}>
              <h2 id="guit">GuitHub</h2>
              <p id="guit">Community to share guitars.</p>
            </div>
            <div id="tick" onClick={toggleClass}>
              <h2>Tick tock diaper</h2>
              <p>
                Change as many diapers as you can with this collision type of
                game.
              </p>
            </div>
          </ProjectContainer>
        </>
      )}
    </>
  );
}

export default Projects;
