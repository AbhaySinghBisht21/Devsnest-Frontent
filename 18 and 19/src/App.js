import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Chess from './18/Chess';
function App() {

  return (
    <div>
    <div className="App">
      <p>There are 4 counter component instances that each manage their own state.</p>
    <Button/>
    <Button/>
    <Button/>
    <Button/>
    </div>
    <Chess/>
    </div>
  );
}

export default App;
