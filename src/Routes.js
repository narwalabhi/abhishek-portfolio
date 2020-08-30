import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import  NavBar from './components/NavigationBar';
import About from './components/About'
import Resume from './components/Resume'
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/resume" component={Resume}/>
      </Switch>
    </div>
  );
};

export default Routes;