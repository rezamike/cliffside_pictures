import React from 'react';
import './App.css';

const styles = {
  main: {
    fontSize: "3em",
    margin: "0 auto"
  },
  sub: {
    fontSize: "1em"
  },
  body: {
    fontSize: "1.5em",
    width: "75%",
    margin: "8% auto auto auto"
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div style={styles.text}>
            <p style={styles.main}>cliffside pictures</p>
            <p style={styles.sub}>EST. 2009</p>
            <p style={styles.body}>Video production content for the new age - from here to the stars...</p>
          </div>
          <a href="mailto:michael.sanaiha@gmail.com?subject=Cliffside Pictures Inquiry" className="button">CONTACT US</a>
        </div>
      </div>
    )
  };
}

export default App;