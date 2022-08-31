import React, { useState } from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 100;
  font-size: 0.9rem;
  text-align: justify;
  margin: 0 0 0 30vw;
  overflow: auto;
  height: 52.5vh;
  max-width: 50vw;

  & div {
    cursor: pointer;
  }

  & a {
    color: var(--white);
  }

  & .outline {
    border: 0.1rem solid;
    border-radius: 0.3rem;
  }

  @media (min-width: 1023px) {
    margin-top: 0;
    margin-left: 49.95vw;
    max-width: 45vw;
    padding: 1rem;
    & a {
      text-decoration: none;
    }
    & div {
      padding: 0 1rem;
    }
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
    max-width: 25vw;
    margin-left: 30vw;
    height: 55vh;
  }
`;

const DescriptionProject = styled.div`
  & .hide {
    display: none;
  }

  & .show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    margin: 0 50vw 0 2rem;
    text-align: justify;
    height: 65vh;
  }

  & .show p {
    font-weight: 100;
  }

  & .show a {
    color: var(--white);
    margin-right: 1rem;
  }

  & .show img {
    width: 60%;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 0.3rem;
  }

  @media (min-width: 1500px) {
    & .show {
      height: 50vh;
    }
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
      {window.innerWidth < 1023 ? (
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
            <p>Community to showcase guitars.</p>
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
              <img src="../../Plan-that-meal.png" alt="" />
              <p>
                PlanThatMeal is a MERN fullstack responsive web application that
                was created based on the people's needs to plan their meals for
                the week. This web application relies on a self-created REST
                API, with CRUD functionality among four different models,
                authentication, tailored content per type of user, and upload
                image feature.
              </p>
              <div>
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
            </div>
            <div className={className.guit ? "show" : "hide"}>
              <img src="../../Guithub.png" alt="" />
              <p>
                GuitHub is a fullstack responsive web application that was
                created to provide a platform where guitarists could share the
                looks of their guitars. This application was created based on
                express, node.js, mongoDB, and handlebars, and included a
                self-created REST API with CRUD functionality for 2 models
                (i.e., users, guitars), authentication and tailored content per
                type of user.
              </p>
              <div>
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
            </div>
            <div className={className.tick ? "show" : "hide"}>
              <img src="../../Tick-tock.png" alt="" />
              <p>
                Tick tock diaper is a responsive collision type of game that was
                created with JavaScript(ES6), HTML5, and CSS3. This game relies
                on classes, addEventListeners, DOM manipulation, and so much
                more.
              </p>
              <div>
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
            </div>
          </DescriptionProject>

          <ProjectContainer>
            <div
              className={className.plan ? "outline" : ""}
              id="plan"
              onClick={toggleClass}
            >
              <h2 id="plan">PlanThatMeal</h2>
              <p id="plan">
                Meal planner, recipes repository and shopping list generator.
              </p>
            </div>

            <div
              className={className.guit ? "outline" : ""}
              id="guit"
              onClick={toggleClass}
            >
              <h2 id="guit">GuitHub</h2>
              <p id="guit">Community to showcase guitars.</p>
            </div>
            <div
              className={className.tick ? "outline" : ""}
              id="tick"
              onClick={toggleClass}
            >
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
