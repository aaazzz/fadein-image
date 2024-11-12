import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import FadeComponent from './FadeImage';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fadeout overlay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <div className="overlay"></div>}
      <FadeComponent>
        <img src="cat.jpg" width="500px" alt="Sample Image" />
      </FadeComponent>
    </div>
  );
}

export default App;
