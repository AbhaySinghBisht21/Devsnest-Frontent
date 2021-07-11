import './App.css';
import Buttons from './Buttons'

import { useState } from "react";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const Clicked = () => {
    if (buttonClicked) setButtonClicked(false);
    else setButtonClicked(true);
  };
  return (
          <div>
          
          {!buttonClicked ? <Buttons click={Clicked} /> : "You liked this"}
          </div>
  );
}
export default App;
