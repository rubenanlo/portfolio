import { Route, Routes } from "react-router-dom";
import "./App.css";
import Canvas from "./component/Canvas";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import styled from "styled-components";

const All = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  color: var(--white);
  font-family: "Montserrat", sans-serif;
  margin-top: 2rem;
  margin-left: 2rem;

  & h1 {
    font-weight: 300;
  }

  & h2 {
    font-weight: 300;
    font-size: 1.2rem;
  }

  & img {
    margin-right: 0.5rem;
  }

  .mailto {
    width: 2rem;
  }
  @media (min-width: 1500px) {
    margin: 0 25%;
    /* width: 25%; */
    padding: 10px;
  }
`;

function App() {
  return (
    <div className="App">
      <All>
        <Canvas />
        <Container>
          <h1>Ruben Andino</h1>
          <p>Full Stack Web Developer</p>
          <a
            href="https://www.linkedin.com/in/ruben-andino/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../linkedin.svg" alt="linkedin" />
          </a>
          <a
            href="https://github.com/rubenanlo"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../github.svg" alt="github" />
          </a>
          <a href="mailto:randinocv@gmail.com">
            <img className="mailto" src="../email.svg" alt="email" />
          </a>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>
      </All>
    </div>
  );
}

export default App;
