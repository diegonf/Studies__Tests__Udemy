import React from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  return (
    <div>
      <button onClick={() => nav('/page2')}>Go to Page2</button>
    </div>
  );
}

export default App;
