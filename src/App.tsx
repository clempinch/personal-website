import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBluesky,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cv } from "./pages/Cv";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import faceImg from "./assets/face.jpeg";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">{t("app.home")}</Link>
            </li>
            <li>
              <Link to="/cv">{t("app.cv")}</Link>
            </li>
            <li>
              <a
                href="https://blog.clempinch.com"
                target="_blank"
                rel="noreferrer"
              >
                {t("app.blog")}{" "}
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
                href="https://www.linkedin.com/in/clementpinchedez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="prepend-icon" />{" "}
                LinkedIn
              </a>
              <a
                className="link"
                href="https://bsky.app/profile/clempinch.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faBluesky} className="prepend-icon" />{" "}
                Twitter
              </a>
              <a
                className="link"
                href="https://github.com/clempinch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="prepend-icon" />{" "}
                Github
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
