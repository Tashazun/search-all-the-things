import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from '../search/Search';
import CharacterDetail from '../characters/CharacterDetail';

export default class App extends Component {

 
    render() {
      return (
        <Router>
          <div>
            <Header />
            <main>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/characters/:id" render={({ match }) => {
                  return <CharacterDetail characterID={match.params.id}/>;
                }}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>
      );
    }
  }
