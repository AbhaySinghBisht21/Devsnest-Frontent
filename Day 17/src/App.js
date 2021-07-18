
import './App.css';
import Card from './Card'
function App() {
  return (
    <div className="App">
      <h1>Calorie Read Only</h1>
      <div className="card">
        <Card food="Pizza" cal="10" />
        <Card food="Burger" cal="20" />
        <Card food="Coke" cal="30" />
        <Card food="Browne" cal="40" />
        <Card food="Fried Rice" cal="50" />
        <Card food="Lassania" cal="60" />
        <Card food="Pani Puri" cal="70" />
      </div>
    </div>
  );
}

export default App;
