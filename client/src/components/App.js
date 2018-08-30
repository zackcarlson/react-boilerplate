import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import Home from './Home';
import Instructions from './Instructions';
import '../css/App.css';

export default class App extends Component {
  render() {
    const activeNav = { 
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      textDecorationColor: 'blue',
      textDecorationStyle: 'double',
    }; 

    return (
      <Router>
        <Route render={({location}) => (
          <div>
            <nav className='navbar'>
              <NavLink exact to='/' activeStyle={activeNav}>HOME</NavLink>
              <NavLink exact to='/instructions' activeStyle={activeNav}>INSTRUCTIONS</NavLink>
            </nav>
            <TransitionGroup>
              <CSSTransition
                timeout={300}
                classNames='fade'
                key={location.key}
              >
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/instructions' component={Instructions} />
                  <Route render={() => <div className='page'><h1>Not Found</h1></div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )} />
      </Router>
    )
  }
}