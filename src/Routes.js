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
        <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
        <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
        <Route exact path={process.env.PUBLIC_URL + '/about'} component={About}/>
        <Route exact path={process.env.PUBLIC_URL + '/resume'} component={Resume}/>
      </Switch>
    </div>
  );
};

export default Routes;