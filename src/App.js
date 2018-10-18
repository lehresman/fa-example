import React, { Component } from 'react';
import { faPlusCircle, faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  render() {
    return (
      <div style={{margin: 'auto', width: 600, borderRadius: 5, background: '#efefef', padding: 30, fontFamily: 'Georgia'}}>
        <p>
          <FontAwesomeIcon icon={faCheckCircle}/>{' '}
          A simple example of an inline icon.
        </p>

        <p style={{color: '#c00', fontSize: 20}}>
          <FontAwesomeIcon icon={faCheckCircle}/>{' '}
          An example of the icon picking up the styles of the container.
        </p>

        <p style={{fontSize: 32}}>
          <span className="fa-layers">
            <FontAwesomeIcon icon={faCircle} style={{color: '#0c0'}}/>
            <FontAwesomeIcon icon={faPlusCircle} style={{color: '#00f'}}/>
          </span>{' '}
          An example of composed icons.
        </p>
      </div>
    );
  }
}

export default App;
