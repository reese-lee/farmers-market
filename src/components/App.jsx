import React from 'react';
import Grid from './Grid';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import NewPage from './NewPage';
import AvailableProduce from './AvailableProduce';
import Splash from './Splash';


function App() {
  return(
    <div>
      <Navbar/>

      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/produce' component={AvailableProduce}/>
      </Switch>
    </div>
  );
}

export default App;
