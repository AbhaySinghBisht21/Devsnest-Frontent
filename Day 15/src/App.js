import './App.css';
import Buttons from './Buttons'

import { useState } from "react";

function App() {
  const [Clicked, setClicked] = useState(false);

  const Click = () => {
    if (Clicked) setClicked(false);
    else setClicked(true);
  };
  return (
          <div>
          
          {!Clicked ? <Buttons click={Click} /> : "You liked this"}
          </div>
  );
}
export default App;
