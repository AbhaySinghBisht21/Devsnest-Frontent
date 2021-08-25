import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home';
import Nav from './Nav';
import Profile from './Profile';


function App() {
  const [login,setLogin] = useState(false)


  return (
    <Router>

             <Nav login={login} />
           
        <Switch>
          <Route exact path="/">
                   <Home login={login} setLogin={setLogin}/>
          </Route>
          <Route exact path="/about">
                   <About/>
          </Route>

           <Route path='/dashboard'>
             <Dashboard />
          </Route>
          
          <Route path='/profile'>
             <Profile />
          </Route>

          
        </Switch>
      </Router>
  );
  }

export default App;
