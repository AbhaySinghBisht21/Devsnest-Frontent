// import './App.css';
import useForm from './useform'
function App() {
  const userName = useForm('email');
 
  const {type,value,onchange} = useForm('password')
  return (
    <div className="App">
    <input type={userName.type} value={userName.value} onChange={userName.onchange} />
    <input type={type} value={value} onChange={onchange} />

    </div>
  );
}

export default App;
