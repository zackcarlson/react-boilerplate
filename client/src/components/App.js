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
  constructor(props) {
    super(props);
    this.state = {
      navItems: { '/': 0, '/instructions': 1 }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(location) {
    if (this.state.navItems[location.pathname]) {
      console.log(this.state.navItems[location.pathname]);
    }
  }

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
            <nav className='navbar' onClick={this.handleClick(location)}>
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