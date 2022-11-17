import React from 'react';
import { useNavigate } from "react-router-dom";

function Page2() {
  const nav = useNavigate();

  return (
    <div>
      <button onClick={() => nav('/')}>Return to App</button>
    </div>
  );
}

export default Page2;