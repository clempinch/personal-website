import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <span role="img" aria-label="hello">👋</span> Hello, I'm Clément Pinchedez.
          </p>
          <div class="social">
            <a class="link" href="https://github.com/clempinch" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
            <a class="link" href="https://twitter.com/clempinch" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
            <a class="link" href="https://www.linkedin.com/in/clementpinchedez/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
          </div>
        </header>
      </div>
    )
  };
}

export default App;
