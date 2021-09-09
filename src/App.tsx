import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cv } from "./pages/Cv";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import faceImg from "./assets/face.jpeg";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <a
                href="https://blog.clempinch.com"
                target="_blank"
                rel="noreferrer"
              >
                Blog{" "}
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  size="xs"
                  className="append-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
        <div className="app-content">
          <div className="left-side-panel">
            <img src={faceImg} alt="Face" className="face" />
            <div className="social">
              <a
                className="link"
                href="https://github.com/clempinch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="prepend-icon" />{" "}
                Github
              </a>
              <a
                className="link"
                href="https://twitter.com/clempinch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="prepend-icon" />{" "}
                Twitter
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/clementpinchedez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="prepend-icon" />{" "}
                LinkedIn
              </a>
            </div>
          </div>
          <div className="content">
            {" "}
            <Switch>
              <Route path="/cv">
                <Cv />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             <span role="img" aria-label="hello">
//               👋
//             </span>{" "}
//             Hello, I am Clément Pinchedez.
//             <br />I am a software engineer at{" "}
//             <a
//               className="link"
//               href="https://www.criteo.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Criteo
//             </a>
//             .<br />I live in Paris.
//           </p>
//           <div className="social">
//             <a
//               className="link"
//               href="https://github.com/clempinch"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FontAwesomeIcon icon={faGithub} /> Github
//             </a>
//             <a
//               className="link"
//               href="https://twitter.com/clempinch"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FontAwesomeIcon icon={faTwitter} /> Twitter
//             </a>
//             <a
//               className="link"
//               href="https://www.linkedin.com/in/clementpinchedez/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
//             </a>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
