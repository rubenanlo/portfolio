import { Route, Routes } from "react-router-dom";
import "./App.css";
import Canvas from "./component/Canvas";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import styled from "styled-components";

const All = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  color: var(--white);
  font-family: "Montserrat", sans-serif;
  margin-top: 4rem;
  margin-left: 2rem;

  & h1 {
    font-weight: 300;
  }

  & h2 {
    font-weight: 300;
  }

  & img {
    margin-right: 0.5rem;
  }
`;

function App() {
  return (
    <div className="App">
      <All>
        <Container>
          <Canvas />
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
            <img src="../email.svg" alt="email" />
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
