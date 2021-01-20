import React from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom'
import HomePage from './pages/homepage.component.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact={false} path='/' component={HomePage} />
      </Switch>
      
    </div>
  );
}

export default App;
