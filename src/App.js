import React, {useState} from 'react';

const App = () => {
  const [result, setResult] = useState("hii");
  return (
    <div className="App">
      <h1>{result}</h1>
    </div>
  );
}

export default App;
