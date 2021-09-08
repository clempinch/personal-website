import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <span role="img" aria-label="hello">
              👋
            </span>{" "}
            Hello, I am Clément Pinchedez.
            <br />I am a software engineer at{" "}
            <a
              className="link"
              href="https://www.criteo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Criteo
            </a>
            .<br />I live in Paris.
          </p>
          <div className="social">
            <a
              className="link"
              href="https://github.com/clempinch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
            <a
              className="link"
              href="https://twitter.com/clempinch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/clementpinchedez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
