import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <span role="img" aria-label="hello">👋</span> Hello, I'm Clément Pinchedez.</p>
            <a class="link" href="https://github.com/clempinch" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
            <a class="link" href="https://twitter.com/clempinch" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
        </header>
      </div>
    )
  };
}

export default App;
