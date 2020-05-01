import React from 'react';
import './App.css';
import background from './Milkyway_Panorama True.jpg';

const styles = {
  header: {
    backgroundImage: `url(${background})`
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header" style={styles.header}>
        
      </header>
    </div>
  );
}

export default App;